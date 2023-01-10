import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import "./AppBar.scss";

const pages = [
  "ГЛАВНАЯ",
  "РАЗДЕЛЫ",
  "ФОТОАЛЬБОМ",
  "КОНТАКТЫ",
  "ОБО МНЕ",
  "АВТОРИЗАЦИЯ",
];

function ResponsiveAppBar() {
  return (
    <AppBar position="static" className="app-bar">
      <Container maxWidth="md">
        <Toolbar disableGutters className="toolbar">
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <a
                href=""
                className="app-btn"
                key={page}
                // disableFocusRipple={true}
                // disableRipple={true}
              >
                <span className="app-btn-span">{page}</span>
                <span className="app-btn-bg" />
              </a>
            ))}
          </Box>
        </Toolbar>
      </Container>
      <IconButton className="search-button" sx={{ my: "auto", color: "white" }}>
        <SearchIcon />
      </IconButton>
    </AppBar>
  );
}
export default ResponsiveAppBar;
