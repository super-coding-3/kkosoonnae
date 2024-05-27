import React from "react";
import MainCarousel from "./MainCarousel";
import EventBtn from "./EventBtn";
import MainStoreList from "./MainStoreList";

const MainContent: React.FC = () => {
  return (
    <div style={{ paddingTop: "55px" }}>
      <MainCarousel />
      <EventBtn />
      <MainStoreList />
    </div>
  );
};

export default MainContent;
