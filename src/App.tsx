import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Salon from "./page/Salon";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/salon/:id" element={<Salon />} />
      </Routes>
    </div>
  );
};

export default App;
