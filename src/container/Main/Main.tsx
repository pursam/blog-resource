import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";

import "./Main.scss";

type Props = {};

const Main = (props: Props) => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/article" element={} />
        <Route path="/contacts" element={} />
        <Route path="/about" element={} />
        <Route path="/favorite" element={} /> */}
      </Routes>
    </main>
  );
};

export default Main;
