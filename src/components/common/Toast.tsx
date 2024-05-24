import React from "react";
import { Toast } from "flowbite-react";
import { FaTelegramPlane } from "react-icons/fa";
interface ToastMessageProps {
  message: string;
 
}

const ToastMessage: React.FC<ToastMessageProps> = ({ message  }) => {


  return (
    
    <Toast className="fixed top-[60px] left-1/2 transform -translate-x-1/2 z-50 border-2 boder-black">
      <FaTelegramPlane className="h-5 w-5 ml-8 text-cyan-600 dark:text-cyan-500 border-solid" />
      <div className="pl-2 text-[15px] font-bold flex-1 text-center ">{message}</div>
    </Toast>
 
  );
};

export default ToastMessage;
