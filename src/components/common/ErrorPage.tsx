import React from "react";
import { BiMessageAltError } from "react-icons/bi";

interface ErrorPageProps {
  errorMessage: string;
}

const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <BiMessageAltError size={80} color="#C2574F" />
      <p className="font-bold text-ERROR mt-3">{props.errorMessage}</p>
    </div>
  );
};

export default ErrorPage;
