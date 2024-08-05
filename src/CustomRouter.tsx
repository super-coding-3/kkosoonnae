import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "./constants/constants";
import Main from "./page/main/Main";
import Salon from "./page/salon/Salon";
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
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(checkLogin());
  }, [navigate]);

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
        element={isLoggedIn ? <MyPage /> : <Login />}
      />
      <Route
        path={ROUTER_PATH.editProfile}
        element={isLoggedIn ? <EditProfile /> : <Login />}
      />
      <Route
        path={`${ROUTER_PATH.editMyPet}:petNo`}
        element={isLoggedIn ? <EditMyPet /> : <Login />}
      />
      <Route
        path={ROUTER_PATH.addMyPet}
        element={isLoggedIn ? <AddMyPet /> : <Login />}
      />
      <Route
        path={ROUTER_PATH.myReservation}
        element={isLoggedIn ? <MyReservation /> : <Login />}
      />
      <Route
        path={`${ROUTER_PATH.myReservationDetail}:reservationNo`}
        element={isLoggedIn ? <MyReservationDetail /> : <Login />}
      />
      <Route
        path={ROUTER_PATH.myReview}
        element={isLoggedIn ? <MyReview /> : <Login />}
      />
      <Route
        path={ROUTER_PATH.myLikeStore}
        element={isLoggedIn ? <MyLikeStore /> : <Login />}
      />
      <Route
        path={ROUTER_PATH.registerQnA}
        element={isLoggedIn ? <RegisterQnA /> : <Login />}
      />
      <Route
        path={ROUTER_PATH.myQnA}
        element={isLoggedIn ? <MyQnA /> : <Login />}
      />
    </Routes>
  );
};

export default CustomRouter;
