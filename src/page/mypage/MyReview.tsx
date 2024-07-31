import React, { useEffect, useState } from "react";

import OuterLayout from "../../components/common/OuterLayout";
import PageTitle from "../../components/common/PageTitle";
import Nav from "../../components/common/Nav";
import MyReviewCard from "../../components/myreview/MyReviewCard";
import PageNothing from "../../components/common/PageNothing";
import ModalDelete from "../../components/common/ModalDelete";
import useAxios from "../../hooks/useAxios";
import useToastMessage from "../../hooks/useToastMessage";
import ErrorPage from "../../components/common/ErrorPage";

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
  const [loadingMyReview, setLoadingMyReview] = useState<boolean>(false);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [reviewNo, setReviewNo] = useState<number>(0);
  const [getError, setGetError] = useState<boolean>(false);

  const { error, handleRequest, Loading } = useAxios();
  const { showToast, Toast } = useToastMessage();

  const deleteMyReview = async (reviewNo: number) => {
    const response = await handleRequest({
      url: `/api/user/mypage/my-review/${reviewNo}`,
      method: "DELETE",
    });
    setShowModalDelete(false);

    if (response.status === 200) {
      showToast({
        message: "리뷰가 삭제되었습니다",
        action: () => {
          window.location.reload();
        },
      });
    } else {
      showToast({ message: error });
    }
  };

  const handlerReviewCancel = (reviewNo: number) => {
    setReviewNo(reviewNo);
    setShowModalDelete(true);
  };

  useEffect(() => {
    const fetchReview = async () => {
      const response = await handleRequest({
        url: "/api/user/mypage/my-review-list",
        method: "GET",
        setData: (data) => {
          setMyReview(data);
          setLoadingMyReview(true);
        },
      });
      if (response) {
        setGetError(true);
      }
    };
    fetchReview();
  }, []);

  useEffect(() => {
    if (error) {
      showToast({ message: error });
    }
  }, [error]);

  return (
    <OuterLayout>
      <PageTitle title="내가 쓴 리뷰" leftBtn={true} />
      {Loading}
      {error && getError ? (
        <ErrorPage errorMessage={error} />
      ) : (
        <>
          {myReview.length === 0 && loadingMyReview ? (
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
              <Toast />
            </div>
          )}
        </>
      )}
      <Nav />
    </OuterLayout>
  );
};

export default MyReview;
