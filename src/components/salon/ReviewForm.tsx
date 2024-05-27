import React, { useState } from "react";
import styled from "styled-components";

import { FaStar } from "react-icons/fa";

interface ReviewFormProps {
  onSubmit: (review: { rating: number; content: string }) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");

  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ rating, content });
    setRating(0);
    setContent("");
  };

  return (
    <ReviewFormWrap>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-2">
          <strong>총점</strong>
          <p className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <label key={starValue}>
                  <input
                    type="checkbox"
                    checked={starValue <= rating}
                    onChange={() => handleRatingClick(starValue)}
                  />
                  <FaStar
                    className="star"
                    color={starValue <= rating ? "#816f6b" : "#dddddd"}
                    size={20}
                    onChange={() => handleRatingClick(starValue)}
                  />
                </label>
              );
            })}
          </p>
        </div>
        <div className="py-1">
          <textarea
            value={content}
            onChange={handleContentChange}
            placeholder="리뷰를 작성해주세요"
            rows={4}
            required
            className="rounded"
          />
        </div>

        <BtnReviewSubmit type="submit" className="rounded">
          리뷰 작성
        </BtnReviewSubmit>
      </form>
    </ReviewFormWrap>
  );
};

const ReviewFormWrap = styled.div`
  input[type="checkbox"] {
    display: none;
  }
  textarea {
    width: 100%;
    border: 1px solid #ddd;
  }
`;

const BtnReviewSubmit = styled.button`
  width: 100%;
  height: 44px;
  color: #fff;
  background: #492d28;
`;
export default ReviewForm;
