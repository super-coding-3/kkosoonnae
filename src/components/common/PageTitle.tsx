import React from "react";
import styled from "styled-components";

interface pageTitleProps {
  title: React.ReactNode;
}

const PageTitle: React.FC<pageTitleProps> = ({ title }) => {
  return (
    <TitleDiv>
      <img src="/img/title/left.svg" alt="back" width={"25px"} />
      <p>{title}</p>
      <div>
        <img src="/img/logo.svg" alt="logo" width={"40px"} />
      </div>
    </TitleDiv>
  );
};

export default PageTitle;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 6px;
  height: 55px;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.12);
`;
