import { useEffect, useState } from "react";
import { Store } from "./LocationApi";

import React from "react";

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
  const [filteredStores, setFilteredStores] = useState<Store[]>(stores);
  const [searchTerm, setSearchTerm] = useState("");
  const [markers, setMarkers] = useState<any[]>([]); {/* 마커 위치 지정 */}
  const [overlays, setOverlays] = useState<any[]>([]); {/* 오버레이 위치 지정 */}

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

          const zoomControl = new window.kakao.maps.ZoomControl();
          mapInstance.addControl(
            zoomControl,
            window.kakao.maps.ControlPosition.RIGHT
          );

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

    const initialLat = 37.5022;
    const initialLon = 127.0321;
    initializeMap(initialLat, initialLon);
  }, []);


  useEffect(() => {
    if (map) {
      markers.forEach((marker) => marker.setMap(null));  
      overlays.forEach((overlay) => overlay.setMap(null)); 

      const newMarkers: any[] = [];
      const newOverlays: any[] = [];

      filteredStores.forEach((store) => {
        const markerPosition = new window.kakao.maps.LatLng(
          store.lat,
          store.lon
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
        newMarkers.push(marker);

        const content = `
          <div style="padding:2px; font-size:10px; background: white; border:1px solid black; border-radius:1px">
          <a href="/salon/${store.storeNo}" target="_blank">${store.storeName}</a>
          </div>
        `;

        const customOverlay = new window.kakao.maps.CustomOverlay({
          map: map,
          position: marker.getPosition(),
          content: content,
          yAnchor: 3.0,
        });

        customOverlay.setMap(map);
        newOverlays.push(customOverlay);
      });

      setMarkers(newMarkers); 
      setOverlays(newOverlays); 
    }
  }, [filteredStores, map]);

  useEffect(() => {
    setFilteredStores(
      stores.filter((store) =>
        store.storeName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, stores]);

  return (
    <>
    <h1 className="text-xl mt-4 font-semibold">내 주변 매장 지도</h1>
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="매장 검색"
      className="w-full mt-2 rounded-lg p-2 border mb-4"
    />
    <div id="map" className="w-full h-72 rounded-xl border" />
  </>
  );
};

export default KakaoMap;
