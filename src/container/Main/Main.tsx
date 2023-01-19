import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Articles from "../../pages/Articles/Articles";

import "./Main.scss";
import Travel from "pages/Travel/Travel";
import Photography from "pages/Photography/Photography";
import People from "pages/People/People";
import Lifestyle from "pages/Lifestyle/Lifestyle";

type Props = {};

const Main = ({ setLikes }: Props) => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home setLikes={setLikes} />} />
        <Route path="articles" element={<Articles setLikes={setLikes} />} />
        <Route path="travel" element={<Travel setLikes={setLikes} />} />
        <Route
          path="photography"
          element={<Photography setLikes={setLikes} />}
        />
        <Route path="people" element={<People setLikes={setLikes} />} />
        <Route path="lifestyle" element={<Lifestyle setLikes={setLikes} />} />
        {/* <Route path="/contacts" element={} />
        <Route path="/about" element={} />
        <Route path="/favorite" element={} /> */}
      </Routes>
    </main>
  );
};

export default Main;
