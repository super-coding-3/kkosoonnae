import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { Avatar } from "flowbite-react";

import ReviewForm from "./ReviewForm";
import { ReviewListItem } from "./SalonReview";

interface SalonReviewListProps {
  reviewListData: ReviewListItem[];
}

const SalonReviewList: React.FC<SalonReviewListProps> = ({
  reviewListData,
}) => {
  const handleReviewSubmit = (review: { rating: number; content: string }) => {
    console.log("Submitted review:", review);
  };

  return (
    <div>
      {reviewListData.map((item) => (
        <ReviewItem
          className="flex items-start gap-2 py-2 mt-2"
          key={item.reviewNo}
        >
          {item.mainPet === "Y" ? (
            <Avatar img={item.img} alt={`${item.reviewNo}`} rounded />
          ) : null}

          <ReviewText>
            <div className="flex items-center justify-between">
              <strong>{item.nickName}</strong>
              <span className="flex items-center text-xs gap-1">
                <FaStar /> {item.scope}
              </span>
            </div>
            <p>{item.content}</p>
            <p className="text-right text-xs text-slate-300">2024.5.29</p>
          </ReviewText>
        </ReviewItem>
      ))}

      {/* Review 쓰기 */}
      <div className="py-4">
        <ReviewForm onSubmit={handleReviewSubmit} />
      </div>
    </div>
  );
};
const ReviewItem = styled.div`
  border-bottom: 1px solid #ddd;
`;

const ReviewText = styled.div`
  width: calc(100% - 40px);
  div {
    strong {
      font-size: 14px;
    }
    span {
      color: #816f6b;
    }
  }
  p {
    font-size: 0.8rem;
    color: #888888;
    line-height: 1.2;
  }
`;
export default SalonReviewList;
