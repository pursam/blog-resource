import React from "react";
import Box from "@mui/material/Box";
import Slider from "components/Slider/Slider";
import ArticleCard from "components/ArticleCards/ArticleCard";
import articles from "pages/Articles/ArticlesData";
import Divider from "components/Divider/Divider";

type Props = {
  handleAddToFavorite: (id: number) => void;
  userData: {
    favorite: number[];
  };
};

const Home = ({ userData, handleAddToFavorite }: Props) => {
  return (
    <>
      <Slider />
      <Divider />
      <Box className="card-box">
        {articles.map(
          (a, i) =>
            i > 4 &&
            i < 8 && (
              <ArticleCard
                userData={userData}
                handleAddToFavorite={handleAddToFavorite}
                el={a}
                key={i}
              />
            )
        )}
      </Box>
    </>
  );
};

export default Home;
