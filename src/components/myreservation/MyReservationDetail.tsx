import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import OuterLayout from "../common/OuterLayout";
import PageTitle from "../common/PageTitle";
import Nav from "../common/Nav";
import ReservationCheckList from "../common/ReservationCheckList";
import { reservationFormValues } from "../reservation/ReservationForm";
import useAxios from "../../hooks/useAxios";
import { ROUTER_PATH } from "../../constants/constants";
import useToastMessage from "../../hooks/useToastMessage";

const MyReservationDetail: React.FC = () => {
  const { reservationNo } = useParams() as { reservationNo: string };
  const [myReservationDatas, setMyReservationDatas] =
    useState<reservationFormValues>(Object);
  const { error, handleRequest, Loading } = useAxios();
  const { showToast, Toast } = useToastMessage();

  const hanlderOkBtn = () => {
    window.location.href = ROUTER_PATH.myReservation;
  };

  useEffect(() => {
    handleRequest({
      url: `/api/user/reservation/result-reservation/${reservationNo}`,
      method: "GET",
      setData: setMyReservationDatas,
    });
    if (error) {
      showToast({ message: "오류가 발생했습니다" });
    }
  }, []);

  return (
    <OuterLayout>
      <PageTitle title="예약내역" leftBtn={true} />
      {Loading}
      <ReservationCheckList
        reservationData={myReservationDatas}
        onReservationComplete={hanlderOkBtn}
      />
      <Toast />
      <Nav />
    </OuterLayout>
  );
};

export default MyReservationDetail;
