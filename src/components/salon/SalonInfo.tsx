import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import useAxios from "../../hooks/useAxios";

import FavoriteButton from "./FavoriteButton";
import ToastMessage from "../common/ToastMessage";
import BtnSubmit from "../common/BtnSubmit";

interface SalonNumberItem {
  storeNo?: number;
  storeName: string;
}

export interface SalonInfoItem {
  storeNo?: number;
  storeName: string;
  content: string;
  phone: string;
  roadAddress: string;
  openingTime: string;
  closingTime: string;
  img: string;
  averageScope: null;
  totalLikeStore: number;
}

interface SalonServerResponse {
  storeDetail: SalonInfoItem;
}

const SalonInfo: React.FC = () => {
  const { isLoading, error, handleRequest, Loading } = useAxios();

  const [salonNumber, setSalonNumber] = useState<SalonNumberItem | null>(null);
  const [salonInfo, setSalonInfo] = useState<SalonInfoItem | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [reservationToastMessage, setReservationToastMessage] = useState("");

  const { storeNo } = useParams<{ storeNo: string }>();

  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    console.log(`미용실을 즐겨찾기에 추가/제거했습니다.`);
  };

  const getSalonNumber = () => {
    handleRequest({
      url: "/api/user/store/allStore",
      method: "GET",
      setData: setSalonNumber,
    });
  };

  const getSalonInfo = () => {
    handleRequest({
      url: `api/user/store/${storeNo}`,
      method: "GET",
      setData: (data: SalonServerResponse) => {
        setSalonInfo(data.storeDetail);
      },
    });

    if (error) {
      return (
        <div className="my-8 px-4">
          <p>데이터를 가져오는 데 실패했습니다. 잠시 후 다시 시도해 주세요.</p>
        </div>
      );
    }
  };

  function formatTime(timeString: string | undefined): string {
    if (!timeString) {
      return "";
    }
    const [hours, minutes] = timeString.split(":").map(Number);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }

  useEffect(() => {
    getSalonNumber();
    getSalonInfo();
  }, [storeNo]);

  const goReservation = () => {
    if (!token) {
      setReservationToastMessage("로그인이 필요합니다.");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
    if (token && salonInfo) {
      navigate(`/reservation/${salonInfo.storeNo}`, {
        state: {
          salonNamefix: salonInfo.storeName,
          salonNumber: salonInfo.storeNo,
        },
      });
    }
  };

  return (
    <div>
      {isLoading && Loading}
      {salonInfo && (
        <>
          <div className="w-full flex items-center gap-2">
            <h2 className="text-black text-xl font-semibold">
              {salonInfo.storeName}
            </h2>
            <FavoriteButton onClick={handleFavoriteClick} />
          </div>
          <ul className="mt-2">
            <li className="flex items-center gap-2 mb-2">
              <img src="/img/salon/icon-phone.svg" alt="" />
              <span>{salonInfo.phone}</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <img src="/img/salon/icon-clock.svg" alt="" />
              <span>
                {formatTime(salonInfo?.openingTime)} -{" "}
                {formatTime(salonInfo?.closingTime)}
              </span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <img src="/img/salon/icon-map.svg" alt="" />
              <span>{salonInfo.roadAddress}</span>
            </li>
            <li className="flex items-start gap-2">
              <img src="/img/salon/icon-talk.svg" alt="" />
              <span>{salonInfo.content}</span>
            </li>
          </ul>
          <div className="my-4">
            <BtnSubmit value="예약" onClick={goReservation} />
          </div>
        </>
      )}
      {reservationToastMessage && (
        <ToastMessage message={reservationToastMessage} />
      )}
    </div>
  );
};

export default SalonInfo;
