import React from "react";
import { FaStar, FaTimes } from "react-icons/fa";
import { HiHeart } from "react-icons/hi2";
import { Avatar } from "flowbite-react";
import { Link } from "react-router-dom";

interface MyLikeStoreCardProps {
  // likeNo: number;
  storeNo: number;
  storeImg: string;
  storeName: string;
  scope: number;
  totalLikeCount: number;
  roadAddress: string;
  openTime: string;
  closeTime: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MyLikeStoreCard: React.FC<MyLikeStoreCardProps> = (props) => {
  return (
    <div className="flex flex-col justify-start items-center border-b-2 border-solid border-MAIN_LIGHT_COLOR w-full h-fit p-3 gap-3 mb-5">
      <div className="flex justify-between items-center px-5 py-3 w-full">
        <Link to={"/salon/" + props.storeNo}>
          <Avatar img={props.storeImg} size="xl" />
        </Link>
        <div className="flex flex-col gap-2 w-2/3">
          <div className="flex w-full justify-between h-8">
            <Link
              to={"/salon/" + props.storeNo}
              className="font-bold text-xl text-end"
            >
              {props.storeName}
            </Link>
            <button onClick={props.onClick} className="flex items-start">
              <FaTimes color="#816F6B" size="20px" />
            </button>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center gap-1">
              <FaStar color="#816F6B" size="20px" />
              <div className="pb-0.5">{props.scope}</div>
            </div>
            <div className="flex items-center">
              <HiHeart color="#867976" size="20px" />
              <div className="pb-0.5">{props.totalLikeCount}</div>
            </div>
          </div>
          <div className="text-gray-400 font-bold">{props.roadAddress}</div>
          <div className="text-gray-400 font-bold">
            영업시간 : {props.openTime.slice(0, 5)}~
            {props.closeTime.slice(0, 5)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLikeStoreCard;
