import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
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
              <Button
                key={page}
                sx={{
                  m: 0,
                  px: 1,
                  py: 2,
                  color: "white",
                  display: "block",
                }}
              >
                {page}
              </Button>
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
