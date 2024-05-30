import React from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
import { reservationFormValues } from "../reservation/ReservationForm";
import BtnSubmit from "./BtnSubmit";

interface ReservationCheckListProps {
  reservationData: reservationFormValues | null;
  onReservationComplete: () => void;
}

const ReservationCheckList: React.FC<ReservationCheckListProps> = ({
  reservationData,
  onReservationComplete,
}) => {
  const location = useLocation();
  const showReservationComponent = location.pathname.startsWith("/reservation");

  if (!reservationData) {
    return (
      <div>
        <h2>예약 확인</h2>
        <p>예약 정보가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="px-4 pb-24">
      <CheckTitle className="py-8 flex flex-col items-center">
        <img
          src="/img/reservation/icon-reservation.svg"
          alt="예약확인 아이콘"
        />
        <h2 className="text-xl mt-4">예약확인</h2>
      </CheckTitle>

      <ReservationCheck className="flex flex-col gap-4">
        <p className="flex justify-between items-center">
          업체명
          <span className=" text-zinc-500 text-base">
            {reservationData.storeName}
          </span>
        </p>
        <p className="flex justify-between items-center">
          예약일자
          <span className=" text-zinc-500 text-base">
            {reservationData.reservationDate}
          </span>
        </p>
        <p className="flex justify-between items-center">
          예약시간
          <span className=" text-zinc-500 text-base">
            {reservationData.reservationTime}
          </span>
        </p>
        <p className="flex justify-between items-center">
          스타일
          <span className=" text-zinc-500 text-base">
            {reservationData.cutStyle}
          </span>
        </p>

        <p className="flex justify-between items-center">
          펫 이름
          <span className=" text-zinc-500 text-base">
            {reservationData.petName}
          </span>
        </p>
        <p className="flex justify-between items-center">
          견종/묘종
          <span className=" text-zinc-500 text-base">
            {reservationData.breed}
          </span>
        </p>
        <p className="flex justify-between items-center">
          몸무게
          <span className=" text-zinc-500 text-base">
            {reservationData.weight} kg
          </span>
        </p>
        <p className="flex justify-between items-center">
          특징
          <span className=" text-zinc-500 text-base">
            {" "}
            {reservationData.characteristics}
          </span>
        </p>
      </ReservationCheck>
      {showReservationComponent ? (
        <div className="flex items-center gap-1 my-4">
          <BtnBorder>이전</BtnBorder>
          <BtnMain
            className=" bg-MAIN_COLOR text-MAIN_IVORY rounded"
            onClick={onReservationComplete}
          >
            예약완료
          </BtnMain>
        </div>
      ) : (
        <BtnSubmit value="확인 완료" onClick={onReservationComplete} />
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
