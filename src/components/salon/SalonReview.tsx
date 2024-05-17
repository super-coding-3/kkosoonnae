import React from "react";
import styled from "styled-components";
import { FaStar, FaRegHeart } from "react-icons/fa";

import SalonReviewList from "./SalonReviewList";

const SalonReview: React.FC = () => {
  return (
    <div>
      <SalonScore className="flex items-center gap-4">
        <h2 className="text-black text-xl font-semibold">쁘띠멍</h2>
        <p className="flex text-xs items-center gap-1">
          <FaStar /> 총점 5.0
        </p>
        <p className="flex text-xs items-center gap-1">
          <FaRegHeart /> 관심수 10
        </p>
      </SalonScore>
      <SalonReviewList />
    </div>
  );
};

const SalonScore = styled.div`
  p {
    color: #816f6b;
  }
`;
export default SalonReview;
