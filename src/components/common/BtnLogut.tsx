import React from "react";
import { useNavigate } from "react-router-dom";


const BtnLogout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    alert("로그아웃 되었습니다");
  };

  return (
    <button
      onClick={handleLogout}
      className="p-1 border-2 border-solid border-MAIN_COLOR rounded text-MAIN_COLOR"
    >
      로그아웃
    </button>
  );
};

export default BtnLogout;
