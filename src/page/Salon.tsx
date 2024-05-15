import React from "react";
import { useParams } from "react-router-dom";
import SalonCarousel from "../components/salon/SalonCarousel";
import SalonTab from "../components/salon/SalonTab";

const Salon: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <div className="text-center text-lg">PageTitle 위치{id}</div>
      <SalonCarousel />
      <div className="px-4">
        <SalonTab />
      </div>
    </div>
  );
};

export default Salon;
