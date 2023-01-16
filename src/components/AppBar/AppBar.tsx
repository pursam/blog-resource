import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import "./AppBar.scss";

import Menu from "../Menu/Menu";

function ResponsiveAppBar() {
  return (
    <AppBar position="static" className="app-bar">
      <Container maxWidth="md">
        <Toolbar disableGutters className="toolbar">
          <Menu />
        </Toolbar>
      </Container>
      <IconButton className="search-button" sx={{ my: "auto", color: "white" }}>
        <SearchIcon />
      </IconButton>
    </AppBar>
  );
}
export default ResponsiveAppBar;
