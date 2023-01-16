import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Articles from "../../pages/Articles/Articles";

import "./Main.scss";

type Props = {};

const Main = (props: Props) => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        {/* <Route path="/contacts" element={} />
        <Route path="/about" element={} />
        <Route path="/favorite" element={} /> */}
      </Routes>
    </main>
  );
};

export default Main;
