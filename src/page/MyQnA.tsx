import React from "react";
import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Nav from "../components/common/Nav";
import MyQnACard from "../components/myqna/MyQnACard";

const MyQnA: React.FC = () => {
  return (
    <OuterLayout>
      <PageTitle title="내 문의내역" leftBtn={true} />
      <div className="mt-5 pb-24 mx-5">
        <div className="flex justify-between items-center pb-3 border-b-2 border-COMMONN_BORDER_GRAY">
          <div className="font-bold text-xl">내 문의내역 총 3개</div>
        </div>
        <MyQnACard
          status="답변 대기중"
          title="나문희가 문의드립니다"
          content="문의 내용 문희 내용 문의 내용 문희 내용 문의 내용 문희 내용 문의 내용 문희 내용 문의 내용 문희 내용 문의 내용 문희 내용"
        />
        <MyQnACard
          status="답변 대기중"
          title="나문희가 문의드립니다"
          content="문의 내용 문희 내용 문의 내용 문희 내용 문의 내용 문희 내용 문의 내용 문희 내용 문의 내용 문희 내용 문의 내용 문희 내용"
        />
        <MyQnACard
          status="답변 완료"
          title="나문희가 문의드립니다"
          content="문의 내용 문희 내용 문의 내용 문희 내용 문의 내용 문희 내용 문의 내용 문희 내용 문의 내용 문희 내용 문의 내용 문희 내용"
        />
      </div>
      <Nav />
    </OuterLayout>
  );
};

export default MyQnA;
