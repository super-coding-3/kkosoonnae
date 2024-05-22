import React from "react";
import { BrowserRouter } from "react-router-dom";
import CustomRouter from "./CustomRouter";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
