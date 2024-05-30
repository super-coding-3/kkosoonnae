import React from "react";
import { ErrorMessage, Field } from "formik";

interface RegisterQnAFormGroupProps {
  label: string;
  component: string;
  name: string;
  placeholder: string;
  height: number;
}

const RegisterQnAFormGroup: React.FC<RegisterQnAFormGroupProps> = (props) => {
  return (
    <div className="flex flex-col gap-2 mt-5">
      <label className="font-bold">{props.label}</label>
      <Field
        type="text"
        component={props.component}
        className={`h-${props.height} p-2.5 w-full border-2 border-COMMONN_BORDER_GRAY appearance-none focus:border-MAIN_COLOR focus:outline-none focus:ring-transparent rounded-lg align-text-top`}
        name={props.name}
        placeholder={props.placeholder}
        required
      />
      <ErrorMessage
        name={props.name}
        component="div"
        className="text-xs text-red-600"
      />
    </div>
  );
};

export default RegisterQnAFormGroup;
