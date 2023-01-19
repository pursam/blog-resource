import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Articles from "../../pages/Articles/Articles";

import "./Main.scss";
import Travel from "pages/Travel/Travel";
import Photography from "pages/Photography/Photography";
import People from "pages/People/People";
import Lifestyle from "pages/Lifestyle/Lifestyle";
import Favorite from "pages/Favorite/Favorite";

type Props = {};

const Main = ({}: Props) => {
  const user = {
    favorite: ["5", "8", "11"],
  };
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="articles" element={<Articles />} />
        <Route path="travel" element={<Travel />} />
        <Route path="photography" element={<Photography />} />
        <Route path="people" element={<People />} />
        <Route path="lifestyle" element={<Lifestyle />} />
        {/* <Route path="/contacts" element={} />
        <Route path="/about" element={} />*/}
        <Route path="/favorite" element={<Favorite user={user} />} />
      </Routes>
    </main>
  );
};

export default Main;
