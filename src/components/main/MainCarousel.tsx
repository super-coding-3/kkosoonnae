import React from "react";
import styled from "styled-components";
import { Carousel } from "flowbite-react";

const MainCarousel: React.FC = () => {
  return (
    <MainCarouselWrap>
      <Carousel>
        <img src="img/main/sample-banner1.png" alt="" />
        <img src="img/main/sample-banner2.png" alt="" />
        <img src="img/main/sample-banner3.png" alt="" />
      </Carousel>
    </MainCarouselWrap>
  );
};

const MainCarouselWrap = styled.div`
  height: 340px;
  button[data-testid="carousel-indicator"] {
    display: none;
  }
`;

export default MainCarousel;
