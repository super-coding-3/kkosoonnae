import React from "react";
import styled from "styled-components";

import { IoIosClose } from "react-icons/io";

const SearchRecent: React.FC = () => {
  return (
    <SearchRecentWrap>
      <h2>최근검색</h2>
      <SearchRecentList>
        <li className="flex items-center gap-2">
          <img src="/img/search/icon-search-keyword.svg" alt="" />
          <strong>역삼동</strong>
          <button className="ml-auto">
            <IoIosClose size={24} style={{ color: "#ddd" }} />
          </button>
        </li>
        <li className="flex items-center gap-2">
          <img src="/img/search/icon-search-keyword.svg" alt="" />
          <strong>청담동</strong>
          <button className="ml-auto">
            <IoIosClose size={24} style={{ color: "#ddd" }} />
          </button>
        </li>
      </SearchRecentList>
    </SearchRecentWrap>
  );
};

const SearchRecentWrap = styled.div`
  margin-top: 30px;
`;

const SearchRecentList = styled.ul`
  display: flex;
  flex-direction: column;
  li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #ddd;
  }
`;

export default SearchRecent;
