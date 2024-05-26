import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HttpClient from "../../utils/api/customAxios";
import { Carousel } from "flowbite-react";

interface SalonNumberItem {
  storeNo?: number;
  storeName: string;
}

interface SalonInfoItem {
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

function SalonCarousel() {
  const [salonNumber, setSalonNumber] = useState<SalonNumberItem | null>(null);
  const [salonInfo, setSalonInfo] = useState<SalonInfoItem | null>(null);

  const { storeNo } = useParams<{ storeNo: string }>();

  const getSalonNumber = async () => {
    const { data } = await HttpClient.get<SalonNumberItem>(
      "/KkoSoonNae/store/allStore"
    );
    setSalonNumber(data);
    console.log(data, "getSalonNumber");
    return data;
  };

  const getSalonInfo = async () => {
    if (storeNo) {
      const { data } = await HttpClient.get<SalonServerResponse>(
        `KkoSoonNae/store/${storeNo}`
      );
      setSalonInfo(data.storeDetail);
      console.log(data, "getSalonInfo");
    }
  };

  useEffect(() => {
    getSalonNumber();
    getSalonInfo();
  }, [storeNo]);

  return (
    <SalonCarouselWrap>
      <Carousel>{salonInfo && <img src={salonInfo.img} />}</Carousel>
    </SalonCarouselWrap>
  );
}

const SalonCarouselWrap = styled.div`
  height: 180px;
`;

export default SalonCarousel;
