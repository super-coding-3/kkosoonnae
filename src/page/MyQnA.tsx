import React, { useEffect, useState } from "react";
import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Nav from "../components/common/Nav";
import MyQnACard from "../components/myqna/MyQnACard";
import HttpClient from "../utils/api/customAxios";

interface MyQnADatasType {
  status?: string;
  qnaNo: number;
  title: string;
  content: string;
  ask?: string;
}

const MyQnA: React.FC = () => {
  const [myQnADatas, setMyQnADatas] = useState<MyQnADatasType[]>([]);

  const getMyQnADatas = async (): Promise<MyQnADatasType[]> => {
    const res = await HttpClient.get("/KkoSoonNae/qna/all-list");
    return res.data;
  };

  const deleteMyQnADatas = async (qnaNo: number) => {
    const res = await HttpClient.delete(`/KkoSoonNae/qna/deleteQna/${qnaNo}`);
    alert("문의 취소되었습니다");
    window.location.reload();
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const qnaDatas = await getMyQnADatas();
      setMyQnADatas(qnaDatas);
    };
    fetchProfile();
  }, []);

  return (
    <OuterLayout>
      <PageTitle title="내 문의내역" leftBtn={true} />
      <div className="mt-5 pb-24 mx-5">
        <div className="flex justify-between items-center pb-3 border-b-2 border-COMMONN_BORDER_GRAY">
          <div className="font-bold text-xl">
            내 문의내역 총 {myQnADatas.length}개
          </div>
        </div>
        {myQnADatas.map((item: MyQnADatasType, index: number) => (
          <MyQnACard
            status="답변 대기중"
            title={item.title}
            content={item.content}
            onClick={() => {
              deleteMyQnADatas(item.qnaNo);
            }}
          />
        ))}
      </div>
      <Nav />
    </OuterLayout>
  );
};

export default MyQnA;
