import { Avatar } from "flowbite-react";
import React from "react";

interface MyReservationCardProps {
  date: string;
  time: string;
  status: string;
  store_img: string;
  store_name: string;
  style: string;
  price: string;
}

const MyReservationCard: React.FC<MyReservationCardProps> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-solid border-MAIN_LIGHT_COLOR rounded-2xl w-full h-fit p-3 gap-3 mb-5 shadow-md">
      <div className="text-gray-400">
        {props.date} {props.time} • {props.status}
      </div>
      <div className="flex justify-start items-center px-5 py-3 gap-10 w-full">
        <Avatar img={props.store_img} size="xl" bordered color="light" />
        <div className="flex flex-col gap-2">
          <div className="font-bold">{props.store_name}</div>
          <div className="text-gray-400 font-bold">{props.style}</div>
          <div className="text-gray-400 font-bold">{props.price}</div>
        </div>
      </div>
      <div className="w-full flex gap-3">
        <button className="w-1/2 text-MAIN_LIGHT_COLOR border-2 border-MAIN_LIGHT_COLOR h-10 rounded-lg">
          예약 취소
        </button>
        <button className="w-1/2 bg-MAIN_LIGHT_COLOR text-MAIN_IVORY h-10 rounded-lg">
          예약 상세
        </button>
      </div>
    </div>
  );
};

export default MyReservationCard;
