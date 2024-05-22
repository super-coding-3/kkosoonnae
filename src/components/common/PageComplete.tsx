import React from "react";
import BtnSubmit from "./BtnSubmit";
import { useNavigate } from "react-router-dom";

interface PageCompleteProps {
  h2Value: string;
  pValue: string;
  btnValue: string;
  link: string;
}

const PageComplete: React.FC<PageCompleteProps> = (props) => {
  const navigate = useNavigate();

  const navigateToLink = () => {
    navigate(props.link);
  };

  return (
    <div className="h-[80vh]">
      <div className="py-8 px-4 flex flex-col justify-center items-center h-full">
        <img
          src="/img/common/icon-dog_star.svg"
          alt="꼬순내 로고 별"
          className="size-28"
        />
        <h2 className="text-xl mt-4 font-bold">{props.h2Value}</h2>
        <p className=" text-black text-sm  mt-4 mb-8">{props.pValue}</p>
        <BtnSubmit value={props.btnValue} onclick={navigateToLink} />
      </div>
    </div>
  );
};

export default PageComplete;
