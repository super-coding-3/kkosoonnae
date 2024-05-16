import React from "react";

interface EditProfileLabelProps {
  label: string;
}

const EditProfileLabel: React.FC<EditProfileLabelProps> = (props) => {
  return (
    <label className="min-w-20 inline-block text-base text-gray-400 text-left">
      {props.label}
    </label>
  );
};

export default EditProfileLabel;
