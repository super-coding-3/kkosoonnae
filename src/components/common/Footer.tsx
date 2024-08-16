import React from "react";
import useModal from "../../hooks/useModal";
import CustomModal from "../common/CustomModal";
import BtnSubmit from "../common/BtnSubmit";

const Footer: React.FC = () => {
  const { isOpen, open, close } = useModal({ initiallyOpen: false });

  return (
    <footer className="pt-4 pb-10 px-4 text-center">
      <p className="text-xs text-center break-keep text-slate-400 leading-4 mt-3">
        꼬순내는 반려동물 주인들과 전문 반려동물 미용사를 연결하는 플랫폼입니다.
        저희는 사용자들에게 편리하고 원활한 경험을 제공하기 위해 노력하고
        있습니다. (주)꼬순내가 소유/운영/관리하는 웹사이트 및 앱 내 예약정보를
        포함한 모든정보,UI, 콘텐츠 등에 대한 무단 복제, 배포, 방송 또는 전송,
        스크래핑 등의 행위는 관련 법령에 의하여 엄격히 금지 됩니다. 콘텐츠산업
        진흥법에 따른 표시 © Kkosoonae 문의하기: 전화번호: 1234-0777
        <a href="mailto:support@kkosoonae.com">support@kkosoonae.com</a>
        &copy; 2024 꼬순내. All rights reserved.
      </p>
      <address className="text-xs text-center break-keep text-slate-400 leading-4 mt-3">
        주소:서울특별시 강남구 봉은사로 427
      </address>
      <button
        className="text-xs  break-keep text-slate-400 leading-4"
        onClick={open}
      >
        개인정보처리방침
      </button>
      <CustomModal show={isOpen} onClose={close}>
        <h3 className="text-xl border-b-[1px] border-gray-200 mb-2">
          개인정보처리방침
        </h3>
        <div className="py-4 h-32 overflow-y-scroll">
          <strong className="text-black font-semibold text-sm"></strong>
          <p className=" text-xs text-gray-600">
            개인정보의 처리 및 보유기간 <br /> ① (개인정보처리자명은(는)) 법령에
            따른 개인정보 보유ㆍ이용기간 또는 정보주체로부터 개인정보를 수집
            시에 동의 받은 개인정보 보유ㆍ이용기간 내에서 개인정보를
            처리ㆍ보유합니다.
            <br /> ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
            홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴 시까지 다만,
            다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지 관계 법령
            위반에 따른 수사ㆍ조사 등이 진행 중인 경우에는 해당 수사ㆍ조사 종료
            시까지 홈페이지 이용에 따른 채권ㆍ채무관계 잔존 시에는 해당
            채권ㆍ채무관계 정산 시까지 (예외 사유) 시에는 (보유기간) 까지 ①
            (개인정보처리자명은(는)) 법령에 따른 개인정보 보유ㆍ이용기간 또는
            정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보
            보유ㆍ이용기간 내에서 개인정보를 처리ㆍ보유합니다.
            <br /> ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
            홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴 시까지 다만,
            다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지 관계 법령
            위반에 따른 수사ㆍ조사 등이 진행 중인 경우에는 해당 수사ㆍ조사 종료
            시까지 홈페이지 이용에 따른 채권ㆍ채무관계 잔존 시에는 해당
            채권ㆍ채무관계 정산 시까지 (예외 사유) 시에는 (보유기간) 까지
          </p>
        </div>

        <BtnSubmit type="button" onClick={close} active={true}>
          확인
        </BtnSubmit>
      </CustomModal>
    </footer>
  );
};

export default Footer;
