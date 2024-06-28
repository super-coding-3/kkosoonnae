import React, { useEffect, useState } from "react";
import { format, parse, parseISO } from "date-fns";
import { ko } from "date-fns/locale";

import PageNothing from "../../components/common/PageNothing";
import ModalDelete from "../../components/common/ModalDelete";
import OuterLayout from "../../components/common/OuterLayout";
import PageTitle from "../../components/common/PageTitle";
import Nav from "../../components/common/Nav";
import MyReservationCard from "../../components/myreservation/MyReservationCard";
import useAxios from "../../hooks/useAxios";
import useToastMessage from "../../hooks/useToastMessage";

interface MyReservationDatasType {
  reservationNo: number;
  reservationDate: string;
  reservationTime: string;
  reservationStatus: string;
  storeImg: string;
  storeName: string;
  styleName: string;
  price: number;
}

const MyReservation: React.FC = () => {
  const [myReservationDatas, setMyReservationDatas] = useState<
    MyReservationDatasType[]
  >([]);
  const [loadingMyReservation, setLoadingMyReservation] =
    useState<boolean>(false);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const { showToast, Toast } = useToastMessage();
  const [reservationNo, setReservationNo] = useState<number>(0);

  const { error, handleRequest, Loading } = useAxios();

  const deleteMyReservationDatas = async (reservationNo: number) => {
    handleRequest({
      url: `/api/user/mypage/avail-cancel/${reservationNo}`,
      method: "DELETE",
    });
    if (!error) {
      setShowModalDelete(false);
      showToast({
        message: "예약이 취소되었습니다",
        action: () => {
          window.location.reload();
        },
      });
    } else {
      showToast({ message: "오류가 발생했습니다" });
    }
  };

  const handlerClickCancel = (reservationNo: number) => {
    setReservationNo(reservationNo);
    setShowModalDelete(true);
  };

  const formatDate = (dateString: string): string => {
    const date = parseISO(dateString);
    return format(date, "yyyy년 M월 d일 (EEE)", { locale: ko });
  };

  const formatTime = (timeString: string): string => {
    const parsedTime = parse(timeString, "HH:mm:ss", new Date());
    const formattedTime = format(parsedTime, "a h시", { locale: ko });
    return formattedTime;
  };

  useEffect(() => {
    handleRequest({
      url: "/api/user/mypage/avail-list",
      method: "GET",
      setData: (data) => {
        setMyReservationDatas(data);
        setLoadingMyReservation(true);
      },
    });
    if (error) {
      showToast({
        message: "오류가 발생했습니다. 잠시 후 다시 실행해주세요",
      });
    }
  }, []);

  return (
    <OuterLayout>
      <PageTitle title="예약내역" leftBtn={true} />
      {Loading}
      {myReservationDatas.length === 0 && loadingMyReservation ? (
        <PageNothing message="예약내역이 없습니다" />
      ) : (
        <div className="pt-4 pb-24 px-4">
          {myReservationDatas.map((item: MyReservationDatasType) => (
            <MyReservationCard
              key={item.reservationNo}
              reservationNo={item.reservationNo}
              date={formatDate(item.reservationDate)}
              time={formatTime(item.reservationTime)}
              status={item.reservationStatus}
              storeImg={item.storeImg}
              storeName={item.storeName}
              style={item.styleName}
              price={`${item.price}원`}
              delBtnOnClick={() => {
                handlerClickCancel(item.reservationNo);
              }}
            />
          ))}
          <ModalDelete
            showModalDelete={showModalDelete}
            setShowModalDelete={setShowModalDelete}
            onClick={() => {
              deleteMyReservationDatas(reservationNo);
            }}
            description="선택한 예약을 취소하시겠습니까?"
            delBtnValue="예약취소"
            cancelBtnValue="선택취소"
          />
          <Toast />
        </div>
      )}
      <Nav />
    </OuterLayout>
  );
};

export default MyReservation;
