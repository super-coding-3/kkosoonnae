import React from "react";
import { Toast } from "flowbite-react";
import { FaTelegramPlane } from "react-icons/fa";

interface ToastMessageProps {
  message: string;
}

const ToastMessage: React.FC<ToastMessageProps> = ({ message }) => {
  return (
    <Toast className="fixed top-[57px] left-1/2 transform -translate-x-1/2 z-50 border-2  flex items-center justify-center space-x-2 p-2">
      <FaTelegramPlane className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
      <div className="text-[15px] font-bold">{message}</div>
    </Toast>
  );
};

export default ToastMessage;
