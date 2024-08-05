import React from "react";
import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";

import NoticeAccordion from "../components/notice/NoticeAccordion";

const Notice: React.FC = () => {
  return (
    <OuterLayout>
      <PageTitle title="공지사항" />
      <NoticeAccordion />
      <Footer />
      <Nav />
    </OuterLayout>
  );
};

export default Notice;
