import React from "react";

interface PageNothingProps {
  message: string;
}

const PageNothing: React.FC<PageNothingProps> = (props) => {
  return (
    <div className="h-[80vh]">
      <div className="py-8 px-4 flex flex-col justify-center items-center h-full">
        <img
          src="/img/common/icon-dog_smile.svg"
          alt="꼬순내 로고"
          className=" size-40"
        />
        <p className="text-xl">{props.message}</p>
      </div>
    </div>
  );
};

export default PageNothing;
