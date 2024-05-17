import { Avatar } from "flowbite-react";
import React from "react";
import { FaStar, FaTimes } from "react-icons/fa";
import { HiHeart } from "react-icons/hi2";

interface MyLikeStoreCardProps {
  store_img: string;
  store_name: string;
  store_scope: string;
  store_likeit: string;
  store_addr: string;
  stroe_order_dt: string;
}

const MyLikeStoreCard: React.FC<MyLikeStoreCardProps> = (props) => {
  return (
    <div className="flex flex-col justify-start items-center border-b-2 border-solid border-MAIN_LIGHT_COLOR w-full h-fit p-3 gap-3 mb-5">
      <div className="flex justify-between items-center px-5 py-3 w-full">
        <button>
          <Avatar img={props.store_img} size="xl" bordered color="light" />
        </button>
        <div className="flex flex-col gap-2 w-2/3">
          <div className="flex w-full justify-between h-8">
            <button className="font-bold text-xl text-end">
              {props.store_name}
            </button>
            <button className="flex items-start">
              <FaTimes color="#816F6B" size="20px" />
            </button>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center gap-1">
              <FaStar color="#816F6B" size="20px" />
              <div className="pb-0.5">{props.store_scope}</div>
            </div>
            <div className="flex items-center">
              <HiHeart color="#867976" size="20px" />
              <div className="pb-0.5">{props.store_likeit}</div>
            </div>
          </div>
          <div className="text-gray-400 font-bold">{props.store_addr}</div>
          <div className="text-gray-400 font-bold">{props.stroe_order_dt}</div>
        </div>
      </div>
    </div>
  );
};

export default MyLikeStoreCard;
