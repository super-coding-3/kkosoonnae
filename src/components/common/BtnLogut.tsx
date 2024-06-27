import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ToastMessage from "./ToastMessage";
import { ROUTER_PATH } from "../../constants/constants";

const BtnLogout: React.FC = () => {
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToastMessage("로그아웃 되셨습니다");
    setTimeout(() => {
      navigate(ROUTER_PATH.login);
    }, 1000);
  };

  return (
    <>
      {toastMessage && <ToastMessage message={toastMessage} />}
      <button
        onClick={handleLogout}
        className="p-1 border-2 border-solid border-MAIN_COLOR rounded text-MAIN_COLOR"
      >
        로그아웃
      </button>
    </>
  );
};

export default BtnLogout;
