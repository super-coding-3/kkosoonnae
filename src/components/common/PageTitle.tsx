import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../constants/constants";

interface pageTitleProps {
  title: React.ReactNode;
  leftBtn?: boolean;
}

const PageTitle: React.FC<pageTitleProps> = (props) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-row	justify-between sticky top-0 items-center py-4 px-2 h-[55px] text-xl font-bold shadow bg-white z-10">
      {props.leftBtn ? (
        <button onClick={handleBack}>
          <img src="/img/title/left.svg" alt="back" width={"25px"} />
        </button>
      ) : (
        <p className=" w-6"></p>
      )}
      <p>{props.title}</p>
      <Link to={ROUTER_PATH.main}>
        <div>
          <img src="/img/logo.svg" alt="logo" width={"40px"} />
        </div>
      </Link>
    </div>
  );
};

export default PageTitle;
