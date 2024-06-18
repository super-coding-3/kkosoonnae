import React from "react";
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
    console.log("Submitted review:");
  };

  return (
    <div>
      {reviewListData.map((item) => (
        <div
          className="flex items-start gap-2 py-2 mt-2 border-b-[1px] border-gray-200"
          key={item.reviewNo}
        >
          {item.mainPet === "Y" ? (
            <Avatar img={item.img} alt={`${item.reviewNo}`} rounded />
          ) : null}

          <div style={{ width: "calc(100% - 40px)" }}>
            <div className="flex items-center justify-between">
              <strong className="text-sm">{item.nickName}</strong>
              <span className="flex items-center text-xs gap-1 text-MAIN_LIGHT_COLOR">
                <FaStar /> {item.scope}
              </span>
            </div>
            <p className="text-xs  text-slate-600">{item.content}</p>
            <p className="text-right text-xs text-slate-300">2024.5.29</p>
          </div>
        </div>
      ))}

      {/* Review 쓰기 */}
      <div className="pt-4 pb-8">
        <ReviewForm onSubmit={handleReviewSubmit} />
      </div>
    </div>
  );
};

export default SalonReviewList;
