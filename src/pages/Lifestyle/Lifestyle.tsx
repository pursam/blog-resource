import React from "react";
import { Box } from "@mui/material";
import articles from "../Articles/ArticlesData";
import ArticleItem from "components/ArticleItem/ArticleItem";
import GridTags from "components/GridTags/GridTags";
import Divider from "components/Divider/Divider";

import "./Lifestyle.scss";

type Props = {};

const Lifestyle = (props: Props) => {
  const choiceTag = "lifestyle";

  return (
    <Box>
      <GridTags />
      <Divider />
      <Box>
        {articles.map(
          (el, i) =>
            //Если тэг элемента содержит поисковую переменную...
            el.tags.includes(choiceTag) && <ArticleItem key={i} el={el} />
        )}
      </Box>
    </Box>
  );
};
export default Lifestyle;
