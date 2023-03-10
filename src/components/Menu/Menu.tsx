import React from "react";
import { NavLink, Link } from "react-router-dom";

import Box from "@mui/material/Box";
import pages from "./MenuData";

import "./Menu.scss";

type Props = {};

function Menu(prop: Props) {
  return (
    <Box className="menu-wrap">
      {pages.map((page, i) =>
        page.name === "РАЗДЕЛЫ" ? (
          <button key={page.name} className="app-btn app-btn--tags">
            <span className="app-btn__span">{page.name}</span>
            <span className="app-btn__bg" />
            <div className="dropdown-wrap">
              <Link to="/travel" className="dropdown-wrap__item">
                Travel
              </Link>
              <Link to="/photography" className="dropdown-wrap__item">
                Photography
              </Link>
              <Link to="/people" className="dropdown-wrap__item">
                People
              </Link>
              <Link to="/lifestyle" className="dropdown-wrap__item">
                Lifestyle
              </Link>
            </div>
          </button>
        ) : (
          <NavLink
            key={page.name}
            className={({ isActive }) =>
              isActive ? "app-btn app-btn--active" : "app-btn"
            }
            to={page.url}
          >
            <span className="app-btn__span">{page.name}</span>
            <span className="app-btn__bg" />
          </NavLink>
        )
      )}
    </Box>
  );
}

export default Menu;
