import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaRegHeart } from "react-icons/fa";
import HttpClient from "../../utils/api/customAxios";

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

  const getReviewList = async () => {
    const { data } = await HttpClient.get<ReviewListItem[]>(
      `/KkoSoonNae/store/list-review/${storeNo}`
    );
    console.log(data[0].storeName);
    setReviewListData(data);
    return data;
  };

  useEffect(() => {
    getReviewList();
  }, []);

  return (
    <div>
      {reviewListData ? (
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
