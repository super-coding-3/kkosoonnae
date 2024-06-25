import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import useAxios from "../../hooks/useAxios";

interface SearchInputProps {
  onSearchComplete: (data: SearchResultItem[]) => void;
}

interface SearchResultItem {
  storeNo: number;
  storeName: string;
  roadAddress: string;
  img: null;
  averageScope: null;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearchComplete }) => {
  const [searchKeywordQuery, setSearchKeywordQuery] = useState("");

  // TODO: ERROR 시 뜨는 컴포넌트 구현, 로딩 화면 구현
  const { isLoading, error, handleRequest, Loading } = useAxios();

  const handleSearch = () => {
    handleRequest({
      url: `/api/user/search/stores/${searchKeywordQuery}`,
      method: "GET",
      setData: onSearchComplete,
    });
  };

  if (error) {
    return (
      <div className="my-8 px-4">
        <p>데이터를 가져오는 데 실패했습니다. 잠시 후 다시 시도해 주세요.</p>
      </div>
    );
  }

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeywordQuery(e.target.value);
  };

  return (
    <>
      {isLoading && Loading}
      <div
        className="relative flex items-center"
        style={{ width: "calc(100% - 55px)" }}
      >
        <input
          type="text"
          placeholder="동이름 또는 매장명을 입력해주세요"
          value={searchKeywordQuery}
          onChange={onChangeSearch}
          className="w-full rounded border-[1px] border-gray-300  indent-4 pr-[50px]"
        />
        <button
          onClick={handleSearch}
          className="w-11 h-11 absolute top-0 right-0 text-center"
        >
          <IoIosSearch size={28} className="inline-block" />
        </button>
      </div>
    </>
  );
};

export default SearchInput;
