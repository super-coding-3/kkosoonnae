import React from "react";

interface SubmitBtnProps {
  type?: "submit" | "reset" | "button" | undefined;
  value: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SubmitBtn: React.FC<SubmitBtnProps> = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onclick}
      className="w-full bg-MAIN_COLOR text-MAIN_IVORY h-16 rounded-lg text-lg mt-3"
    >
      {props.value}
    </button>
  );
};

export default SubmitBtn;
