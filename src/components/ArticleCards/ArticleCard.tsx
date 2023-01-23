import React from "react";
import "./ArticleCards.scss";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

type Props = {
  el: {
    id: number;
    name: string;
    image: string;
    tags: string;
    article: string;
  };
  handleAddToFavorite: (id: number) => void;
  userData: {
    favorite: number[];
  };
};

const articleCards = ({ el, handleAddToFavorite, userData }: Props) => {
  return (
    <Card className="article-card">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        className="card-header"
        title={el.name}
      />
      <Link to={"/" + el.tags} className="card-tag-link">
        <CardMedia
          component="img"
          height="194"
          image={el.image}
          alt="article img"
          className="card-tag-img"
        />
        <div className="card-tag-bg">
          <h3 className="card-tag-title">{el.tags}</h3>
        </div>
      </Link>

      <CardContent>
        <Typography variant="body2">
          {el.article.slice(0, 200) + "..."}
        </Typography>
      </CardContent>
      <CardActions className="card-actions" disableSpacing>
        <IconButton
          onClick={() => handleAddToFavorite(el.id)}
          aria-label="add to favorites"
        >
          <FavoriteIcon
            className={
              userData.favorite.includes(el.id) === true
                ? "card-actions__icon-like active"
                : "card-actions__icon-like"
            }
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon className="card-actions__icon" />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default articleCards;
