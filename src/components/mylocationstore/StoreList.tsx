import { List, Avatar } from "flowbite-react";
import { Store } from "./LocationApi";
import React from "react";

interface StoreListProps {
  stores: Store[];
}

const StoreList: React.FC<StoreListProps> = ({ stores }) => {
  return (
    <>
      <h1 className="text-xl mb-4 mt-4 ml-2 font-semibold">내 주변매장 최근 리뷰</h1>
      <List
        unstyled
        className="max-w-[520px] divide-y  divide-gray-200 dark:divide-gray-700 bg-white rounded-lg p-4"
      >
        {stores.map((store) => (
          <List.Item key={store.storeNo} className="mx-2 py-2">
            <div className="flex items-center space-x-4">
              <Avatar
                img={store.storeImg[0]}
                alt={`${store.storeName} image`}
                rounded
                size="sm"
                className="w-12 h-12"
              />
             <div className="ml-4 flex-1">
                <p className="text-lg font-semibold dark:text-white">
                  {store.storeName}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                  {store.latestReviewMessage}
                </p>
              </div>
              <div className="flex items-center text-base font-bold text-gray-700 dark:text-white">
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
