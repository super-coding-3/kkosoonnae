import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import useAxios from "../../hooks/useAxios";
import useToastMessage from "../../hooks/useToastMessage";

import BtnSubmit from "../common/BtnSubmit";

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
  const { isLoading, error, handleRequest } = useAxios();
  const { showToast, Toast } = useToastMessage();

  const { storeNo } = useParams<{ storeNo: string }>();
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [salonNumber, setSalonNumber] = useState<ReviewSalonNumberItem | null>(
    null
  );
  const [content, setContent] = useState("");
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
  const getSalonNumber = () => {
    handleRequest({
      url: "/api/user/store/allStore",
      method: "GET",
      setData: setSalonNumber,
    });
  };

  // 리뷰 내용 post 호출

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      storeNumber: storeNo,
      scope: rating,
      content: content,
      createDt: new Date().toISOString(),
    };

    try {
      await handleRequest({
        url: `/api/user/review/${storeNo}/reviews`,
        method: "POST",
        body: payload,
      });
      showToast({
        message: "리뷰가 등록되었습니다.",
      });
      onSubmit({ rating, content });
      setRating(0);
      setContent("");

      const timer = setTimeout(() => {
        showToast({
          message: "",
        });
      }, 3000);

      return () => clearTimeout(timer);
    } catch (err) {
      showToast({
        message: "로그인이 필요합니다.",
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  useEffect(() => {
    getSalonNumber();
  }, []);

  return (
    <div>
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
                    className="hidden"
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
            className="w-full border-1 border-gray-200 rounded"
          />
        </div>
        <BtnSubmit type="submit" value="리뷰작성" />
        <Toast />
      </form>
    </div>
  );
};

export default ReviewForm;
