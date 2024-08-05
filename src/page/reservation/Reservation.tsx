import React from "react";
import { useLocation } from "react-router-dom";
import OuterLayout from "../components/common/OuterLayout";
import Nav from "../components/common/Nav";
import PageTitle from "../components/common/PageTitle";
import ReservationForm from "../components/reservation/ReservationForm";

const Reservation: React.FC = () => {
  const location = useLocation();
  const salonNamefix = location.state?.salonNamefix;
  const salonNumber = location.state?.salonNumber;

  return (
    <OuterLayout>
      <PageTitle title={"예약하기"} />
      <ReservationForm salonNamefix={salonNamefix} salonNumber={salonNumber} />
      <Nav />
    </OuterLayout>
  );
};

export default Reservation;
