import Divider from "components/Divider/Divider";
import GridTags from "components/GridTags/GridTags";
import ArticleItem from "components/ArticleItem/ArticleItem";
import React from "react";
import { Box } from "@mui/material";
import articles from "../Articles/ArticlesData";

type Props = {
  handleAddToFavorite: (id: number) => void;
  userData: {
    favorite: number[];
  };
};

const Favorite = ({ userData, handleAddToFavorite }: Props) => {
  return (
    <Box>
      <GridTags />
      <Divider />
      <Box>
        {articles.map((el) =>
          //среди всех статей, если массив id fav совпадает с текущим айди єлемента массива то он выводится
          userData.favorite.map(
            (fav, i) =>
              el.id === fav && (
                <ArticleItem
                  handleAddToFavorite={() => handleAddToFavorite(el.id)}
                  userData={userData}
                  key={i}
                  el={el}
                />
              )
          )
        )}
      </Box>
    </Box>
  );
};

export default Favorite;
