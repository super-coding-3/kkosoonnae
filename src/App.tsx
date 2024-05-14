import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Signup from "./page/Signup";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
};

export default App;
