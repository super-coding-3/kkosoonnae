import React from "react";
import styled from "styled-components";
import SalonStyleCard from "./SalonStyleCard";

const SalonStyle: React.FC = () => {
  return (
    <div className="mt-4 pb-3">
      <StyleTitle className="py-2 mb-2">
        <h3>스타일</h3>
      </StyleTitle>
      <div className="flex flex-wrap gap-2">
        <SalonStyleCard />
      </div>
    </div>
  );
};

const StyleTitle = styled.div`
  border-bottom: 1px solid #ddd;
  h3 {
    font-size: 1.1rem;
    color: #000;
  }
`;
export default SalonStyle;
