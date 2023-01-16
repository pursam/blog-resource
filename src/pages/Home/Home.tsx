import React from "react";
import Box from "@mui/material/Box";
import Slider from "components/Slider/Slider";
import ArticleCard from "components/ArticleCards/ArticleCard";
import articles from "pages/Articles/ArticlesData";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Slider />
      <div className="divider" />
      <Box className="card-box">
        {articles.map(
          (a, i) => i > 4 && i < 8 && <ArticleCard el={a} key={i} />
        )}
      </Box>
    </>
  );
};

export default Home;
