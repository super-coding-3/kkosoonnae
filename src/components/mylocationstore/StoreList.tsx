import React from "react";
import { List, Avatar } from "flowbite-react";
import styled from "styled-components";

const StoreList = () => {
  return (
    <>
    <h1 className="ml-4 text-[25px]">내 주변 매장</h1>
    <ListDiv className="border-solid  bg-slate-400">
    <List
      unstyled
      className="w-[400px] divide-y  divide-gray-200"
    >
      <List.Item >
        <div className="flex items-center space-x-4  rtl:space-x-reverse">
          <Avatar
            img="img/salon/cut1.png"
            alt="Neil image"
            rounded
            size="sm"
            className="ml-2 mb-1 mr-1"
          />
          <div className="min-w-0 flex-1  ">
            <p className="truncate text-[20px] font-medium text-white dark:text-white">
              멋있다 애견미용실
            </p>
            <p className="truncate text-[15px] mt-1 text-white dark:text-gray-400">
              사장님 친절하시고 최고입니다~!
            </p>
          </div>
          <div className=" inline-flex items-center text-base font-bold  text-white dark:text-white">
            평점/4.5
          </div>
        </div>
      </List.Item>
    </List>
    </ListDiv>
    </>
  );
};

export default StoreList;

const ListDiv=styled.div`
    width: 510px;
    height: 70px;
    display: flex;
    flex-direction: column;
    margin-left:16px;
    padding: 10px;
    margin-top: 5px;
    padding-bottom: 5px;
    border-radius: 4px;
    
`
