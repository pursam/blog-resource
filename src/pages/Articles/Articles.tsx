import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import articles from "./ArticlesData";
import { Link } from "react-router-dom";

import "./Articles.scss";

type Props = {};

const Articles = (props: Props) => {
  const choiseTag = "people";
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
      <Box>
        <div className="divider" />

        {articles.map(
          (el, i) =>
            //Если тэг элемента содержит поисковую переменную...
            el.tags.includes(choiseTag) && (
              <div className="articles-list">
                <div className="articles-list__wrap-left">
                  <div className="articles-list__image-item">
                    <img
                      className="articles-list__image"
                      src={el.image}
                      alt="404"
                    />
                  </div>

                  <div className="social-icons">
                    <span>&#x2764;</span>
                    <span>&#x2764;</span>
                    <span>&#x2764;</span>
                    <span>&#x2764;</span>
                    <span>&#x2764;</span>
                  </div>
                </div>
                <div className="articles-list__wrap-right">
                  <p>{el.article.slice(0, 600)}</p>
                  <Link to="" className="articles-list__open">
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
