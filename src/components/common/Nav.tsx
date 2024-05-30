import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import { FiHome, FiMapPin, FiInfo, FiUser, FiLock } from "react-icons/fi";

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
    <NavWrap>
      {renderNavLink(
        "/",
        <FiHome className="block" size={24} color={onActive("/")} />,
        "홈"
      )}
      {renderNavLink(
        "/my_location_store",
        <FiMapPin
          className="block"
          size={24}
          color={onActive("/my_location_store")}
        />,
        "내주변"
      )}
      {renderNavLink(
        "/notice",
        <FiInfo className="block" size={24} color={onActive("/notice")} />,
        "공지사항"
      )}
      {token
        ? renderNavLink(
            "/mypage",
            <FiUser className="block" size={24} color={onActive("/mypage")} />,
            "마이"
          )
        : renderNavLink(
            "/login",
            <FiLock className="block" size={24} color={onActive("/login")} />,
            "로그인"
          )}
    </NavWrap>
  );
};

const NavWrap = styled.nav`
  max-width: 640px;
  min-width: 375px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 0.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  border-top: 1px solid #ddd;
  background: #fff;
  a {
    span {
      color: #888;
    }
  }
`;
export default Nav;
