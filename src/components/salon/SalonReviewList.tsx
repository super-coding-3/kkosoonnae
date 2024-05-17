import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { Avatar } from "flowbite-react";
import ReviewForm from "./ReviewForm";

const SalonReviewList: React.FC = () => {
  const reviewData = [
    {
      id: 1,
      author: "김민준",
      date: "2023-05-20",
      rating: 5.0,
      content:
        "서비스가 매우 친절하고 좋았습니다. 강아지 미용이 깔끔하게 잘 됐어요. 다음에도 이용하고 싶네요!",
    },
    {
      id: 2,
      author: "이서연",
      date: "2023-05-18",
      rating: 4,
      content:
        "가게 분위기가 좋고 편안했습니다. 미용사분들도 친절하셨어요. 가격은 조금 높은 편이라고 생각됩니다.",
    },
    {
      id: 3,
      author: "박준호",
      date: "2023-05-15",
      rating: 5,
      content:
        "정말 훌륭한 서비스였습니다! 우리 강아지가 미용하고 나서 너무 귀엽고 깨끗해졌어요. 강력 추천합니다!",
    },
    {
      id: 4,
      author: "최지우",
      date: "2023-05-12",
      rating: 3.5,
      content:
        "전반적으로 만족스러웠으나 예약이 조금 어려웠던 점이 아쉬웠습니다. 미용 결과는 좋았어요.",
    },
    {
      id: 5,
      author: "강현우",
      date: "2023-05-10",
      rating: 4,
      content:
        "직원분들이 친절하고 애완동물을 잘 다뤄주셨습니다. 가게도 청결하고 좋았어요. 다음에 또 방문할게요!",
    },
  ];

  const handleReviewSubmit = (review: { rating: number; content: string }) => {
    // 리뷰 데이터를 서버로 전송하거나 상태 업데이트 등의 작업 수행
    console.log("Submitted review:", review);
  };

  return (
    <div>
      {reviewData.map((item) => (
        <ReviewItem className="flex items-start gap-2 py-2">
          <Avatar img="/img/salon/sample-pet.png" alt="" rounded />
          <ReviewText>
            <div className="flex items-center justify-between">
              <strong>{item.author}</strong>
              <span className="flex items-center text-xs gap-1">
                <FaStar /> {item.rating}
              </span>
            </div>
            <p>{item.content}</p>
            <p className="text-right text-xs text-slate-300">{item.date}</p>
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
