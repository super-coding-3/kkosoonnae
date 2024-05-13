import React from "react";
import styled from "styled-components";

const EventBtnContent: React.FC = () => {
  return (
    <div
      className="flex justify-between items-center px-2"
      style={{ marginTop: "-30px" }}
    >
      <EventBtn>
        <img src="img/main/btn-img.png" alt="펫프렌즈" />
      </EventBtn>
      <EventBtn>
        <img src="img/main/btn-img2.png" alt="이벤트2" />
      </EventBtn>
    </div>
  );
};

const EventBtn = styled.button`
  width: 49%;
  height: 120px;
  border-radius: 10px;
  overflow: hidden;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  img {
    width: 100%;
  }
`;
export default EventBtnContent;
