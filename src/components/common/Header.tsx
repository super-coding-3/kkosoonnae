import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <HeaderWrap>
      <Link to="/">
        <img src="img/logo.svg" alt="꼬순내 로고" />
      </Link>
      <button>
        <img src="img/nav/icon-search.svg" alt="통합검색 아이콘" />
      </button>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  max-width: 640px;
  min-width: 375px;
  height: 55px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  button {
    width: 55px;
    height: 55px;
    position: absolute;
    top: 0;
    right: 0;
    img {
      display: inline-block;
    }
  }
`;

export default Header;
