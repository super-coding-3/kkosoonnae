import React from "react";
import { Card } from "flowbite-react";
import styled from "styled-components";
import { FaStar, FaRegHeart } from "react-icons/fa";

function ResultCard() {
  return <div className=""></div>;
}

const ResultStore = styled.div`
  > div {
    > div {
      padding: 0.5rem 1rem;
    }
  }
`;

const ResultStoreInfo = styled.div``;

const Score = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    svg {
      color: #888;
    }
    color: #888;
  }
`;

export default ResultCard;
