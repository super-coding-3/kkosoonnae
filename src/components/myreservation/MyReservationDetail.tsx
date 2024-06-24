import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import OuterLayout from "../common/OuterLayout";
import PageTitle from "../common/PageTitle";
import Nav from "../common/Nav";
import ReservationCheckList from "../common/ReservationCheckList";
import { reservationFormValues } from "../reservation/ReservationForm";
import useAxios from "../../hooks/useAxios";

const MyReservationDetail: React.FC = () => {
  const { reservationNo } = useParams() as { reservationNo: string };
  const [myReservationDatas, setMyReservationDatas] =
    useState<reservationFormValues>(Object);
  const { isLoading, error, handleRequest } = useAxios();

  const hanlderOkBtn = () => {
    window.location.href = "/my_reservation";
  };

  useEffect(() => {
    handleRequest({
      url: `/api/user/reservation/result-reservation/${reservationNo}`,
      method: "GET",
      setData: setMyReservationDatas,
    });
  }, []);

  return (
    <OuterLayout>
      <PageTitle title="예약내역" leftBtn={true} />
      <ReservationCheckList
        reservationData={myReservationDatas}
        onReservationComplete={hanlderOkBtn}
      />
      <Nav />
    </OuterLayout>
  );
};

export default MyReservationDetail;
