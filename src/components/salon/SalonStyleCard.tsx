import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "flowbite-react";
import { RiScissorsFill } from "react-icons/ri";

import HttpClient from "../../utils/api/customAxios";

interface CutStyleItem {
  styleId: number | null;
  styleName: string;
  img: string;
  price: number;
}

const SalonStyleCard: React.FC = () => {
  const [salonCutStyle, setSalonCutStyle] = useState<CutStyleItem[]>([]);
  const { storeNo } = useParams<{ storeNo: string }>();

  const getSalonCutStyle = async () => {
    const { data } = await HttpClient.get<CutStyleItem[]>(
      `/api/user/store/${storeNo}/pethair`
    );
    setSalonCutStyle(data);
    return data;
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
