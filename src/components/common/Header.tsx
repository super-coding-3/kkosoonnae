import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SearchModal from "../search/SearchModal";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <HeaderWrap>
      <Link to="/">
        <img src="img/logo.svg" alt="꼬순내 로고" />
      </Link>
      <BtnHeaderSearch onClick={handleButtonClick}>
        <img src="img/nav/icon-search.svg" alt="통합검색 아이콘" />
      </BtnHeaderSearch>
      {isModalOpen && <SearchModal onClose={handleModalClose} />}
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
  z-index: 5;
`;

const BtnHeaderSearch = styled.button`
  width: 55px;
  height: 55px;
  position: absolute;
  top: 0;
  right: 0;
  img {
    display: inline-block;
  }
`;

export default Header;
