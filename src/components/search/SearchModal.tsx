import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Card } from "flowbite-react";
import { IoIosClose } from "react-icons/io";
import { FaStar, FaRegHeart } from "react-icons/fa";

import SeacrhInput from "./SeacrhInput";

interface SearchModalProps {
  onClose: () => void;
}

interface SearchResultItem {
  storeNo: number;
  storeName: string;
  roadAddress: string;
  img: null;
  averageScope: null;
}

function SearchModal({ onClose }: SearchModalProps) {
  const [resultKeywordData, setResultKeywordData] = useState<
    SearchResultItem[]
  >([]);

  const handleSearchComplete = (data: SearchResultItem[]) => {
    setResultKeywordData(data);
  };

  return (
    <SearchModalWrap>
      <div className="relative flex justify-between items-center gap-2">
        <SeacrhInput
          className="mid-size"
          onSearchComplete={handleSearchComplete}
        />
        <BtnClose onClick={onClose}>
          <IoIosClose size={44} />
        </BtnClose>
      </div>
      <div className="mt-4">
        {resultKeywordData.map((item, index) => (
          <>
            <NavLink
              to={`/salon/${item.storeNo}`}
              key={index}
              className="block mb-3"
            >
              <ResultStore>
                <Card imgAlt="살롱이미지" imgSrc="/img/search/store-sample.png">
                  <ResultStoreInfo>
                    <div className="flex items-center gap-2">
                      <strong>{item.storeName}</strong>
                      <Score>
                        <p className="flex text-xs items-center gap-1">
                          <FaStar /> {item.averageScope} null
                        </p>
                        <p className="flex text-xs items-center gap-1">
                          <FaRegHeart /> 관심수 10
                        </p>
                      </Score>
                    </div>
                    <p className="text-xs text-zinc-500">{item.roadAddress}</p>
                  </ResultStoreInfo>
                </Card>
              </ResultStore>
            </NavLink>
          </>
        ))}
      </div>
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
  margin: 0 auto 80px;
  overflow-y: auto;
  @media all and (max-width: 640px) {
    width: 100%;
  }
`;

const BtnClose = styled.button``;

const ResultStore = styled.div`
  > div {
    > div {
      padding: 0.5rem 1rem;
    }
  }
`;

const ResultStoreInfo = styled.div``;

const Score = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    svg {
      color: #888;
    }
    color: #888;
  }
`;
export default SearchModal;
