import HttpClient from "../utils/api/customAxios";

import React, { useEffect, useState } from "react";

import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Nav from "../components/common/Nav";
import MyReviewCard from "../components/myreview/MyReviewCard";
import PageNothing from "../components/common/PageNothing";
import ToastMessage from "../components/common/ToastMessage";
import ModalDelete from "../components/common/ModalDelete";

interface MyReviewType {
  reviewNo: number;
  storeNo: number;
  storeName: string;
  scope: number;
  img: string;
  content: string;
  reviewDt: Date;
}

const MyReview: React.FC = () => {
  const [myReview, setMyReview] = useState<MyReviewType[]>([]);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [showToastMessage, setShowToastMessage] = useState<boolean>(false);
  const [reviewNo, setReviewNo] = useState<number>(0);

  const getMyReview = async (): Promise<MyReviewType[]> => {
    const res = await HttpClient.get("/my-page/my-review-list");
    return res.data;
  };

  const deleteMyReview = async (reviewNo: number) => {
    await HttpClient.delete(`/my-page/my-review/${reviewNo}`);
    setShowModalDelete(false);
    setShowToastMessage(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handlerReviewCancel = (reviewNo: number) => {
    setReviewNo(reviewNo);
    setShowModalDelete(true);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const prevReview = await getMyReview();
      setMyReview(prevReview);
    };
    fetchProfile();
  }, []);

  return (
    <OuterLayout>
      <PageTitle title="내가 쓴 리뷰" leftBtn={true} />
      {myReview.length === 0 ? (
        <PageNothing message="리뷰내역이 없습니다" />
      ) : (
        <div className="pt-4 pb-24 px-4">
          <div className="pb-6 font-bold text-xl">
            내가 쓴 리뷰 총 {myReview.length}개
          </div>
          {myReview.map((item: MyReviewType) => (
            <MyReviewCard
              key={item.reviewNo}
              storeName={item.storeName}
              scope={item.scope}
              content={item.content}
              onClick={() => {
                handlerReviewCancel(item.reviewNo);
              }}
            />
          ))}
          <ModalDelete
            showModalDelete={showModalDelete}
            setShowModalDelete={setShowModalDelete}
            onClick={() => {
              deleteMyReview(reviewNo);
            }}
            description="선택한 리뷰를 삭제하시겠습니까?"
            delBtnValue="삭제"
            cancelBtnValue="취소"
          />
          {showToastMessage && <ToastMessage message="리뷰가 삭제되었습니다" />}
        </div>
      )}
      <Nav />
    </OuterLayout>
  );
};

export default MyReview;
