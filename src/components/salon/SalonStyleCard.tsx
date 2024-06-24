import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "flowbite-react";
import { RiScissorsFill } from "react-icons/ri";

import useAxios from "../../hooks/useAxios";

interface CutStyleItem {
  styleId: number | null;
  styleName: string;
  img: string;
  price: number;
}

const SalonStyleCard: React.FC = () => {
  const [salonCutStyle, setSalonCutStyle] = useState<CutStyleItem[]>([]);
  const { storeNo } = useParams<{ storeNo: string }>();

  // TODO: ERROR 시 뜨는 컴포넌트 구현, 로딩 화면 구현
  const { isLoading, error, handleRequest, Loading } = useAxios();

  const getSalonCutStyle = () => {
    handleRequest({
      url: `/api/user/store/${storeNo}/pethair`,
      method: "GET",
      setData: setSalonCutStyle,
    });

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
    getSalonCutStyle();
  }, [storeNo]);

  return (
    <>
      {salonCutStyle.map((item, index) => (
        <div className="style-card-item" key={index}>
          <Card imgAlt={item.styleName} imgSrc={item.img}>
            <p className="font-normal text-gray-700 dark:text-gray-400 flex items-center gap-1">
              {item.styleName} <RiScissorsFill />
            </p>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1">
              <p className="text-xs">기본</p>
              {item.price}원 ~
            </h5>
          </Card>
        </div>
      ))}
    </>
  );
};

export default SalonStyleCard;
