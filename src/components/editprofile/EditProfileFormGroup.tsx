import React from "react";
import EditProfileLabel from "./EditProfileLabel";
import EditProfileInput from "./EditProfileInput";
import EditProfileErrorMsg from "./EditProfileErrorMsg";
import EditProfileBtn from "./EditProfileBtn";

interface EditProfileFormGroupProps {
  label: string;
  inputType: string;
  name: string;
  inputDisabled: boolean;
  btnActive: boolean;
  btnValue?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const EditProfileFormGroup: React.FC<EditProfileFormGroupProps> = (props) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <EditProfileLabel label={props.label} />
        <EditProfileInput
          type={props.inputType}
          name={props.name}
          disabled={props.inputDisabled}
        />
        {props.btnActive && (
          <EditProfileBtn value={props.btnValue} onClick={props.onClick} />
        )}
      </div>
      <EditProfileErrorMsg name={props.name} />
    </>
  );
};

export default EditProfileFormGroup;
