import React from "react";
import { Box } from "@mui/material";
import articles from "./ArticlesData";
import { Link } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import "./Articles.scss";

type Props = {};

const Articles = (props: Props) => {
  const choiseTag = "travel";
  return (
    <Box>
      <div className="grid-tags">
        <button className="grid-tags__item grid-tags__item--a">#Travel</button>
        <button className="grid-tags__item grid-tags__item--b">
          #Photography
        </button>
        <button className="grid-tags__item grid-tags__item--c">#People</button>
        <button className="grid-tags__item grid-tags__item--d">
          #Lifestyle
        </button>
        <button className="grid-tags__item grid-tags__item--e">
          &#x2764; Favorite
        </button>
      </div>
      <div className="divider" />
      <Box className="articles-grid-wrap">
        {articles.map(
          (el, i) =>
            //Если тэг элемента содержит поисковую переменную...
            el.tags.includes(choiseTag) && (
              <div className="articles-list">
                <div className="articles-list__wrap-top">
                  <Link
                    className="articles-list__image-item"
                    to={"/articles/" + el.id.toString()}
                  >
                    <img
                      className="articles-list__image"
                      src={el.image}
                      alt="404"
                    />
                  </Link>
                  <div className="articles-list__description">
                    <h2 className="articles-list__title">{el.name}</h2>
                    <p>{el.article.slice(0, 600)}</p>
                  </div>
                </div>
                <div className="articles-list__wrap-bottom">
                  <div className="actions">
                    <IconButton
                      className="actions__btn"
                      aria-label="add to favorites"
                    >
                      <FavoriteIcon className="actions__icon" />
                    </IconButton>
                    <IconButton className="actions__btn" aria-label="share">
                      <ShareIcon className="actions__icon" />
                    </IconButton>
                  </div>
                  <Link
                    to={"/articles/" + el.id.toString()}
                    className="articles-list__open"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            )
        )}
      </Box>
    </Box>
  );
};

export default Articles;
