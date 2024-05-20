import React from "react";
import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import SeacrhInput from "../components/search/SeacrhInput";
import ResultCard from "../components/serachresult/ResultCard";

const SearchResult: React.FC = () => {
  return (
    <OuterLayout>
      <PageTitle title={"전체검색결과"} />
      <div className="py-4 text-center">
        <p className="text-lg">"역삼동"</p>
      </div>
      <div className="px-4">
        <SeacrhInput className="full-size" />
        <div className="pt-4 flex flex-col gap-3">
          <ResultCard />
          <ResultCard />
        </div>
      </div>
    </OuterLayout>
  );
};

export default SearchResult;
