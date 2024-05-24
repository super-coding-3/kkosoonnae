import React, { useEffect } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    kakao: any;
  }
  const kakao: any;
}

const KakaoMap: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    if (container && window.kakao && window.kakao.maps) {
      const options = {
        center: new window.kakao.maps.LatLng(37.5571, 126.9243),
        level: 4,
      };
      const map = new window.kakao.maps.Map(container, options);

      // 예시 마커 추가 (원하는 경우)
      const markerPosition = new window.kakao.maps.LatLng(
        33.450701,
        126.570667
      );
      const markerPosition_one = new window.kakao.maps.LatLng(
        32.450701,
        133.570667
      );
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }
  }, []);

  return <MapDiv id="map" />;
};

export default KakaoMap;
const MapDiv = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 10px;
`;
