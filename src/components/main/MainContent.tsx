import React from "react";
import MainCarousel from "./MainCarousel";
import EventBtn from "./EventBtn";

const MainContent: React.FC = () => {
  return (
    <div style={{ paddingTop: "55px" }}>
      <MainCarousel />
      <EventBtn />
    </div>
  );
};

export default MainContent;
