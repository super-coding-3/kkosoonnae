import React from "react";
import { ErrorMessage } from "formik";

interface EditProfileErrorMsgProps {
  name: string;
}

const EditProfileErrorMsg: React.FC<EditProfileErrorMsgProps> = (props) => {
  return (
    <ErrorMessage
      name={props.name}
      component="div"
      className={`text-xs text-red-600 ml-${
        props.name.includes("address") ? 0 : 20
      }`}
    />
  );
};

export default EditProfileErrorMsg;
