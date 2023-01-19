import React from "react";
import { NavLink } from "react-router-dom";

import "./GridTags.scss";

type Props = {};

const GridTags = (props: Props) => {
  return (
    <div className="grid-tags">
      <NavLink
        to="/travel"
        className={({ isActive }) =>
          isActive
            ? "grid-tags__item grid-tags__item--a active"
            : "grid-tags__item grid-tags__item--a"
        }
      >
        #Travel
      </NavLink>
      <NavLink
        to="/photography"
        className={({ isActive }) =>
          isActive
            ? "grid-tags__item grid-tags__item--b active"
            : "grid-tags__item grid-tags__item--b"
        }
      >
        #Photography
      </NavLink>
      <NavLink
        to="/people"
        className={({ isActive }) =>
          isActive
            ? "grid-tags__item grid-tags__item--c active"
            : "grid-tags__item grid-tags__item--c"
        }
      >
        #People
      </NavLink>
      <NavLink
        to="/lifestyle"
        className={({ isActive }) =>
          isActive
            ? "grid-tags__item grid-tags__item--d active"
            : "grid-tags__item grid-tags__item--d"
        }
      >
        #Lifestyle
      </NavLink>
      <NavLink
        to="/favorite"
        className={({ isActive }) =>
          isActive
            ? "grid-tags__item grid-tags__item--e active"
            : "grid-tags__item grid-tags__item--e"
        }
      >
        &#x2764; Favorite
      </NavLink>
    </div>
  );
};

export default GridTags;
