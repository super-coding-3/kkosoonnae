import React from "react";

import { useState, useEffect } from "react";

import OuterLayout from "../../components/common/OuterLayout";
import PageTitle from "../../components/common/PageTitle";
import Footer from "../../components/common/Footer";
import Nav from "../../components/common/Nav";
import KakaoMap from "../../components/mylocationstore/KakaoMap";
import StoreList from "../../components/mylocationstore/StoreList";
import StyleSlider from "../../components/mylocationstore/StyleSlider";
import useAxios from "../../hooks/useAxios";
import useToastMessage from "../../hooks/useToastMessage";

export interface Store {
  storeNo: number;
  storeName: string;
  content: string;
  phone: string;
  roadAddress: string;
  lat: number;
  lon: number;
  openingTime: string;
  closingTime: string;
  petImg: string[];
  style: {
    styleId: number;
    styleName: string;
    img: string;
    price: number;
  }[];
  averageReviewScore: number;
  latestReviewMessage: string;
}

const MyLocationStore: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const { error, handleRequest, Loading } = useAxios();
  const { showToast, Toast } = useToastMessage();
  const initialLat = 37.4995;
  const initialLon = 127.0332;

  useEffect(() => {
    handleRequest({
      url: `/api/user/store/nearby?lat=${initialLat}&lon=${initialLon}`,
      method: "GET",
      body: { initialLat, initialLon },
      setData: setStores,
    });
    if (error) {
      showToast({
        message: "오류가 발생했습니다. 잠시 후 다시 실행해주세요",
      });
    }
  }, []);

  return (
    <OuterLayout>
      <div className="max-w-[640px] w-full min-w-[375px] px-4 overflow-x-hidden">
        {Loading}
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md w-full max-w-[640px] mx-auto z-50">
          <PageTitle title="내 주변 미용실" />
        </header>
        <div className="flex-1  pt-20 pb-20">
          <KakaoMap stores={stores} />
          <StoreList stores={stores} />
          <StyleSlider stores={stores} />
          <Footer />
        </div>
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md p-4 max-w-[640px] mx-auto">
          <Nav />
        </nav>
        <Toast />
      </div>
    </OuterLayout>
  );
};

export default MyLocationStore;
