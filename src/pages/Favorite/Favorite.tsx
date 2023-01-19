import Divider from "components/Divider/Divider";
import GridTags from "components/GridTags/GridTags";
import ArticleItem from "components/ArticleItem/ArticleItem";
import React from "react";
import { Box } from "@mui/material";
import articles from "../Articles/ArticlesData";

type Props = {
  user: {
    favorite: string[];
  };
};

const Favorite = ({ user }: Props) => {
  return (
    <Box>
      <GridTags />
      <Divider />
      <Box>
        {articles.map((el, i) =>
          //среди всех статей, если массив id fav совпадает с текущим айди єлемента массива то он выводится
          user.favorite.map(
            (fav) => el.id.toString() === fav && <ArticleItem key={i} el={el} />
          )
        )}
      </Box>
    </Box>
  );
};

export default Favorite;
