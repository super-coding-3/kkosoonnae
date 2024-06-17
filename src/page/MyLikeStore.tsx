import React, { useEffect, useState } from "react";

import OuterLayout from "../components/common/OuterLayout";
import PageTitle from "../components/common/PageTitle";
import Nav from "../components/common/Nav";
import MyLikeStoreCard from "../components/mylikestore/MyLikeStoreCard";
import PageNothing from "../components/common/PageNothing";
import ModalDelete from "../components/common/ModalDelete";
import ToastMessage from "../components/common/ToastMessage";
import useAxios from "../hooks/useAxios";
import { Spinner } from "flowbite-react";

interface MyLikeStoreType {
  likeNo: number;
  storeNo: number;
  storeImg: string;
  storeName: string;
  scope: number;
  totalLikeCount: number;
  roadAddress: string;
  openTime: string;
  closeTime: string;
}

const MyLikeStore: React.FC = () => {
  const [myLikeStore, setMyLikeStore] = useState<MyLikeStoreType[]>([]);
  const [showToastMessage, setShowToastMessage] = useState<boolean>(false);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [likeNo, setLikeNo] = useState<number>(0);

  // TODO: ERROR 시 뜨는 컴포넌트 구현
  const { isLoading, error, handleRequest } = useAxios();

  const deleteMyLikeStore = async (likeNo: number) => {
    handleRequest({
      url: `/api/user/mypage/like-cancel/${likeNo}`,
      method: "DELETE",
    });
    setShowModalDelete(false);
    setShowToastMessage(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handlerLikeStoreCancel = (likeNo: number) => {
    setLikeNo(likeNo);
    setShowModalDelete(true);
  };

  useEffect(() => {
    handleRequest({
      url: "/api/user/mypage/like-store",
      method: "GET",
      setData: setMyLikeStore,
    });
  }, []);

  return (
    <OuterLayout>
      <PageTitle title="관심매장" leftBtn={true} />
      <div className="pt-4 pb-24 px-4">
        {isLoading ? (
          // TODO: 로딩 화면 변경
          <Spinner aria-label="Extra large spinner example" size="xl" />
        ) : myLikeStore.length === 0 ? (
          <PageNothing message="관심매장이 없습니다" />
        ) : (
          myLikeStore.map((item: MyLikeStoreType) => (
            <MyLikeStoreCard
              key={item.likeNo}
              storeNo={item.storeNo}
              storeImg={item.storeImg}
              storeName={item.storeName}
              scope={item.scope}
              totalLikeCount={item.totalLikeCount}
              roadAddress={item.roadAddress}
              openTime={item.openTime}
              closeTime={item.closeTime}
              onClick={() => {
                handlerLikeStoreCancel(item.likeNo);
              }}
            />
          ))
        )}
        <ModalDelete
          showModalDelete={showModalDelete}
          setShowModalDelete={setShowModalDelete}
          onClick={() => {
            deleteMyLikeStore(likeNo);
          }}
          description="선택한 관심매장을 삭제하시겠습니까?"
          delBtnValue="삭제"
          cancelBtnValue="취소"
        />
        {showToastMessage && (
          <ToastMessage message="관심매장이 삭제되었습니다" />
        )}
      </div>
      <Nav />
    </OuterLayout>
  );
};

export default MyLikeStore;
