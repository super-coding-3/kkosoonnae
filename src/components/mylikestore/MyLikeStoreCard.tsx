import React from "react";
import { FaStar, FaTimes } from "react-icons/fa";
import { HiHeart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "../../constants/constants";

interface MyLikeStoreCardProps {
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
    <div className="flex justify-between items-center border-b-2 border-MAIN_LIGHT_COLOR w-full h-48 px-5 py-3 gap-3 mb-5 likestore-fragment-height">
      <div className="flex items-center gap-3 w-11/12 likestore-info-size-change">
        <Link
          to={`${ROUTER_PATH.salon}${props.storeNo}`}
          className="size-40 likestore-img-size-change"
        >
          <img
            src={props.storeImg}
            className="border-2 border-MAIN_LIGHT_COLOR size-full"
          />
        </Link>
        <div className="flex flex-col gap-2 w-2/3">
          <div className="flex w-full justify-between h-8">
            <Link
              to={`${ROUTER_PATH.salon}${props.storeNo}`}
              className="font-bold text-xl text-end"
            >
              {props.storeName}
            </Link>
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
          <div className="text-gray-400 font-bold w-10/12 truncate likestore-info-hidden">
            주소: {props.roadAddress}
          </div>
          <div className="text-gray-400 font-bold likestore-info-hidden">
            영업시간 : {props.openTime.slice(0, 5)}~
            {props.closeTime.slice(0, 5)}
          </div>
        </div>
      </div>
      <div className="flex items-start h-full">
        <button onClick={props.onClick}>
          <FaTimes color="#816F6B" size="20px" />
        </button>
      </div>
    </div>
  );
};

export default MyLikeStoreCard;
