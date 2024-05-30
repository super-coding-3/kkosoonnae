import React from "react";
import BtnSubmit from "./BtnSubmit";
import { useNavigate } from "react-router-dom";

interface PageCompleteProps {
  title: string;
  description: string;
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
        <h2 className="text-xl mt-4 font-bold">{props.title}</h2>
        <p className=" text-black text-sm  mt-4 mb-8">{props.description}</p>
        <BtnSubmit value={props.btnValue} onClick={navigateToLink} />
      </div>
    </div>
  );
};

export default PageComplete;
