import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useAxios from "../../hooks/useAxios";

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

  // TODO: ERROR 시 뜨는 컴포넌트 구현, 로딩 화면 구현
  const { isLoading, error, handleRequest, Loading } = useAxios();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const getSalonNumber = () => {
    handleRequest({
      url: "/api/user/store/allStore",
      method: "GET",
      setData: setSalonNumber,
    });
  };

  const getSalonInfo = async () => {
    if (storeNo) {
      handleRequest({
        url: `api/user/store/${storeNo}`,
        method: "GET",
        setData: (data: SalonServerResponse) => {
          setSalonInfo(data.storeDetail);
        },
      });
    }
    if (isLoading) {
      return <Loading />;
    }
    if (error) {
      return (
        <div className="my-8 px-4">
          <p>데이터를 가져오는 데 실패했습니다. 잠시 후 다시 시도해 주세요.</p>
        </div>
      );
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
