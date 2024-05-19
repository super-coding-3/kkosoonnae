import React from "react";
import { Card } from "flowbite-react";
import styled from "styled-components";
import { FaStar, FaRegHeart } from "react-icons/fa";

function ResultCard() {
  return (
    <div className="">
      <ResultStore>
        <Card imgAlt="살롱이미지" imgSrc="/img/search/store-sample.png">
          <ResultStoreInfo>
            <div className="flex items-center gap-2">
              <strong>펫살롱</strong>
              <Score>
                <p className="flex text-xs items-center gap-1">
                  <FaStar /> 총점 5.0
                </p>
                <p className="flex text-xs items-center gap-1">
                  <FaRegHeart /> 관심수 10
                </p>
              </Score>
            </div>
            <p className="text-xs text-zinc-500">
              강남역 4번 출구 50m, 358타워 왼쪽 직진 3분거
            </p>
          </ResultStoreInfo>
        </Card>
      </ResultStore>
    </div>
  );
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
