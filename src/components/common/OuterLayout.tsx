import React from "react";
import styled from "styled-components";

interface OuterLayoutProps {
  children: React.ReactNode;
}

const OuterLayout: React.FC<OuterLayoutProps> = ({ children }) => {
  return <OuterLayoutWrap>{children}</OuterLayoutWrap>;
};

const OuterLayoutWrap = styled.div`
  max-width: 640px;
  min-width: 375px;
  position: relative;
  margin: 0 auto;
  background: #fff;
  border: #888;
  min-height: 100vh;
`;

export default OuterLayout;
