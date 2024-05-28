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

const KakaoMap: React.FC<KakaoMapProps> = ({ stores }) => {
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

          {
            /* Note:지도 확대/축소 기능 */
          }
          const zoomControl = new window.kakao.maps.ZoomControl();
          mapInstance.addControl(
            zoomControl,
            window.kakao.maps.ControlPosition.RIGHT
          );

          {
            /* Note:현재 내 위치를 나타내는 코드 */
          }
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              const currentLat = initialLat;
              const currentLon = initialLon;

              const currentMarkerPosition = new window.kakao.maps.LatLng(
                currentLat,
                currentLon
              );

              const currentMarker = new window.kakao.maps.Marker({
                position: currentMarkerPosition,
                title: "현재 내 위치",
                image: new window.kakao.maps.MarkerImage(
                  "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
                  new window.kakao.maps.Size(20, 20)
                ),
              });

              currentMarker.setMap(mapInstance);
              mapInstance.setCenter(currentMarkerPosition);

              const currentOverlayContent = `
                <div style="padding:2px; font-size:12px; background: none; ">
                  현재 내 위치
                </div>
              `;

              const currentOverlay = new window.kakao.maps.CustomOverlay({
                map: mapInstance,
                position: currentMarker.getPosition(),
                content: currentOverlayContent,
                yAnchor: 1.5,
              });

              currentOverlay.setMap(mapInstance);
            });
          }
        });
      };
      document.head.appendChild(script);
    };

    // 초기 지도 설정
    const initialLat = 37.5022;
    const initialLon = 127.0321;
    initializeMap(initialLat, initialLon);
  }, []);

  useEffect(() => {
    if (map) {
      stores.forEach((store) => {
        const markerPosition = new window.kakao.maps.LatLng(
          store.lat,
          store.lon
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);

        const content = `
          <div style="padding:2px; font-size:10px; background: white; border:1px solid black; border-radius:1px">
            ${store.storeName}
          </div>
        `;

        const customOverlay = new window.kakao.maps.CustomOverlay({
          map: map,
          position: marker.getPosition(),
          content: content,
          yAnchor: 3.0,
        });

        customOverlay.setMap(map);
      });
    }
  }, [stores, map]);

  return (
    <>
      <h1 className="text-xl  mt-4 ml-2 font-semibold">내 주변 매장 지도</h1>
      <MapDiv id="map" />
    </>
  );
};

export default KakaoMap;

const MapDiv = styled.div`
  width: 98%;
  height: 300px;
  margin-top: 10px;
  margin-left: 5px;
  border-radius: 10px;
`;
