import React from "react";

import { Avatar } from "flowbite-react";
import { Link } from "react-router-dom";

import { PRICE_COMMA } from "../../constants/constants";

interface MyReservationCardProps {
  reservationNo: number;
  date: string;
  time: string;
  status: string;
  storeImg: string;
  storeName: string;
  style: string;
  price: string;
  delBtnOnClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MyReservationCard: React.FC<MyReservationCardProps> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-solid border-MAIN_LIGHT_COLOR rounded-2xl w-full h-fit p-3 gap-3 mb-5 shadow-md">
      <div className="text-gray-400">
        {props.date} {props.time} • {props.status}
      </div>
      <div className="flex justify-start items-center px-5 py-3 gap-10 w-full">
        <Avatar img={props.storeImg} size="xl" bordered color="light" />
        <div className="flex flex-col gap-2">
          <div className="font-bold">{props.storeName}</div>
          <div className="text-gray-400 font-bold">{props.style}</div>
          <div className="text-gray-400 font-bold">
            {props.price.toString().replace(PRICE_COMMA, ",")}
          </div>
        </div>
      </div>
      <div className="w-full flex gap-3 h-10 ">
        <button
          onClick={props.delBtnOnClick}
          className="w-1/2 text-MAIN_LIGHT_COLOR border-2 border-MAIN_LIGHT_COLOR rounded-lg"
        >
          예약 취소
        </button>
        <Link
          to={"/my_reservation/detail/" + props.reservationNo}
          className="w-1/2 bg-MAIN_LIGHT_COLOR text-MAIN_IVORY rounded-lg flex items-center justify-center"
        >
          <p>예약 상세</p>
        </Link>
      </div>
    </div>
  );
};

export default MyReservationCard;
