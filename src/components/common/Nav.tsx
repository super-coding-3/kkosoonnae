import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
  }, []);
  return (
    <NavWrap>
      <Link to="/" className="flex flex-col items-center">
        <img src="/img/nav/icon-home.svg" alt="홈 아이콘" className="block" />
        <span className="text-xs mt-1 ">홈</span>
      </Link>
      <Link to="/about" className="flex flex-col items-center">
        <img src="/img/nav/icon-map.svg" alt="홈 아이콘" className="block" />
        <span className="text-xs mt-1">내주변</span>
      </Link>
      <Link to="/" className="flex flex-col items-center">
        <img src="/img/nav/icon-notice.svg" alt="홈 아이콘" className="block" />
        <span className="text-xs mt-1">공지사항</span>
      </Link>
      <Link to="/reservation" className="flex flex-col items-center">
        <img src="/img/nav/icon-book.svg" alt="홈 아이콘" className="block" />
        <span className="text-xs mt-1">예약</span>
      </Link>
      {token ? (
        <Link to="/mypage" className="flex flex-col items-center">
          <img src="/img/nav/icon-my.svg" alt="마이 아이콘" className="block" />
          <span className="text-xs mt-1">마이</span>
        </Link>
      ) : (
        <Link to="/login" className="flex flex-col items-center">
          <img
            src="/img/nav/icon-login.svg"
            alt="로그인 아이콘"
            className="block"
          />
          <span className="text-xs mt-1">로그인</span>
        </Link>
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
