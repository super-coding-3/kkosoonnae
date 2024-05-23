import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import OuterLayout from "../components/common/OuterLayout";
import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";
import PageTitle from "../components/common/PageTitle";
import ReservationForm from "../components/reservation/ReservationForm";
import ReservationCheckList from "../components/common/ReservationCheckList";
import ReservationOk from "../components/reservation/ReservationOk";

const Reservation: React.FC = () => {
  const location = useLocation();
  const salonNamefix = location.state?.salonNamefix;

  const [step, setStep] = useState(1);

  return (
    <OuterLayout>
      <PageTitle title={"예약하기"} />
      {step === 1 ? <ReservationForm salonNamefix={salonNamefix} /> : null}
      {step === 2 ? <ReservationCheckList /> : null}
      {step === 3 ? <ReservationOk /> : null}
      <Footer />
      <Nav />
    </OuterLayout>
  );
};

export default Reservation;
