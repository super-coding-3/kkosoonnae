import React from "react";
import { LuCalendarCheck2 } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";
import { HiOutlineHeart } from "react-icons/hi2";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

interface MyPageMainBtnProps {
  title: string;
  link: string;
}

const MyPageMainBtn: React.FC<MyPageMainBtnProps> = (props) => {
  return (
    <Link
      to={props.link}
      className="flex flex-col justify-center items-center border-2 border-solid border-MAIN_LIGHT_COLOR rounded-2xl w-1/2 h-40"
    >
      <div className="flex justify-center items-center rounded-full bg-MAIN_GRAY p-3 w-24">
        {props.title === "예약내역" && (
          <LuCalendarCheck2 color="#816F6B" size="72px" />
        )}
        {props.title === "내가 쓴 리뷰" && (
          <MdOutlineRateReview color="#816F6B" size="72px" />
        )}
        {props.title === "관심매장" && (
          <HiOutlineHeart color="#867976" size="72px" />
        )}
        {props.title === "문의하기" && (
          <RiCustomerService2Fill color="#816F6B" size="72px" />
        )}
      </div>
      <div className="mt-3 text-base">{props.title}</div>
    </Link>
  );
};

export default MyPageMainBtn;
