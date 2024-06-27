import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTER_PATH } from "./constants/constants";
import Main from "./page/Main";
import Salon from "./page/Salon";
import Reservation from "./page/Reservation";
import Signup from "./page/Signup";
import Login from "./page/Login";
import Notice from "./page/Notice";
import MyPage from "./page/MyPage";
import EditProfile from "./page/EditProfile";
import MyLocationStore from "./page/MyLocationStore";
import EditMyPet from "./page/EditMyPet";
import AddMyPet from "./page/AddMyPet";
import MyReservation from "./page/MyReservation";
import MyReservationDetail from "./components/myreservation/MyReservationDetail";
import MyReview from "./page/MyReview";
import MyLikeStore from "./page/MyLikeStore";
import RegisterQnA from "./page/RegisterQnA";
import MyQnA from "./page/MyQnA";

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
      <Route path={ROUTER_PATH.mypage} element={<MyPage />} />
      <Route path={ROUTER_PATH.editProfile} element={<EditProfile />} />
      <Route path={ROUTER_PATH.myLocationStore} element={<MyLocationStore />} />
      <Route path={`${ROUTER_PATH.editMyPet}:petNo`} element={<EditMyPet />} />
      <Route path={ROUTER_PATH.addMyPet} element={<AddMyPet />} />
      <Route path={ROUTER_PATH.myReservation} element={<MyReservation />} />
      <Route
        path={`${ROUTER_PATH.myReservationDetail}:reservationNo`}
        element={<MyReservationDetail />}
      />
      <Route path={ROUTER_PATH.myReview} element={<MyReview />} />
      <Route path={ROUTER_PATH.myLikeStore} element={<MyLikeStore />} />
      <Route path={ROUTER_PATH.registerQnA} element={<RegisterQnA />} />
      <Route path={ROUTER_PATH.myQnA} element={<MyQnA />} />
    </Routes>
  );
};

export default CustomRouter;
