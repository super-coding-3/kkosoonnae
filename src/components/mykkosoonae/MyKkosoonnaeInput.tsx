import React from "react";

interface MykkosoonaeInputProps {
  name?: string;
  type?: string;
  age?: string;
  gender?: string;
  weight?: string;
}

const MyKkosoonnaeInput: React.FC<MykkosoonaeInputProps> = (props) => {
  return (
    <div className="flex flex-col gap-3 mt-5">
      <input
        type="text"
        className="h-10 p-2.5 w-full border-2 border-gray-300 appearance-none focus:border-MAIN_COLOR focus:outline-none focus:ring-transparent rounded-lg"
        placeholder={props.name == null ? "내 꼬순내 이름" : props.name}
        required
      />
      <input
        type="text"
        className="h-10 p-2.5 w-full border-2 border-gray-300 appearance-none focus:border-MAIN_COLOR focus:outline-none focus:ring-transparent rounded-lg"
        placeholder={props.type == null ? "내 꼬순내 품종" : props.type}
        required
      />
      <input
        type="text"
        className="h-10 p-2.5 w-full border-2 border-gray-300 appearance-none focus:border-MAIN_COLOR focus:outline-none focus:ring-transparent rounded-lg"
        placeholder={props.age == null ? "내 꼬순내 생년월일" : props.age}
        required
      />
      {props.gender === "남아" ? (
        <div className="flex justify-between gap-2">
          <button className="w-1/2 bg-MAIN_COLOR text-MAIN_IVORY h-10 rounded-lg text-lg">
            남아
          </button>
          <button className="w-1/2 border-2 border-MAIN_COLOR  text-MAIN_COLOR h-10 rounded-lg text-lg">
            여아
          </button>
        </div>
      ) : (
        <div className="flex justify-between gap-2">
          <button className="w-1/2 border-2 border-MAIN_COLOR  text-MAIN_COLOR h-10 rounded-lg text-lg">
            남아
          </button>
          <button className="w-1/2 bg-MAIN_COLOR text-MAIN_IVORY h-10 rounded-lg text-lg">
            여아
          </button>
        </div>
      )}
      <div className="relative">
        <input
          type="text"
          className="h-10 p-2.5 w-full border-2 border-gray-300 appearance-none focus:border-MAIN_COLOR focus:outline-none focus:ring-transparent rounded-lg"
          placeholder={props.weight == null ? "내 꼬순내 몸무게" : props.weight}
          required
        />
        <div className="absolute bottom-2.5 right-2.5">Kg</div>
      </div>
    </div>
  );
};

export default MyKkosoonnaeInput;
