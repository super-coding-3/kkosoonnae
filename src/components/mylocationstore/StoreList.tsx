import { List, Avatar } from "flowbite-react";
import { Store } from "./LocationApi";
import { Link } from "react-router-dom";


import React from "react";

interface StoreListProps {
  stores: Store[];
}

const StoreList: React.FC<StoreListProps> = ({ stores }) => {
  return (
    <>
      <h1 className="text-xl mb-4 mt-4 font-semibold">내 주변 매장 최근 리뷰</h1>
      <List className="w-full divide-y divide-gray-200 bg-white rounded-lg">
        {stores.map((store) => (
          <List.Item key={store.storeNo} className="py-2">
            <div className="flex items-center space-x-4">
              <Avatar
                img="/img/common/icon-dog_haircut.svg"
                alt={`${store.storeName} image`}
                rounded
                size="sm"
                className="w-13 h-13"
              />
              <div className="ml-4 flex-1">
                <p className="text-lg font-semibold">
                  <Link to={`/salon/${store.storeNo}`}>{store.storeName}</Link>
                </p>
                <p className="text-sm mt-1 text-gray-600 truncate">
                  <span className="font-semibold mb-1">매장 내 최근 리뷰</span>
                  "{store.latestReviewMessage}"
                </p>
              </div>
              <div className="flex items-center text-base font-bold text-gray-700">
                <img src="/img/common/icon-star.svg" className="w-4 h-4 mr-1" />
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