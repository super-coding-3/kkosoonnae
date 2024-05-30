import React from "react";

interface BtnSubmitProps {
  type?: "submit" | "reset" | "button" | undefined;
  value: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const BtnSubmit: React.FC<BtnSubmitProps> = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="w-full bg-MAIN_COLOR text-MAIN_IVORY h-14 rounded-lg text-lg mt-3"
    >
      {props.value}
    </button>
  );
};

export default BtnSubmit;
