import React from "react";

import { IoIosClose } from "react-icons/io";

const SearchRecent: React.FC = () => {
  return (
    <div className="mt-8">
      <h2>최근검색</h2>
      <div className="flex flex-row">
        <li className="flex items-center gap-2 py-4 border-b-[1px] border-gray-200">
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
      </div>
    </div>
  );
};

export default SearchRecent;
