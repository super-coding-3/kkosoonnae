import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTER_PATH } from "./constants/constants";
import Main from "./page/Main";
import Salon from "./page/Salon";
import Reservation from "./page/Reservation";
import Signup from "./page/auth/Signup";
import Login from "./page/auth/Login";
import Notice from "./page/Notice";
import MyPage from "./page/mypage/MyPage";
import EditProfile from "./page/mypage/EditProfile";
import MyLocationStore from "./page/mylocationstore/MyLocationStore";
import EditMyPet from "./page/mypage/EditMyPet";
import AddMyPet from "./page/mypage/AddMyPet";
import MyReservation from "./page/mypage/MyReservation";
import MyReservationDetail from "./components/myreservation/MyReservationDetail";
import MyReview from "./page/mypage/MyReview";
import MyLikeStore from "./page/mypage/MyLikeStore";
import RegisterQnA from "./page/mypage/RegisterQnA";
import MyQnA from "./page/mypage/MyQnA";
import { checkLogin } from "./utils/checkLogin";

const CustomRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTER_PATH.main} element={<Main />} />
      <Route path={`${ROUTER_PATH.salon}:storeNo`} element={<Salon />} />
      <Route
        path={`${ROUTER_PATH.reservation}:storeNo`}
        element={<Reservation />}
      />
      <Route path={ROUTER_PATH.signup} element={<Signup />} />
      <Route path={ROUTER_PATH.login} element={<Login />} />
      <Route path={ROUTER_PATH.notice} element={<Notice />} />
      <Route path={ROUTER_PATH.myLocationStore} element={<MyLocationStore />} />
      <Route
        path={ROUTER_PATH.mypage}
        element={checkLogin() ? <MyPage /> : <Login />}
      />
      <Route
        path={ROUTER_PATH.editProfile}
        element={checkLogin() ? <EditProfile /> : <Login />}
      />
      <Route
        path={`${ROUTER_PATH.editMyPet}:petNo`}
        element={checkLogin() ? <EditMyPet /> : <Login />}
      />
      <Route
        path={ROUTER_PATH.addMyPet}
        element={checkLogin() ? <AddMyPet /> : <Login />}
      />
      <Route
        path={ROUTER_PATH.myReservation}
        element={checkLogin() ? <MyReservation /> : <Login />}
      />
      <Route
        path={`${ROUTER_PATH.myReservationDetail}:reservationNo`}
        element={checkLogin() ? <MyReservationDetail /> : <Login />}
      />
      <Route
        path={ROUTER_PATH.myReview}
        element={checkLogin() ? <MyReview /> : <Login />}
      />
      <Route
        path={ROUTER_PATH.myLikeStore}
        element={checkLogin() ? <MyLikeStore /> : <Login />}
      />
      <Route
        path={ROUTER_PATH.registerQnA}
        element={checkLogin() ? <RegisterQnA /> : <Login />}
      />
      <Route
        path={ROUTER_PATH.myQnA}
        element={checkLogin() ? <MyQnA /> : <Login />}
      />
    </Routes>
  );
};

export default CustomRouter;
