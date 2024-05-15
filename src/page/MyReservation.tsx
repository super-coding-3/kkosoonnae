import React from "react";
import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Nav from "../components/common/Nav";
import MyReservationCard from "../components/myreservation/MyReservationCard";

const MyReservation: React.FC = () => {
  return (
    <OuterLayout>
      <PageTitle title="예약내역" />
      <div className="mt-5 mb-24 mx-5">
        <MyReservationCard
          date="2024.05.09 (목)"
          time="오전 11시"
          status="예약완료"
          store_img="/img/common/icon-dog_haircut.svg"
          store_name="꼬순이네"
          style="곰돌이컷"
          price="20,000원"
        />
        <MyReservationCard
          date="2024.05.09 (목)"
          time="오전 11시"
          status="예약완료"
          store_img="/img/common/icon-dog_haircut.svg"
          store_name="꼬순이네"
          style="곰돌이컷"
          price="20,000원"
        />
        <MyReservationCard
          date="2024.05.09 (목)"
          time="오전 11시"
          status="예약완료"
          store_img="/img/common/icon-dog_haircut.svg"
          store_name="꼬순이네"
          style="곰돌이컷"
          price="20,000원"
        />
      </div>
      <Nav />
    </OuterLayout>
  );
};

export default MyReservation;
