import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

interface pageTitleProps {
  title: React.ReactNode;
  leftBtn?: boolean;
}

const PageTitle: React.FC<pageTitleProps> = (props) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <TitleDiv>
      {props.leftBtn ? (
        <button onClick={handleBack}>
          <img src="/img/title/left.svg" alt="back" width={"25px"} />
        </button>
      ) : (
        <p className=" w-6"></p>
      )}
      <p>{props.title}</p>
      <Link to="/">
        <div>
          <img src="/img/logo.svg" alt="logo" width={"40px"} />
        </div>
      </Link>
    </TitleDiv>
  );
};

export default PageTitle;

const TitleDiv = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  top: 0;
  align-items: center;
  padding: 10px 6px;
  height: 55px;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.12);
  background: #fff;
  z-index: 5;
`;
