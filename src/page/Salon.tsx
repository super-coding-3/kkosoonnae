import React from "react";
import OuterLayout from "../components/common/OuterLayout";
import { useParams } from "react-router-dom";
import SalonCarousel from "../components/salon/SalonCarousel";
import SalonTab from "../components/salon/SalonTab";
import PageTitle from "../components/common/PageTitle";
import Footer from "../components/common/Footer";

const Salon: React.FC = () => {
  const { id } = useParams();

  return (
    <OuterLayout>
      <PageTitle title={""} />
      <SalonCarousel />
      <div className="px-4">
        <SalonTab />
      </div>
      <Footer />
    </OuterLayout>
  );
};

export default Salon;
