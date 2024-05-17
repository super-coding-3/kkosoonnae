import React from "react";

interface SubmitBtnProps {
  value: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SubmitBtn: React.FC<SubmitBtnProps> = (props) => {
  return (
    <button
      onClick={props.onclick}
      className="w-full bg-MAIN_COLOR text-MAIN_IVORY h-16 rounded-lg text-lg mt-3"
    >
      {props.value}
    </button>
  );
};

export default SubmitBtn;
