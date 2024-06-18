import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import HttpClient from "../../utils/api/customAxios";

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

  const handleSearch = async () => {
    try {
      const response = await HttpClient.get(
        `/api/user/search/stores/?nameAddressKeyword=${searchKeywordQuery}`
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
  );
};

export default SearchInput;
