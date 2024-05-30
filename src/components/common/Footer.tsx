import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-4 px-4">
      <p className="text-xs text-center break-keep text-slate-400 leading-4 mt-3">
        꼬순내는 반려동물 주인들과 전문 반려동물 미용사를 연결하는 플랫폼입니다.
        저희는 사용자들에게 편리하고 원활한 경험을 제공하기 위해 노력하고
        있습니다. (주)꼬순내가 소유/운영/관리하는 웹사이트 및 앱 내 예약정보를
        포함한 모든정보,UI, 콘텐츠 등에 대한 무단 복제, 배포, 방송 또는 전송,
        스크래핑 등의 행위는 관련 법령에 의하여 엄격히 금지 됩니다. 콘텐츠산업
        진흥법에 따른 표시 © Kkosoonae 문의하기: 전화번호: 1234-0777
        <a href="mailto:support@kkosoonae.com">support@kkosoonae.com</a>
        <address>주소:서울특별시 강남구 봉은사로 427</address>
        &copy; 2024 꼬순내. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
