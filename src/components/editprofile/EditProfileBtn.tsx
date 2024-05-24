import React from "react";

interface EditProfileBtnProps {
  value: string | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const EditProfileBtn: React.FC<EditProfileBtnProps> = (props) => {
  return (
    <button
      type="button"
      className="w-32 bg-MAIN_COLOR text-MAIN_IVORY ml-1 h-10 rounded-lg text-xs"
      onClick={props.onClick}
    >
      <div>{props.value}</div>
    </button>
  );
};

export default EditProfileBtn;
