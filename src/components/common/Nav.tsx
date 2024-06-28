import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { FiHome, FiMapPin, FiInfo, FiUser, FiLock } from "react-icons/fi";
import { ROUTER_PATH } from "../../constants/constants";

const Nav: React.FC = () => {
  const { pathname } = useLocation();
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
  }, []);

  const onActive = (path: string) => {
    return pathname === path ? "#492D28" : "#888";
  };

  const renderNavLink = (to: string, icon: React.ReactNode, text: string) => {
    return (
      <Link to={to} className="flex flex-col items-center">
        {icon}
        <span className="text-xs mt-1" style={{ color: onActive(to) }}>
          {text}
        </span>
      </Link>
    );
  };

  return (
    <nav className="max-w-[640px] h-[70px] mx-auto flex justify-around items-center px-4 fixed bottom-0 left-0 right-0 z-10 border-t-2 border-gray-100 bg-white">
      {renderNavLink(
        ROUTER_PATH.main,
        <FiHome
          className="block"
          size={24}
          color={onActive(ROUTER_PATH.main)}
        />,
        "홈"
      )}
      {renderNavLink(
        ROUTER_PATH.myLocationStore,
        <FiMapPin
          className="block"
          size={24}
          color={onActive(ROUTER_PATH.myLocationStore)}
        />,
        "내주변"
      )}
      {renderNavLink(
        ROUTER_PATH.notice,
        <FiInfo
          className="block"
          size={24}
          color={onActive(ROUTER_PATH.notice)}
        />,
        "공지사항"
      )}
      {token
        ? renderNavLink(
            ROUTER_PATH.mypage,
            <FiUser
              className="block"
              size={24}
              color={onActive(ROUTER_PATH.mypage)}
            />,
            "마이"
          )
        : renderNavLink(
            ROUTER_PATH.login,
            <FiLock
              className="block"
              size={24}
              color={onActive(ROUTER_PATH.login)}
            />,
            "로그인"
          )}
    </nav>
  );
};

export default Nav;
