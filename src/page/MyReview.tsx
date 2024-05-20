import React from "react";
import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Nav from "../components/common/Nav";
import MyReviewCard from "../components/myreview/MyReviewCard";

const MyReview: React.FC = () => {
  return (
    <OuterLayout>
      <PageTitle title="내가 쓴 리뷰" leftBtn={true} />
      <div className="mt-5 pb-24 mx-5">
        <div className="pb-6 font-bold text-xl">내가 쓴 리뷰 총 3개</div>
        <MyReviewCard
          store_name="꼬순이네"
          scope="4.9"
          content="지인 추천으로 가게됬는데 미용도 예쁘게 잘해주시고 너무 친절해요 무엇보다 미용맡기면 아기들이 스트레스 안 받는거 같아서 너무좋네요"
        />
        <MyReviewCard
          store_name="꼬순이네2"
          scope="5"
          content="지인 추천으로 가게됬는데 미용도 예쁘게 잘해주시고 너무 친절해요 무엇보다 미용맡기면 아기들이 스트레스 안 받는거 같아서 너무좋네요 지인 추천으로 가게됬는데 미용도 예쁘게 잘해주시고 너무 친절해요 무엇보다 미용맡기면 아기들이 스트레스 안 받는거 같아서 너무좋네요"
        />
        <MyReviewCard
          store_name="꼬순이네3"
          scope="1"
          content="지인 추천으로 가게됬는데 미용도 예쁘게 잘해주시고 너무 친절해요 무엇보다 미용맡기면 아기들이 스트레스 안 받는거 같아서 너무좋네요 지인 추천으로 가게됬는데 미용도 예쁘게 잘해주시고 너무 친절해요 무엇보다 미용맡기면 아기들이 스트레스 안 받는거 같아서 너무좋네요 지인 추천으로 가게됬는데 미용도 예쁘게 잘해주시고 너무 친절해요 무엇보다 미용맡기면 아기들이 스트레스 안 받는거 같아서 너무좋네요 지인 추천으로 가게됬는데 미용도 예쁘게 잘해주시고 너무 친절해요 무엇보다 미용맡기면 아기들이 스트레스 안 받는거 같아서 너무좋네요 "
        />
      </div>
      <Nav />
    </OuterLayout>
  );
};

export default MyReview;
