import { FormikProps } from "formik";
import React from "react";
import BtnMyPetGender from "./BtnMyPetGender";
import { MYPET_FORM_LABEL } from "../../constants/constants";

interface SelectMyPetGenderType {
  gender: string;
  btnValue: string;
  setFieldValue: FormikProps<any>["setFieldValue"];
}

const SelectMyPetGender: React.FC<SelectMyPetGenderType> = (props) => {
  return (
    <div className="flex flex-col mt-3 gap-2">
      <label className="font-bold pl-1">{MYPET_FORM_LABEL.gender}</label>
      <div className="flex justify-between gap-2">
        <BtnMyPetGender
          gender={props.gender}
          btnValue="남아"
          setFieldValue={props.setFieldValue}
        />
        <BtnMyPetGender
          gender={props.gender}
          btnValue="여아"
          setFieldValue={props.setFieldValue}
        />
      </div>
    </div>
  );
};

export default SelectMyPetGender;
