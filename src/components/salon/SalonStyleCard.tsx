import React from "react";
import styled from "styled-components";
import { Card } from "flowbite-react";

const SalonStyleCard: React.FC = () => {
  const cutStyleData = [
    {
      id: 1,
      imgUrl: "/img/salon/cut1.png",
      cutTitle: "가위-곰돌이컷",
      cutPrice: "45000원~",
    },
    {
      id: 2,
      imgUrl: "/img/salon/cut2.png",
      cutTitle: "진도컷",
      cutPrice: "45000원~",
    },
    {
      id: 3,
      imgUrl: "/img/salon/cut3.png",
      cutTitle: "가위-양컷",
      cutPrice: "55000원~",
    },
    {
      id: 4,
      imgUrl: "/img/salon/cut4.png",
      cutTitle: "스타일문의",
      cutPrice: "65000원~",
    },
  ];
  return (
    <>
      {cutStyleData.map((item) => (
        <CardItem>
          <Card
            key={item.id}
            className=""
            imgAlt={item.cutTitle}
            imgSrc={item.imgUrl}
          >
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.cutTitle}
            </p>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              기본 {item.cutPrice}
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
