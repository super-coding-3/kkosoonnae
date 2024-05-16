import React from "react";

interface SubmitBtnProps {
  value: string;
}

const SubmitBtn: React.FC<SubmitBtnProps> = (props) => {
  return (
    <button className="w-full bg-MAIN_COLOR text-MAIN_IVORY h-16 rounded-lg text-lg mt-3">
      {props.value}
    </button>
  );
};

export default SubmitBtn;
