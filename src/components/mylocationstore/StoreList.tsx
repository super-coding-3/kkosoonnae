import React from "react";

import { List, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";


interface Store {
  storeNo: number;
  storeName: string;
  latestReviewMessage: string;
  averageReviewScore: number;
}

interface StoreListProps {
  stores: Store[];
}

const StoreList: React.FC<StoreListProps> = ({ stores }) => {
  return (
    <>
      <h1 className="text-xl mb-4 mt-4 font-semibold">내 주변 매장 최근 리뷰</h1>
      <List style={{ listStyleType: 'none'}} className="w-full divide-y divide-gray-200 bg-white rounded-lg">
        {stores.map((store) => (
          <List.Item key={store.storeNo} className="py-2">
            <div className="flex items-center space-x-4">
              <Avatar
                img="/img/common/icon-dog_haircut.svg"
                alt={`${store.storeName} image`}
                rounded
                size="lg"
                className="w-14 h-14"
              />
              <div className="ml-4 flex-1 min-w-0">
                <p className="text-lg font-semibold">
                  <Link to={`/salon/${store.storeNo}`}>{store.storeName}</Link>
                </p>
                <div className="text-sm mt-1 text-gray-600 truncate">
                  <span className="font-semibold mb-1 block">매장 내 최근 리뷰</span>
                  <span className="mt-2 text-[14px] font-semibold block whitespace-normal">"{store.latestReviewMessage}"</span>
                </div>
              </div>
              <div className="flex items-center text-base font-bold text-gray-700 flex-shrink-0 whitespace-nowrap">
                <img src="/img/common/icon-star.svg" className="w-4 h-4" />
                {store.averageReviewScore}점
              </div>
            </div>
          </List.Item>
        ))}
      
      </List>
    </>
  );
};

export default StoreList;
