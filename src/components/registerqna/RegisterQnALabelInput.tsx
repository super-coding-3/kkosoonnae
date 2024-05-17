import React from "react";

interface RegisterQnALabelInputProps {
  title: string;
  placeholder: string;
  height: number;
}

const RegisterQnALabelInput: React.FC<RegisterQnALabelInputProps> = (props) => {
  return (
    <div className="flex flex-col gap-2 mt-5">
      <label className="font-bold">{props.title}</label>
      {props.title === "문의 제목" ? (
        <input
          type="text"
          className={`h-${props.height} p-2.5 w-full border-2 border-gray-300 appearance-none focus:border-MAIN_COLOR focus:outline-none focus:ring-transparent rounded-lg align-text-top`}
          placeholder={props.placeholder}
          required
        />
      ) : (
        <textarea
          className={`h-${props.height} p-2.5 w-full border-2 border-gray-300 appearance-none focus:border-MAIN_COLOR focus:outline-none focus:ring-transparent rounded-lg align-text-top`}
          placeholder={props.placeholder}
          required
        />
      )}
    </div>
  );
};

export default RegisterQnALabelInput;
