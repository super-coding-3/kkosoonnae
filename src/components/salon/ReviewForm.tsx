import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HttpClient from "../../utils/api/customAxios";
import { FaStar } from "react-icons/fa";

import ToastMessage from "../common/ToastMessage";

interface ReviewSalonNumberItem {
  storeNo?: number;
}

interface ReviewItem {
  scope: number;
  content: string;
  createDt: string;
}

interface ReviewFormProps {
  onSubmit: (review: { rating: number; content: string }) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const { storeNo } = useParams<{ storeNo: string }>();
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [salonNumber, setSalonNumber] = useState<ReviewSalonNumberItem | null>(
    null
  );
  const [content, setContent] = useState("");
  const [reviewToastMessage, setReviewToastMessage] = useState("");
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  //총점 클릭
  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  //리뷰 내용 담기
  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  // 매장 번호
  const getSalonNumber = async () => {
    const { data } = await HttpClient.get<ReviewSalonNumberItem>(
      "/api/user/store/allStore"
    );
    setSalonNumber(data);
    return data;
  };

  // 리뷰 내용 post 호출
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      storeNumber: storeNo,
      scope: rating,
      content: content,
      createDt: new Date().toISOString(),
    };

    HttpClient.post(`/api/user/review/${storeNo}/reviews`, payload)
      .then((response) => {
        if (response.status === 200) {
          setReviewToastMessage(response.data);
          onSubmit({ rating, content });
          setRating(0);
          setContent("");

          const timer = setTimeout(() => {
            setReviewToastMessage("");
          }, 3000);

          return () => clearTimeout(timer);
        }
      })
      .catch((error: any) => {
        setReviewToastMessage("로그인이 필요합니다.");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      });
  };

  useEffect(() => {
    getSalonNumber();
  }, []);

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
        {reviewToastMessage && <ToastMessage message={reviewToastMessage} />}
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
