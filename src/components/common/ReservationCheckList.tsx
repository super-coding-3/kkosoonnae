import React from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";

const reservationData = {
  salonName: "도그 살롱 멍멍이",
  reservationDate: "2023-06-25",
  reservationTime: "14:00",
  breed: "토이 푸들",
  petName: "초코",
  weight: "2.5kg",
  cutStyle: "귀여운 곰돌이 컷",
  characteristics: "활발하고 친화력이 좋아요. 목욕할 때 얌전히 있는 편이에요.",
};

const ReservationCheckList: React.FC = () => {
  const location = useLocation();
  // TODO id값 쓰지않고 변경하기 location.pathname.startsWith('/product');
  const { id } = useParams();

  const showReservationComponent =
    location.pathname === `{/reservation/:${id}}`;

  return (
    <div className="px-4">
      {showReservationComponent && (
        <CheckTitle className="py-8 flex flex-col items-center">
          <img
            src="/img/reservation/icon-reservation.svg"
            alt="예약확인 아이콘"
          />
          <h2 className="text-xl mt-4">예약확인</h2>
        </CheckTitle>
      )}

      <ReservationCheck className="flex flex-col gap-4">
        <p className="flex justify-between items-center">
          업체명
          <span className=" text-zinc-500 text-base">도그 살롱 멍멍이</span>
        </p>
        <p className="flex justify-between items-center">
          예약일자
          <span className=" text-zinc-500 text-base">2024/05/10(수)</span>
        </p>
        <p className="flex justify-between items-center">
          예약시간
          <span className=" text-zinc-500 text-base">11:00</span>
        </p>
        <p className="flex justify-between items-center">
          스타일
          <span className=" text-zinc-500 text-base">곰돌이컷</span>
        </p>
        <p className="flex justify-between items-center">
          견종/묘종
          <span className=" text-zinc-500 text-base">포메라이안</span>
        </p>
        <p className="flex justify-between items-center">
          펫 이름
          <span className=" text-zinc-500 text-base">초코</span>
        </p>
        <p className="flex justify-between items-center">
          몸무게
          <span className=" text-zinc-500 text-base">5kg</span>
        </p>
        <p className="flex justify-between items-center">
          특징
          <span className=" text-zinc-500 text-base">포메는 참지않쥐,,</span>
        </p>
      </ReservationCheck>
      {showReservationComponent && (
        <div className="flex items-center gap-1 my-4">
          <BtnBorder>이전</BtnBorder>
          <BtnMain className=" bg-MAIN_COLOR text-MAIN_IVORY rounded">
            예약완료
          </BtnMain>
        </div>
      )}
    </div>
  );
};

const ReservationCheck = styled.div`
  border-top: 1px solid #492d28;
  border-bottom: 1px solid #492d28;
  padding: 30px;
`;

const CheckTitle = styled.div`
  img {
    width: 80px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const BtnBorder = styled.button`
  width: 49%;
  height: 44px;
  border-radius: 8px;
  border: 1px solid #492d28;
  background: var(--White, #fff);
  color: #492d28;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnMain = styled.button`
  width: 49%;
  height: 44px;
  border-radius: 8px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default ReservationCheckList;
