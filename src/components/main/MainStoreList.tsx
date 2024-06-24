import React, { useState, useEffect } from "react";
import { Avatar } from "flowbite-react";
import { Link } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { FaStar, FaRegHeart } from "react-icons/fa";

import useAxios from "../../hooks/useAxios";

interface MainStoreItem {
  storeNo: number;
  storeName: string;
  roadAddress: string;
  averageScope: null;
  totalLikeStore: null;
}

const MainStoreList: React.FC = () => {
  const [mainStoreData, setMainStoreData] = useState<MainStoreItem[]>([]);

  // TODO: ERROR 시 뜨는 컴포넌트 구현, 로딩 화면 구현
  const { isLoading, error, handleRequest, Loading } = useAxios();

  useEffect(() => {
    handleRequest({
      url: "api/user/search/main-stores/%EA%B0%95%EB%82%A8%EA%B5%AC",
      method: "GET",
      setData: setMainStoreData,
    });
  }, []);

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

  return (
    <div className="my-8 px-4 ">
      <h2 className="mt-4 flex items-center gap-2 text-xl">
        <LuMapPin />
        서울시 강남구
      </h2>
      <ul className="flex flex-col gap-1">
        {mainStoreData.map((item, index) => (
          <li key={index} className="border-b-2 border-gray-200 py-2 px-2">
            <Link
              to={`/salon/${item.storeNo}`}
              className="flex items-center justify-start gap-3"
            >
              <Avatar
                img="/img/common/icon-dog_star.svg"
                alt="매장 샘플이미지"
                rounded
              />
              <p className="">
                <strong className="flex gap-2 text-MAIN_COLOR text-normal">
                  {item.storeName}
                  <span className="flex text-xs items-center gap-1  text-MAIN_LIGHT_COLOR">
                    <FaStar /> 총점{item.averageScope}
                  </span>
                  <span className="flex text-xs items-center gap-1  text-MAIN_LIGHT_COLOR">
                    <FaRegHeart /> 관심수{item.totalLikeStore}
                  </span>
                </strong>
                <span className="text-gray-500 text-xs">
                  {item.roadAddress}
                </span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainStoreList;
