import { useState, useEffect } from "react";
import { fetchStores, Store } from "../components/mylocationstore/LocationApi";

import React from "react";
import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";
import KakaoMap from "../components/mylocationstore/KakaoMap";
import StoreList from "../components/mylocationstore/StoreList";
import StyleSlider from "../components/mylocationstore/StyleSlider";


const MyLocationStore: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const initialLat = 37.4995;
  const initialLon = 127.0332;

  useEffect(() => {
    const fetchInitialStores = async () => {
      const stores = await fetchStores(initialLat, initialLon);
      setStores(stores);
    };

    fetchInitialStores();
  }, []);

  return (
    <OuterLayout>
    <div className="max-w-[640px] w-full min-w-[375px] px-4 overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md w-full max-w-[640px] mx-auto">
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
    </div>
  </OuterLayout>
  );
};

export default MyLocationStore;
