import React from "react";
import OuterLayout from "../components/common/OuterLayout";
import { useParams } from "react-router-dom";
import SalonCarousel from "../components/salon/SalonCarousel";
import SalonTab from "../components/salon/SalonTab";
import Footer from "../components/common/Footer";

const Salon: React.FC = () => {
  const { id } = useParams();

  return (
    <OuterLayout>
      <div className="text-center text-lg">PageTitle 위치{id}</div>
      <SalonCarousel />
      <div className="px-4">
        <SalonTab />
      </div>
      <Footer />
    </OuterLayout>
  );
};

export default Salon;
