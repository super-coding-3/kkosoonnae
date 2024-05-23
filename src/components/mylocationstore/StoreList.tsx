import { List, Avatar } from "flowbite-react";
import styled from "styled-components";
import { Store } from "./LocationApi";
import React from "react";

interface StoreListProps {
  stores: Store[];
}

const StoreList:React.FC<StoreListProps> = ({stores}) => {
  return (
    <>
    <h1 className="text-[20px] mb-4 mt-4 ml-2">내 주변매장 최근 리뷰</h1>
      <List
        unstyled
        className="max-w-md divide-y divide-gray-200  dark:divide-gray-700"
      >
          {stores.map((store) => (
            <List.Item key={store.storeNo} className="text-[16px]">
              <div className="flex">
                <Avatar
                  img={store.storeImg[0]}
                  alt={`${store.storeName} image`}
                  rounded
                  size="sm"
                  className="ml-4 mr-10"
                />
                <div>
                  <p className="text-[20px] font-medium dark:text-white">
                    {store.storeName}
                  </p>
                  <p className="truncate text-[15px] dark:text-gray-400">
                    {store.content}
                  </p>
                </div>
                <div className="text-base font-bold mt-4 ml-20 dark:text-white">
                  평점/4.5
                </div>
              </div>
            </List.Item>
          ))}
        {/* <List.Item className="pb-3 sm:pb-4">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Avatar
              img="/img/salon/cut1.png"
              alt="Neil image"
              rounded
              size="lg"
              className="ml-4 mr-2 mt-4"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[20px] mt-2 mb-1 font-medium text-gray-900 dark:text-white">
                멋있는강아지스타일컷
              </p>
              <p className="truncate text-sm text-gray-500  dark:text-gray-400">
                친절하게 잘 해주십니다~! 최고!!
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold mt-1  text-gray-900 dark:text-white">
              평점:4.5점
            </div>
          </div>
        </List.Item>
        <List.Item className="pb-3 sm:pb-4">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Avatar
              img="/img/salon/cut1.png"
              alt="Neil image"
              rounded
              size="lg"
              className="ml-4 mr-2 mt-4"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[20px] mt-2 mb-1 font-medium text-gray-900 dark:text-white">
                멋있는강아지스타일컷
              </p>
              <p className="truncate text-sm text-gray-500  dark:text-gray-400">
                친절하게 잘 해주십니다~! 최고!!
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold mt-1  text-gray-900 dark:text-white">
              평점:4.5점
            </div>
          </div>
        </List.Item> */}
      </List>
    </>
  );
};

export default StoreList;

const ListDiv = styled.div`
  width: 500px;
  height: 70px;
  padding: 10px;
  margin-top: 5px;
  padding-bottom: 5px;
  border-radius: 4px;
`;
