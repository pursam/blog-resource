import React from "react";
import { Box } from "@mui/material";
import articles from "./ArticlesData";
import ArticleItem from "components/ArticleItem/ArticleItem";
import GridTags from "components/GridTags/GridTags";
import Divider from "components/Divider/Divider";

import "./Articles.scss";
import { Route, Routes } from "react-router-dom";
import Post from "components/Post/Post";

type Props = {
  handleAddToFavorite: (id: number) => void;
  userData: {
    favorite: number[];
  };
};

const Articles = ({ userData, handleAddToFavorite }: Props) => {
  const choiceTag = ""; //выводит все статьи
  return (
    <Box>
      <GridTags />
      <Divider />
      <Box>
        <Routes>
          <Route
            path=""
            element={articles.map(
              (el, i) =>
                //Если тэг элемента содержит поисковую переменную...
                el.tags.includes(choiceTag) && (
                  <ArticleItem
                    // LinkToPost={LinkToPost}
                    userData={userData}
                    handleAddToFavorite={handleAddToFavorite}
                    key={i}
                    el={el}
                  />
                )
            )}
          />
          {articles.map((el, i) => (
            <Route
              path={"/post" + el.id.toString()}
              element={
                <Post
                  userData={userData}
                  handleAddToFavorite={handleAddToFavorite}
                  key={i}
                  el={el}
                />
              }
            />
          ))}
        </Routes>
      </Box>
    </Box>
  );
};
export default Articles;
