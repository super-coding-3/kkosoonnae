import React from "react";
import { useLocation } from "react-router-dom";
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
      <div className="py-8 flex flex-col items-center">
        <img
          src="/img/reservation/icon-reservation.svg"
          alt="예약확인 아이콘"
          className="w-[80px]shadow-md"
        />
        <h2 className="text-xl mt-4">예약확인</h2>
      </div>

      <div className="flex flex-col gap-4 border-y-2 border-MAIN_LIGHT_COLOR p-8	">
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
      </div>
      {showReservationComponent ? (
        <div className="flex items-center gap-1 my-4">
          <button className="text-sm w-1/2 h-11 flex justify-center items-center border border-MAIN_COLOR bg-white rounded">
            이전
          </button>
          <button
            className="text-sm w-1/2 h-11 flex justify-center items-center bg-MAIN_COLOR text-MAIN_IVORY rounded"
            onClick={onReservationComplete}
          >
            예약완료
          </button>
        </div>
      ) : (
        <BtnSubmit value="확인 완료" onClick={onReservationComplete} />
      )}
    </div>
  );
};

export default ReservationCheckList;
