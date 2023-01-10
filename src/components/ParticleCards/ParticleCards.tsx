import React from "react";
import "./ParticleCards.scss";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

type Props = {};

const particleCards = (props: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="particle-card">
      <CardHeader className="card-header" title="Article Name" />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="article image"
        className="card-media__img"
      >
        {/* <span className="card-media__img-bg" /> */}
      </CardMedia>
      <CardContent>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nobis
          accusamus recusandae officia modi atque culpa, nesciunt a odio, beatae
          quos mollitia maiores. Ad alias similique dignissimos tempore,
          cupiditate illum ut error ipsam modi minus repellendus saepe ea.
          Laborum nostrum perspiciatis libero iste voluptatibus reiciendis
          distinctio itaque quam. Vitae, architecto.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon className="cart-header__icon--like" />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon className="cart-header__icon" />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default particleCards;
