import React from "react";
import { Toast } from "flowbite-react";

interface ToastMessageProps {
  message: string;
}

const ToastMessage: React.FC<ToastMessageProps> = ({ message }) => {
  return (
    <Toast className="w-fit min-w-fit fixed top-16 left-1/2 transform -translate-x-1/2 z-50 border-2 flex items-center justify-center gap-2 p-3">
      <img className="size-7" src="/img/common/icon-dog_normal.svg" />
      <div className="text-sm font-bold">{message}</div>
    </Toast>
  );
};

export default ToastMessage;
