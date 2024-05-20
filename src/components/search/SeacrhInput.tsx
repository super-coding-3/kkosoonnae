import React from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

interface SearchInputProps {
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ className }) => {
  return (
    <SeacrhInputWrap className={className}>
      <input type="text" placeholder="동이름 또는 매장명을 입력해주세요" />
      <BtnSearch>
        <IoIosSearch size={28} />
      </BtnSearch>
    </SeacrhInputWrap>
  );
};

const SeacrhInputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &.min-size {
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
