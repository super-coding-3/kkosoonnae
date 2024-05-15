import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Signup from "./page/Signup";
import MyPage from "./page/MyPage";
import EditProfile from "./page/EditProfile";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </div>
  );
};

export default App;
