import React from "react";
import { ErrorMessage, Field } from "formik";

interface InputMyPetProps {
  name?: string;
  placeholder?: string;
  label: string;
}

const InputMyPet: React.FC<InputMyPetProps> = (props) => {
  return (
    <div className="flex flex-col mt-3 gap-2">
      <label className="font-bold pl-1">{props.label}</label>
      {props.name === "weight" ? (
        <div className="relative">
          <Field
            type="text"
            name={props.name}
            className="h-10 p-2.5 w-full border-2 border-COMMONN_BORDER_GRAY appearance-none focus:border-MAIN_COLOR focus:outline-none focus:ring-transparent rounded-lg"
            placeholder={props.placeholder}
          />
          <div className="absolute bottom-2.5 right-2.5">Kg</div>
        </div>
      ) : (
        <Field
          type="text"
          name={props.name}
          className="h-10 p-2.5 w-full border-2 border-COMMONN_BORDER_GRAY appearance-none focus:border-MAIN_COLOR focus:outline-none focus:ring-transparent rounded-lg"
          placeholder={props.placeholder}
        />
      )}
      {typeof props.name === "string" && (
        <ErrorMessage
          name={props.name}
          component="div"
          className="text-xs text-red-600"
        />
      )}
    </div>
  );
};

export default InputMyPet;
