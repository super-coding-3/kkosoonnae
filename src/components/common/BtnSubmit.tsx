import React from "react";

interface BtnSubmitProps {
  type?: "submit" | "reset" | "button" | undefined;
  value: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
}

const BtnSubmit: React.FC<BtnSubmitProps> = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`w-full bg-${
        props.active === false ? "MAIN_GRAY" : "MAIN_COLOR"
      } text-white h-14 rounded-lg text-lg mt-3`}
    >
      {props.value}
    </button>
  );
};

export default BtnSubmit;
