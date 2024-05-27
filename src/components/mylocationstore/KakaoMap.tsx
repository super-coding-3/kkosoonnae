import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Store } from "./LocationApi";

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  stores: Store[];
}

const KakaoMap: React.FC<KakaoMapProps> = ({stores}) => {
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
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
    const initialLat = 37.4995;
    const initialLon = 127.0332;
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
      <h1 className="text-xl mb-4 mt-4 ml-2 font-semibold">내 주변 매장 지도</h1>
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
