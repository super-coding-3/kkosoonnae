import React from "react";
import { Field } from "formik";

interface EditProfileInputProps {
  type: string;
  name: string;
  disabled: boolean;
}

const EditProfileInput: React.FC<EditProfileInputProps> = (props) => {
  return (
    <Field
      type={props.type}
      className={`p-2.5 border-2 h-10 w-full border-COMMONN_BORDER_GRAY appearance-none focus:border-MAIN_COLOR focus:outline-none focus:ring-transparent rounded-lg bg-${
        props.disabled ? "MAIN_GRAY" : undefined
      }`}
      name={props.name}
      disabled={props.disabled}
    />
  );
};

export default EditProfileInput;
