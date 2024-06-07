import React, { useState } from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import HttpClient from "../../utils/api/customAxios";

interface SearchInputProps {
  className?: string;
  onSearchComplete: (data: SearchResultItem[]) => void;
}

interface SearchResultItem {
  storeNo: number;
  storeName: string;
  roadAddress: string;
  img: null;
  averageScope: null;
}

const SearchInput: React.FC<SearchInputProps> = ({
  className,
  onSearchComplete,
}) => {
  const [searchKeywordQuery, setSearchKeywordQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await HttpClient.get(
        `/api/search/stores/?nameAddressKeyword=${searchKeywordQuery}`
      );
      onSearchComplete(response.data);
    } catch (error) {
      console.error("검색 요청 실패:", error);
    }
  };

  const onChangeSearch = (e: any) => {
    setSearchKeywordQuery(e.target.value);
  };

  return (
    <SeacrhInputWrap className={className}>
      <input
        type="text"
        placeholder="동이름 또는 매장명을 입력해주세요"
        value={searchKeywordQuery}
        onChange={onChangeSearch}
      />
      <BtnSearch onClick={handleSearch}>
        <IoIosSearch size={28} />
      </BtnSearch>
    </SeacrhInputWrap>
  );
};

const SeacrhInputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &.mid-size {
    width: calc(100% - 55px);
  }
  &.full-size {
    width: 100%;
  }
  input {
    width: 100%;
    border-radius: 6px;
    background: #eff2f3;
    text-indent: 10px;
    border: none;
    height: 44px;
    padding-right: 50px;
  }
`;

const BtnSearch = styled.button`
  width: 44px;
  height: 44px;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  img {
    display: inline-block;
  }
`;

export default SearchInput;
