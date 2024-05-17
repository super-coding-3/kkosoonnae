import React from "react";
import styled from "styled-components";

import { Carousel } from "flowbite-react";

function SalonCarousel() {
  return (
    <SalonCarouselWrap>
      <Carousel>
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
    </SalonCarouselWrap>
  );
}

const SalonCarouselWrap = styled.div`
  height: 180px;
`;

export default SalonCarousel;
