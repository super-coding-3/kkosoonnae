import { FormikProps } from "formik";
import React from "react";

interface BtnMyPetGenderType {
  gender: string;
  btnValue: string;
  setFieldValue: FormikProps<any>["setFieldValue"];
}

const BtnMyPetGender: React.FC<BtnMyPetGenderType> = (props) => {
  return (
    <button
      type="button"
      className={`w-1/2 bg-${
        props.gender === props.btnValue ? "MAIN_COLOR" : undefined
      } text-${props.gender === props.btnValue ? "MAIN_IVORY" : "MAIN_COLOR"} 
        border-${props.gender === props.btnValue ? 0 : 2}
        border-${props.gender === props.btnValue ? undefined : "MAIN_COLOR"}
        h-10 rounded-lg text-lg`}
      onClick={() => {
        props.setFieldValue("gender", props.btnValue);
      }}
    >
      {props.btnValue}
    </button>
  );
};

export default BtnMyPetGender;
