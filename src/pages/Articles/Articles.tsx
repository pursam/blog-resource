import React from "react";
import { Box } from "@mui/material";
import articles from "./ArticlesData";
import ArticleItem from "components/ArticleItem/ArticleItem";
import GridTags from "components/GridTags/GridTags";
import Divider from "components/Divider/Divider";
import { Routes, Route } from "react-router-dom";

import "./Articles.scss";
import Travel from "./Travel/Travel";

type Props = {};

const Articles = (props: Props) => {
  const [choiceTag, setChoiceTag] = React.useState("");
  // const choiceTravel = () => {
  //   setChoiceTag("travel");
  // };
  // const choicePhotography = () => {
  //   setChoiceTag("photography");
  // };
  // const choicePeople = () => {
  //   setChoiceTag("people");
  // };
  // const choiceLifestyle = () => {
  //   setChoiceTag("lifestyle");
  // };
  // const choiceFavorite = () => {
  //   setChoiceTag("favorite");
  // };

  return (
    <Box>
      <GridTags />
      {/* choiceTravel={choiceTravel}
      choicePhotography={choicePhotography}
      choicePeople={choicePeople}
      choiceLifestyle={choiceLifestyle}
      choiceFavorite={choiceFavorite} />*/}

      <Box>
        {articles.map(
          (el, i) =>
            //Если тэг элемента содержит поисковую переменную...
            el.tags.includes(choiceTag) && <ArticleItem el={el} />
        )}
      </Box>
    </Box>
  );
};
export default Articles;
