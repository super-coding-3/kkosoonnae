import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Signup from "./page/Signup";
import MyPage from "./page/MyPage";
import EditProfile from "./page/EditProfile";
import EditMyKkosoonnae from "./page/EditMyKkosoonnae";
import AddMyKkosoonnae from "./page/AddMyKkosoonnae";
import MyReservation from "./page/MyReservation";
import MyReview from "./page/MyReview";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/editmykkosoonae" element={<EditMyKkosoonnae />} />
        <Route path="/addmykkosoonae" element={<AddMyKkosoonnae />} />
        <Route path="/myreservation" element={<MyReservation />} />
        <Route path="/myreview" element={<MyReview />} />
      </Routes>
    </div>
  );
};

export default App;
