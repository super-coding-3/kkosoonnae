import React from "react";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

import SeacrhInput from "./SeacrhInput";
import SearchRecent from "./SearchRecent";

interface SearchModalProps {
  onClose: () => void;
}

function SearchModal({ onClose }: SearchModalProps) {
  return (
    <SearchModalWrap>
      <div className="relative flex justify-between items-center gap-2">
        <SeacrhInput className="mid-size" />
        <BtnClose onClick={onClose}>
          <IoIosClose size={44} />
        </BtnClose>
      </div>
      <SearchRecent />
    </SearchModalWrap>
  );
}

const SearchModalWrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  background: #fff;
  z-index: 10;
  padding: 0.8rem 1rem;
  width: 640px;
  margin: 0 auto;
  @media all and (max-width: 640px) {
    width: 100%;
  }
`;

const BtnClose = styled.button``;
export default SearchModal;
