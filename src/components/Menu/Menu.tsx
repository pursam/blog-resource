import React from "react";
import { NavLink, Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import pages from "./MenuData";

import "./Menu.scss";

type Props = {};

function Menu({}: Props) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
      }}
    >
      {pages.map((page, i) => (
        <NavLink
          key={page.name}
          className={({ isActive }) =>
            isActive ? "app-btn app-btn--active" : "app-btn"
          }
          to={page.url}
        >
          <span className="app-btn__span">{page.name}</span>
          <span className="app-btn__bg" />

          {page.name === "РАЗДЕЛЫ" && (
            <div className="dropdown-wrap">
              <Link to="/articles" className="dropdown-wrap__item">
                Travel
              </Link>
              <Link to="/articles" className="dropdown-wrap__item">
                Photography
              </Link>
              <Link to="/articles" className="dropdown-wrap__item">
                People
              </Link>
              <Link to="/articles" className="dropdown-wrap__item">
                Lifestyle
              </Link>
            </div>
          )}
        </NavLink>
      ))}
    </Box>
  );
}

export default Menu;
