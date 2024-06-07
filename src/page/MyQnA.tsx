import HttpClient from "../utils/api/customAxios";

import React, { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { ko } from "date-fns/locale";

import PageNothing from "../components/common/PageNothing";
import ModalDelete from "../components/common/ModalDelete";
import ToastMessage from "../components/common/ToastMessage";
import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Nav from "../components/common/Nav";
import MyQnACard from "../components/myqna/MyQnACard";

interface MyQnADatasType {
  status?: string;
  qnaNo: number;
  title: string;
  content: string;
  createDt: string;
  ask?: string;
}

const MyQnA: React.FC = () => {
  const [myQnADatas, setMyQnADatas] = useState<MyQnADatasType[]>([]);
  const [showToastMessage, setShowToastMessage] = useState<boolean>(false);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [qnaNo, setQnANo] = useState<number>(0);

  const getMyQnADatas = async (): Promise<MyQnADatasType[]> => {
    const res = await HttpClient.get("/api/qna/all-list");
    return res.data;
  };

  const deleteMyQnADatas = async (qnaNo: number) => {
    await HttpClient.delete(`/api/qna/deleteQna/${qnaNo}`);
    setShowModalDelete(false);
    setShowToastMessage(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handlerQnACancel = (qnaNo: number) => {
    setQnANo(qnaNo);
    setShowModalDelete(true);
  };

  const formatDate = (dateString: string): string => {
    const date = parseISO(dateString);
    return format(date, "yyyy년 M월 d일 a h시 mm분", { locale: ko });
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const resQnADatas: MyQnADatasType[] = await getMyQnADatas();
      const qnaDatas: MyQnADatasType[] = resQnADatas.map((item) => ({
        ...item,
        createDt: formatDate(item.createDt),
      }));
      setMyQnADatas(qnaDatas);
    };
    fetchProfile();
  }, []);

  return (
    <OuterLayout>
      <PageTitle title="내 문의내역" leftBtn={true} />
      {myQnADatas.length === 0 ? (
        <PageNothing message="문의내역이 없습니다" />
      ) : (
        <div className="pt-4 pb-24 px-4">
          <div className="flex justify-between items-center pb-3 border-b-2 border-COMMONN_BORDER_GRAY">
            <div className="font-bold text-xl">
              내 문의내역 총 {myQnADatas.length}개
            </div>
          </div>
          {myQnADatas.map((item: MyQnADatasType) => (
            <MyQnACard
              key={item.qnaNo}
              status="답변 대기중"
              title={item.title}
              content={item.content}
              onClick={() => {
                handlerQnACancel(item.qnaNo);
              }}
              createDt={item.createDt}
            />
          ))}
          <ModalDelete
            showModalDelete={showModalDelete}
            setShowModalDelete={setShowModalDelete}
            onClick={() => {
              deleteMyQnADatas(qnaNo);
            }}
            description="선택한 문의를 취소하시겠습니까?"
            delBtnValue="문의취소"
            cancelBtnValue="선택취소"
          />
          {showToastMessage && <ToastMessage message="문의가 취소되었습니다" />}
        </div>
      )}

      <Nav />
    </OuterLayout>
  );
};

export default MyQnA;
