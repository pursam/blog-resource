import React from "react";
import "./ArticleCards.scss";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
// import Avatar from "@mui/material/Avatar";
// import { red } from "@mui/material/colors";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

type Props = {
  el: {
    name: string;
    image: string;
    tags: string;
    article: string;
  };
};

const articleCards = ({ el }: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="article-card">
      <CardHeader className="card-header" title={el.name} />
      <a href="" className="card-tag-link">
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
      </a>

      <CardContent>
        <Typography variant="body2">
          {el.article.slice(0, 149) + "..."}
        </Typography>
      </CardContent>
      <CardActions className="card-actions" disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon className="card-actions__icon-like" />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon className="card-actions__icon" />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default articleCards;
