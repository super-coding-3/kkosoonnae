import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaRegHeart } from "react-icons/fa";

import useAxios from "../../hooks/useAxios";

import SalonReviewList from "./SalonReviewList";
import PageNothing from "../../components/common/PageNothing";

export interface ReviewListItem {
  storeNo: number;
  storeName: string;
  totalLikeStore: null;
  reviewNo: number;
  cstmrNo: number;
  content: string;
  scope: number;
  averageScope: null;
  nickName: string;
  img: string;
  mainPet: string;
}

const SalonReview: React.FC = () => {
  const { storeNo } = useParams<{ storeNo: string }>();
  const [reviewListData, setReviewListData] = useState<ReviewListItem[]>([]);

  // TODO: ERROR 시 뜨는 컴포넌트 구현, 로딩 화면 구현
  const { isLoading, error, handleRequest, Loading } = useAxios();

  const getReviewList = async () => {
    try {
      await handleRequest({
        url: `/api/user/store/list-review/${storeNo}`,
        method: "GET",
        setData: setReviewListData,
      });
    } catch (err) {
      if (error) {
        return (
          <div className="my-8 px-4">
            <p>
              데이터를 가져오는 데 실패했습니다. 잠시 후 다시 시도해 주세요.
            </p>
          </div>
        );
      }
    }
  };

  useEffect(() => {
    getReviewList();
  }, []);

  return (
    <div>
      {isLoading && Loading}
      {reviewListData.length > 0 ? (
        <div className="flex items-center gap-4">
          <h2 className="text-black text-xl font-semibold">
            {reviewListData[0]?.storeName}
          </h2>
          <p className="flex text-normal items-center gap-1 text-MAIN_LIGHT_COLOR">
            <FaStar /> 총점 {reviewListData[0]?.averageScope}
          </p>
          <p className="flex text-normal items-center gap-1 text-MAIN_LIGHT_COLOR">
            <FaRegHeart /> 관심수 {reviewListData[1]?.totalLikeStore}
          </p>
        </div>
      ) : (
        <PageNothing message="리뷰가 없습니다" />
      )}
      <SalonReviewList reviewListData={reviewListData} />
    </div>
  );
};

export default SalonReview;
