import Main from "../page/Main";
import Salon from "../page/Salon";
import Reservation from "../page/Reservation";
import Signup from "../page/Signup";
import MyPage from "../page/MyPage";
import EditProfile from "../page/EditProfile";
import MyLocationStore from "../page/MyLocationStore";
import EditMyPet from "../page/EditMyPet";
import AddMyPet from "../page/AddMyPet";
import MyReservation from "../page/MyReservation";
import MyReview from "../page/MyReview";
import Notice from "../page/Notice";
import MyLikeStore from "../page/MyLikeStore";
import RegisterQnA from "../page/RegisterQnA";
import MyQnA from "../page/MyQnA";
import Login from "../page/Login";

export const ROUTER_INFOS = [
  { path: "/", element: <Main /> },
  { path: "/salon/:storeNo", element: <Salon /> },
  { path: "/reservation/:storeNo", element: <Reservation /> },
  { path: "/signup", element: <Signup /> },
  { path: "/notice", element: <Notice /> },
  { path: "/login", element: <Login /> },
  { path: "/mypage", element: <MyPage /> },
  { path: "/editprofile", element: <EditProfile /> },
  { path: "/mylocationStore", element: <MyLocationStore /> },
  { path: "/editmykkosoonae/:petNo", element: <EditMyPet /> },
  { path: "/addmykkosoonae", element: <AddMyPet /> },
  { path: "/myreservation", element: <MyReservation /> },
  { path: "/myreview", element: <MyReview /> },
  { path: "/mylikestore", element: <MyLikeStore /> },
  { path: "/registerqna", element: <RegisterQnA /> },
  { path: "/myqna", element: <MyQnA /> },
  { path: "/login", element: <Login /> },
];
