import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HttpClient from "../../utils/api/customAxios";

declare global {
  interface Window {
    kakao: any;
  }
}

interface Store {
  storeNo: number;
  storeName: string;
  content: string;
  phone: string;
  roadAddress: string;
  lat: number;
  lon: number;
  openingTime: string;
  closingTime: string;
  storeImg: string[];
  style: {
    styleId: number;
    styleName: string;
    img: string;
    price: number;
  }[];
}

const KakaoMap: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    const fetchStores = async (lat: number, lon: number) => {
      try {
        const response = await HttpClient.get("/KkoSoonNae/store/nearby", {
          params: { lat, lon },
        });
        setStores(response.data);
      } catch (error) {
        console.error("Error fetching store data:", error);
      }
    };

    const initializeMap = (latitude: number, longitude: number) => {
      const script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_MAP_KEY}&autoload=false`;
      script.async = true;
      script.onload = () => {
        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
          const options = {
            center: new window.kakao.maps.LatLng(latitude, longitude),
            level: 6,
          };
          const mapInstance = new window.kakao.maps.Map(container, options);
          setMap(mapInstance);

        });
      };
      document.head.appendChild(script);
    };

    // 초기 지도 설정
    const initialLat = 37.5571;
    const initialLon = 126.9243;
    fetchStores(initialLat, initialLon);
    initializeMap(initialLat, initialLon);
  }, []);

  useEffect(() => {
    if (map) {
      stores.forEach((store) => {
        const markerPosition = new window.kakao.maps.LatLng(store.lat, store.lon);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);

        const content = `
          <div style="padding:5px; background: white; border: 1px solid black;">
            ${store.storeName}
          </div>
        `;

        const customOverlay = new window.kakao.maps.CustomOverlay({
          map: map,
          position: marker.getPosition(),
          content: content,
          yAnchor: 2.3,
        });

        customOverlay.setMap(map);
      });
    }
  }, [stores, map]);

  return (
    <>
      <h1 className="text-[20px] ml-2 mt-2">내 주변 지도</h1>
      <MapDiv id="map" />
    </>
  );
};

export default KakaoMap;

const MapDiv = styled.div`
  width: 98%;
  height: 300px;
  margin-top: 20px;
  margin-left: 5px;
  border-radius: 10px;
`;
