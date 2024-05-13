import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="py-4 px-4">
      <p className="text-xs text-center break-keep text-slate-400 leading-4">
        대표자명 : 원종석, 권규석 사업자 등록번호 : 120-86-08810 주소 : 서울
        강남구 봉은사로427, 9층 통신판매 신고번호 : 2021-서울강남-02122 전화번호
        : 1644-0579 이메일 주소: wyatt1@kakaocorp.com 호스팅 서비스 제공자 :
        (주)카카오
      </p>
      <p className="text-xs text-center break-keep text-slate-400 leading-4 mt-3">
        (주)와이어트는 통신판매중개자로서 카카오헤어샵의 거래당사자가 아니며,
        입점판매자가 등록한 상품정보 및 거래에 대해 책임을 지지 않습니다.
        (주)와이어트가 소유/운영/관리하는 웹사이트 및 앱 내 예약정보를 포함한
        모든정보,UI, 콘텐츠 등에 대한 무단 복제, 배포, 방송 또는 전송, 스크래핑
        등의 행위는 관련 법령에 의하여 엄격히 금지 됩니다. 콘텐츠산업 진흥법에
        따른 표시 © Wyatt
      </p>
    </div>
  );
};

export default Footer;
