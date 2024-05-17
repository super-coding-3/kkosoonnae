import React from "react";
import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Nav from "../components/common/Nav";
import MyLikeStoreCard from "../components/mylikestore/MyLikeStoreCard";

const MyLikeStore: React.FC = () => {
  return (
    <OuterLayout>
      <PageTitle title="관심매장" />
      <div className="mt-5 pb-24 mx-5">
        <MyLikeStoreCard
          store_img="/img/common/icon-dog_star.svg"
          store_name="꼬순이네"
          store_scope="5"
          store_likeit="12"
          store_addr="00시 00구 00동"
          stroe_order_dt="09:00 - 18:00"
        />
        <MyLikeStoreCard
          store_img="/img/common/icon-dog_star.svg"
          store_name="꼬순이네"
          store_scope="5"
          store_likeit="12"
          store_addr="00시 00구 00동"
          stroe_order_dt="09:00 - 18:00"
        />
        <MyLikeStoreCard
          store_img="/img/common/icon-dog_star.svg"
          store_name="꼬순이네"
          store_scope="5"
          store_likeit="12"
          store_addr="00시 00구 00동"
          stroe_order_dt="09:00 - 18:00"
        />
      </div>
      <Nav />
    </OuterLayout>
  );
};

export default MyLikeStore;
