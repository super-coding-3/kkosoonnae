import React from "react";

interface MyQnACardProps {
  status: string;
  title: string;
  content: string;
  ask?: string;
}

const MyQnACard: React.FC<MyQnACardProps> = (props) => {
  return (
    <div className="my-5">
      <div className="flex justify-between px-1 mb-3">
        <div className="font-bold text-2xl text-gray-400">{props.status}</div>
        <button className="bg-MAIN_LIGHT_COLOR text-MAIN_IVORY rounded-lg h-fit w-fit py-1 px-2">
          {props.status === "답변 대기중" ? "문의 취소" : "문의 삭제"}
        </button>
      </div>
      <div className="flex flex-col justify-center items-center bg-MAIN_GRAY rounded-2xl w-full h-fit px-5 pt-3 pb-5 gap-3 shadow-md">
        <div className="w-full flex justify-between items-center">
          <div className="inline-block align-text-bottom">
            <span className="font-bold text-3xl">Q</span>
            <span className="font-bold text-xl ml-2">{props.title}</span>
          </div>
        </div>
        <div className="w-full whitespace-pre-line">{props.content}</div>
      </div>
    </div>
  );
};

export default MyQnACard;
