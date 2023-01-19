import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import "./ArticleItem.scss";

type Props = {
  el: {
    id: number;
    name: string;
    image: string;
    tags: string;
    article: string;
  };
};

const ArticleItem = ({ el }: Props) => {
  return (
    <div className="articles-item">
      <div className="articles-item__wrap-top">
        <Link
          className="articles-item__image-item"
          to={"/articles/" + el.id.toString()}
        >
          <img className="articles-item__image" src={el.image} alt="404" />
        </Link>
        <div className="articles-item__description">
          <h2 className="articles-item__title">{el.name}</h2>
          <p>{el.article.slice(0, 600)}</p>
        </div>
      </div>
      <div className="articles-item__wrap-bottom">
        <div className="actions">
          <IconButton className="actions__btn" aria-label="add to favorites">
            <FavoriteIcon className="actions__icon" />
          </IconButton>
          <IconButton className="actions__btn" aria-label="share">
            <ShareIcon className="actions__icon" />
          </IconButton>
        </div>
        <div className="articles-item__tag">
          <span>{"#" + el.tags}</span>{" "}
        </div>

        <Link
          to={"/articles/" + el.id.toString()}
          className="articles-item__open"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default ArticleItem;
