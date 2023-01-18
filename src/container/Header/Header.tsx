import React from "react";
import AppBar from "../../components/AppBar/AppBar";
import picture from "../../assets/header-logo.png";
import { Box } from "@mui/material";
import "./Header.scss";

type Props = {};

const Header = (props: Props) => {
  // menu with Serching
  return (
    <header>
      <Box sx={{ flexGrow: 1 }} className="header-logo">
        <div className="header-logo__link">
          <img
            src={picture}
            alt="header-logo.png"
            className="header-logo__image"
          />
        </div>
      </Box>
      <AppBar />
    </header>
  );
};

export default Header;
