import React from "react";

interface ToastMessageProps {
  message: string;
  type: "success" | "error";
 
}

const ToastMessage: React.FC<ToastMessageProps> = ({ message, type,  }) => {


  return (
    <div className="fixed top-60 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className={`flex items-center p-4 w-full max-w-xs text-white rounded-lg shadow-lg ${type === "success" ? "bg-green-500" : "bg-red-500"}`}>
        <span className="flex-1">{message}</span>
      </div>
    </div>
  );
};

export default ToastMessage;
