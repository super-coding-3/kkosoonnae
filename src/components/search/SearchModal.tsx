import { useState } from "react";
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
    <div className="search-modal fixed top-0 bottom-0 bg-white z-30 mx-auto mt-0 px-2 pt-4 pb-20 overflow-y-auto ">
      <div className="relative flex justify-between items-center gap-2">
        <SeacrhInput onSearchComplete={handleSearchComplete} />
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
            <Card
              imgAlt="살롱이미지"
              imgSrc={`${item?.img?.[0]}`}
              className="result-card-img"
            >
              <div className="flex items-center gap-2">
                <strong>{item.storeName}</strong>
                <div className="flex items-center gap-2">
                  <p className="flex text-xs items-center gap-1 text-MAIN_LIGHT_COLOR">
                    <FaStar /> {item.averageScope}
                  </p>
                  <p className="flex text-xs items-center gap-1  text-MAIN_LIGHT_COLOR">
                    <FaRegHeart /> 관심수 10
                    {/* TODO 관심수 api 연결 : 재익님 요청했음 */}
                  </p>
                </div>
              </div>
              <p className="text-xs text-zinc-500">{item.roadAddress}</p>
            </Card>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default SearchModal;
