import React from "react";
import { FaStar, FaTimes } from "react-icons/fa";

interface MyReviewCardProps {
  storeName: string;
  scope: number;
  content: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MyReviewCard: React.FC<MyReviewCardProps> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center bg-MAIN_GRAY rounded-2xl w-full h-fit p-5 gap-3 mb-5 shadow-md">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2">
          <div className="font-bold">{props.storeName}</div>
          <div className="flex items-center gap-1">
            <FaStar color="#816F6B" size="20px" />
            <div className="pb-0.5">{props.scope}</div>
          </div>
        </div>
        <button onClick={props.onClick}>
          <FaTimes color="#816F6B" size="20px" />
        </button>
      </div>
      <div className="w-full break-words">{props.content}</div>
    </div>
  );
};

export default MyReviewCard;
