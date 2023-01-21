import React from "react";
import { Box } from "@mui/material";
import articles from "../Articles/ArticlesData";
import ArticleItem from "components/ArticleItem/ArticleItem";
import GridTags from "components/GridTags/GridTags";
import Divider from "components/Divider/Divider";

import "./Travel.scss";

type Props = {
  handleAddToFavorite: (id: number) => void;
  userData: {
    favorite: number[];
  };
};

const Travel = ({ userData, handleAddToFavorite }: Props) => {
  const choiceTag = "travel";

  return (
    <Box>
      <GridTags />
      <Divider />
      <Box>
        {articles.map(
          (el, i) =>
            //Если тэг элемента содержит поисковую переменную...
            el.tags.includes(choiceTag) && (
              <ArticleItem
                userData={userData}
                handleAddToFavorite={() => handleAddToFavorite(el.id)}
                key={i}
                el={el}
              />
            )
        )}
      </Box>
    </Box>
  );
};

export default Travel;
