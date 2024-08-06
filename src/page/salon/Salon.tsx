import React from "react";
import OuterLayout from "../../components/common/OuterLayout";
import SalonCarousel from "../../components/salon/SalonCarousel";
import SalonTab from "../../components/salon/SalonTab";
import PageTitle from "../../components/common/PageTitle";
import Nav from "../../components/common/Nav";

const Salon: React.FC = () => {
  return (
    <OuterLayout>
      <PageTitle title={""} />
      <SalonCarousel />
      <div className="px-4 mb-12">
        <SalonTab />
      </div>
      <Nav />
    </OuterLayout>
  );
};

export default Salon;
