import "./App.css";
import BoxOne from "./components/BoxOne/BoxOne";
import BoxThree from "./components/BoxThree/BoxThree";
import BoxTwo from "./components/BoxTwo/BoxTwo";

import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Nothing from "./components/Nothing/Nothing";

export default () => {
  return (
    <div className="App">
      {/* <BoxOne />
      <BoxTwo />
      <BoxThree /> */}

      <Routes>
        <Route path="/" element={<BoxOne />} />
        <Route path="/two" element={<BoxTwo />} />
        <Route path="/three/:id" element={<BoxThree />} />
        <Route path="*" element={<Nothing />} />
      </Routes>
    </div>
  );
};
