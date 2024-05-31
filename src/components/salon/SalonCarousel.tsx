import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HttpClient from "../../utils/api/customAxios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const getSalonNumber = async () => {
    const { data } = await HttpClient.get<SalonNumberItem>(
      "/KkoSoonNae/store/allStore"
    );
    setSalonNumber(data);
    return data;
  };

  const getSalonInfo = async () => {
    if (storeNo) {
      const { data } = await HttpClient.get<SalonServerResponse>(
        `KkoSoonNae/store/${storeNo}`
      );
      setSalonInfo(data.storeDetail);
    }
  };

  useEffect(() => {
    getSalonNumber();
    getSalonInfo();
  }, [storeNo]);

  return (
    <div>
      <Slider {...settings} className="salon-slick h-64 w-full">
        {salonInfo?.img?.[0] && (
          <img src={salonInfo.img[0]} alt="" className="h-full" />
        )}
        {salonInfo?.img?.[1] && (
          <img src={salonInfo.img[1]} alt="" className="h-full" />
        )}
      </Slider>
    </div>
  );
}

export default SalonCarousel;
