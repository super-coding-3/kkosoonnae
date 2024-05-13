import React from "react";
import OuterLayout from "../components/common/OuterLayout";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";
import MainContent from "../components/main/MainContent";

const Main: React.FC = () => {
  return (
    <OuterLayout>
      <Header />
      <MainContent />
      <Footer />
      <Nav />
    </OuterLayout>
  );
};

export default Main;
