import React from "react";
import Slider from "components/Slider/Slider";
import "./Main.scss";

type Props = {};

const Main = (props: Props) => {
  return (
    <main>
      <Slider />
      <div className="divider" />
      <div>particles cards</div>
    </main>
  );
};

export default Main;
