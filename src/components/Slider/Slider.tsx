import React from "react";
import { Box } from "@mui/material";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
// import slides from "./SlideData";
import articles from "pages/Articles/ArticlesData";
import "./Slider.scss";
import { Link } from "react-router-dom";

type Props = {};

const Slider = (props: Props) => {
  const [curr, setCurr] = React.useState(0);

  const goToNext = () => {
    setCurr(curr === 4 - 1 ? 0 : curr + 1);
  };

  const goToPrev = () => {
    setCurr(curr === 0 ? 4 - 1 : curr - 1);
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(goToNext, 5000);
    return function () {
      clearTimeout(timeoutId);
    };
  });

  return (
    <Box className="slider">
      <div className="slider__overlay" />
      <Box className="buttons">
        <FaArrowAltCircleLeft
          className="arrow arrow--left"
          onClick={goToPrev}
        />
        <FaArrowAltCircleRight
          className="arrow arrow--right"
          onClick={goToNext}
        />
      </Box>
      {articles.map((s, i) => (
        <React.Fragment key={i}>
          <div className={i === curr ? "slide active" : "slide"}>
            <img className="image" src={s.image} alt="slide" />
          </div>
          <div className={i === curr ? "article active" : "article"}>
            <div className="article__tagname">
              <Link to={"/" + s.tags} className="article__tagname-link">
                {s.tags}
              </Link>
            </div>
            <h1 className="article__name">{s.name}</h1>
            <div className="article__read-this">
              <Link
                to={"/article/post" + s.id}
                className="article__read-this-link"
              >
                Read this article
              </Link>
            </div>
          </div>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Slider;
