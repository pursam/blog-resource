import React from "react";
import Slider from "components/Slider/Slider";
import ParticleCards from "components/ParticleCards/ParticleCards";

import "./Main.scss";

type Props = {};

const Main = (props: Props) => {
  return (
    <main>
      <Slider />
      <div className="divider" />
      <ParticleCards />
    </main>
  );
};

export default Main;
