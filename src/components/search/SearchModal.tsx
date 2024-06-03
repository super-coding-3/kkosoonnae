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
    console.log(data);
  };

  return (
    <SearchModalWrap>
      <div className="relative flex justify-between items-center gap-2">
        <SeacrhInput
          className="mid-size"
          onSearchComplete={handleSearchComplete}
        />
        <button onClick={onClose}>
          <IoIosClose size={44} />
        </button>
      </div>
      <div className="mt-4">
        {resultKeywordData.map((item, index) => (
          <NavLink
            to={`/salon/${item.storeNo}`}
            key={index}
            className="block mb-3"
          >
            <div>
              <Card
                imgAlt="살롱이미지"
                imgSrc={`${item?.img?.[0]}`}
                className="result-card-img"
              >
                <div className="py-4 px-8">
                  <div className="flex items-center gap-2">
                    <strong>{item.storeName}</strong>
                    <div className="flex items-center gap-2">
                      <p className="flex text-xs items-center gap-1 text-MAIN_LIGHT_COLOR">
                        <FaStar /> {item.averageScope}
                      </p>
                      <p className="flex text-xs items-center gap-1  text-MAIN_LIGHT_COLOR">
                        <FaRegHeart /> 관심수 10
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500">{item.roadAddress}</p>
                </div>
              </Card>
            </div>
          </NavLink>
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

export default SearchModal;
