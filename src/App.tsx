import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Salon from "./page/Salon";
import Signup from "./page/Signup";
import MyPage from "./page/MyPage";
import EditProfile from "./page/EditProfile";
import MyLocationStore from "./page/MyLocationStore";
import EditMyKkosoonnae from "./page/EditMyKkosoonnae";
import AddMyKkosoonnae from "./page/AddMyKkosoonnae";
import MyReservation from "./page/MyReservation";
import MyReview from "./page/MyReview";
import Login from "./page/Login";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/salon/:id" element={<Salon />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/mylocationStore" element={<MyLocationStore/>}/>
        <Route path="/editmykkosoonae" element={<EditMyKkosoonnae />} />
        <Route path="/addmykkosoonae" element={<AddMyKkosoonnae />} />
        <Route path="/myreservation" element={<MyReservation />} />
        <Route path="/myreview" element={<MyReview />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
