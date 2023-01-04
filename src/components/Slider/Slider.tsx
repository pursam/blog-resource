import React from "react";
import "./Slider.scss";
import SlideList from "./SlideList";

type Props = {};

const Slider = (props: Props) => {
  return (
    <div className="slider-container">
      <div className="slides-container">
        {/* <img src="" alt="error" /> */}
        <ul>
          {SlideList.map((el, i) => {
            return (
              <li>
                <img src={el.url} alt="slide" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="description-container"></div>
    </div>
  );
};

export default Slider;
