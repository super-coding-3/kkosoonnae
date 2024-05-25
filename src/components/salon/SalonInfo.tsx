import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import HttpClient from "../../utils/api/customAxios";

interface Salon {
  id?: number;
  name: string;
  phone: string;
  time: string;
  address: string;
  description: string;
}

const SalonInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const salonId = id ? parseInt(id) : undefined;

  const salonData: Salon[] = [
    {
      id: 1,
      name: "쁘띠멍",
      phone: "02-1234-4566",
      time: "09:00 ~ 18:00",
      address: "서울시 강남구 강남대로 123",
      description:
        "강아지 미용 전문점 쁘띠멍입니다. 20년 경력의 숙련된 미용사가 강아지의 건강과 아름다움을 선사합니다.",
    },
    {
      id: 2,
      name: "멍멍이 살롱",
      phone: "02-2345-6789",
      time: "09:00 ~ 18:00",
      address: "서울시 서초구 서초대로 456",
      description:
        "반려견의 미용은 단순히 예쁘게 꾸미는 것이 아닌, 건강관리의 일부라고 생각합니다. 멍멍이 살롱은 반려견의 피부와 털 건강을 최우선으로 생각하며, 개별 맞춤 케어를 제공합니다.",
    },
  ];

  const salon = salonData.find((item) => item.id === salonId);

  if (!salon) {
    return <div>해당 미용실을 찾을 수 없습니다.</div>;
  }

  const handleFavoriteClick = () => {
    console.log(`${salon.name} 미용실을 즐겨찾기에 추가/제거했습니다.`);
  };

  const getSalonNumber = async (storeNo: number) => {
    const res = await HttpClient.get(
      `/KkoSoonNae/reservation/store-name/${storeNo}`
    );
    return res.data;
  };

  const goReservation = () => {
    getSalonNumber();
    if (salonId && salon.name) {
      navigate(`/reservation/${salonId}`, {
        state: { salonNamefix: salon.name },
      });
    }
  };

  return (
    <div>
      <div className="w-full flex items-center gap-2">
        <h2 className="text-black text-xl font-semibold">{salon.name}</h2>
        <FavoriteButton onClick={handleFavoriteClick} />
      </div>
      <ul className="mt-2">
        <li className="flex items-center gap-2 mb-2">
          <img src="/img/salon/icon-phone.svg" alt="" />
          <span>{salon.phone}</span>
        </li>
        <li className="flex items-center gap-2 mb-2">
          <img src="/img/salon/icon-clock.svg" alt="" />
          <span>{salon.time}</span>
        </li>
        <li className="flex items-center gap-2 mb-2">
          <img src="/img/salon/icon-map.svg" alt="" />
          <span>{salon.address}</span>
        </li>
        <li className="flex items-start gap-2">
          <img src="/img/salon/icon-talk.svg" alt="" />
          <span>{salon.description}</span>
        </li>
      </ul>
      <BtnReservation className="my-4" onClick={goReservation}>
        예약
      </BtnReservation>
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
