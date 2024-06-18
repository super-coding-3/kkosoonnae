import React from "react";
import { Carousel } from "flowbite-react";

const MainCarousel: React.FC = () => {
  return (
    <div className="h-[340px]">
      <Carousel>
        <img src="img/main/sample-banner1.png" alt="" />
        <img src="img/main/sample-banner2.png" alt="" />
        <img src="img/main/sample-banner3.png" alt="" />
      </Carousel>
    </div>
  );
};

export default MainCarousel;
