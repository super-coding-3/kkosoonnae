import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../constants/constants";
import useToastMessage from "../../hooks/useToastMessage";

const BtnLogout: React.FC = () => {
  const navigate = useNavigate();
  const { showToast, Toast } = useToastMessage();

  const handleLogout = () => {
    localStorage.removeItem("token");
    showToast({ message: "로그아웃 되었습니다." });
    setTimeout(() => {
      navigate(ROUTER_PATH.login);
    }, 1000);
  };

  return (
    <>
      <Toast />
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
