import React from "react";

interface EditProfileBtnProps {
  value: string;
}

const EditProfileBtn: React.FC<EditProfileBtnProps> = (props) => {
  return (
    <button className="w-32 bg-MAIN_COLOR text-MAIN_IVORY ml-1 h-10 rounded-lg text-xs">
      <div>{props.value}</div>
    </button>
  );
};

export default EditProfileBtn;
