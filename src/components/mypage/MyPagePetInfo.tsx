import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "flowbite-react";

interface MyPagePetInfoProps {
  img: string;
  name: string;
  type: string;
  age: string;
}

const MyPagePetInfo: React.FC<MyPagePetInfoProps> = (props) => {
  return (
    <div className="border-2 border-solid border-MAIN_LIGHT_COLOR rounded-2xl w-full h-full">
      <div className="flex justify-start items-center px-5 py-3 gap-5 w-full">
        <Avatar img={props.img} size="lg" rounded />
        <div>
          <div className="font-bold">{props.name}</div>
          <div className="text-gray-400 font-bold">{props.type}</div>
          <div className="text-gray-400 font-bold">{props.age}</div>
        </div>
      </div>
      <div className="w-full text-center border-t-2 border-solid border-MAIN_LIGHT_COLOR pt-1">
        <Link to="/">수정하기</Link>
      </div>
    </div>
  );
};

export default MyPagePetInfo;
