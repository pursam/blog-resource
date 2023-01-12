import React from "react";
import Box from "@mui/material/Box";
import Slider from "components/Slider/Slider";
import ArticleCard from "components/ArticleCards/ArticleCard";

import "./Main.scss";

import articles from "components/Articles/ArticlesData";

type Props = {};

const Main = (props: Props) => {
  return (
    <main>
      <Slider />
      <div className="divider" />
      <Box className="card-box">
        {articles.map(
          (a, i) => i > 4 && i < 8 && <ArticleCard el={a} key={i} />
        )}
      </Box>
    </main>
  );
};

export default Main;
