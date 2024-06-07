import HttpClient from "../../utils/api/customAxios";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import OuterLayout from "../common/OuterLayout";
import PageTitle from "../common/PageTitle";
import Nav from "../common/Nav";
import ReservationCheckList from "../common/ReservationCheckList";
import { reservationFormValues } from "../reservation/ReservationForm";

const MyReservationDetail: React.FC = () => {
  const { reservationNo } = useParams() as { reservationNo: string };
  const [myReservationDatas, setMyReservationDatas] =
    useState<reservationFormValues>(Object);

  const getMyReservationDetailDatas =
    async (): Promise<reservationFormValues> => {
      const res = await HttpClient.get(
        `/api/reservation/result-reservation/${reservationNo}`
      );
      return res.data;
    };

  const hanlderOkBtn = () => {
    window.location.href = "/my_reservation";
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const reservationDatas = await getMyReservationDetailDatas();
      setMyReservationDatas(reservationDatas);
    };
    fetchProfile();
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
