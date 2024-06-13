import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import FavoriteButton from "./FavoriteButton";
import HttpClient from "../../utils/api/customAxios";
import ToastMessage from "../common/ToastMessage";

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

  const getSalonNumber = async () => {
    const { data } = await HttpClient.get<SalonNumberItem>(
      "/api/store/allStore"
    );
    setSalonNumber(data);
    return data;
  };

  const getSalonInfo = async () => {
    if (storeNo) {
      const { data } = await HttpClient.get<SalonServerResponse>(
        `api/store/${storeNo}`
      );
      setSalonInfo(data.storeDetail);
    }
  };

  function formatTime(timeString: string): string {
    const [hours, minutes, seconds] = timeString.split(":").map(Number);
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
                {formatTime(salonInfo.openingTime)} -{" "}
                {formatTime(salonInfo.closingTime)}
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
          <BtnReservation className="my-4" onClick={goReservation}>
            예약
          </BtnReservation>
        </>
      )}
      {reservationToastMessage && (
        <ToastMessage message={reservationToastMessage} />
      )}
    </div>
  );
};

const BtnReservation = styled.button`
  width: 100%;
  height: 44px;
  color: #fff;
  background: #492d28;
`;

export default SalonInfo;
