import React from "react";
import "./Post.scss";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

type Props = {
  el: {
    id: number;
    name: string;
    image: string;
    tags: string;
    article: string;
  };
  userData: {
    favorite: number[];
  };
  handleAddToFavorite: (id: number) => void;
};

const Post = ({ el, userData, handleAddToFavorite }: Props) => {
  return (
    <div className="post">
      <div className="post__wrap-top">
        <h2 className="post__title">{el.name}</h2>
      </div>

      <div className="post__content">
        <img
          className="post__image"
          src={"../" + el.image}
          alt="произошел интернет буллинг"
        />
        <p className="post__text">{el.article}</p>
      </div>

      <div className="post__wrap-bottom">
        <div className="post-actions">
          <IconButton
            onClick={() => handleAddToFavorite(el.id)}
            className={
              userData.favorite.includes(el.id) === true
                ? "post-actions__btn active"
                : "post-actions__btn"
            }
            aria-label="add to favorites"
          >
            <FavoriteIcon className="post-actions__icon" />
          </IconButton>
          <IconButton className="post-actions__btn" aria-label="share">
            <ShareIcon className="post-actions__icon" />
          </IconButton>
        </div>

        <div className="post__tag">
          <span>{"#" + el.tags}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
