import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Card } from "flowbite-react";
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
  const navigate = useNavigate();

  const getSalonCutStyle = async () => {
    const { data } = await HttpClient.get<CutStyleItem[]>(
      `/KkoSoonNae/store/${storeNo}/pethair`
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
        <CardItem key={index}>
          <Card className="" imgAlt={item.styleName} imgSrc={item.img}>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.styleName}
            </p>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              기본 {item.price}
            </h5>
          </Card>
        </CardItem>
      ))}
    </>
  );
};

const CardItem = styled.div`
  width: 48%;
  > div {
    div {
      padding: 10px;
      gap: 5px;
    }
  }
`;

export default SalonStyleCard;
