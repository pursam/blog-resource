import React from "react";
import { NavLink } from "react-router-dom";

import "./GridTags.scss";

type Props = {
  choiceTravel: any;
  choicePhotography: any;
  choicePeople: any;
  choiceLifestyle: any;
  ChoiceFavorite: any;
};

const GridTags = ({
  choiceTravel,
  choicePhotography,
  choicePeople,
  choiceLifestyle,
  ChoiceFavorite,
}: Props) => {
  return (
    <div className="grid-tags">
      <NavLink
        to="/articles/travel"
        className={({ isActive }) =>
          isActive
            ? "grid-tags__item grid-tags__item--a active"
            : "grid-tags__item grid-tags__item--a"
        }
      >
        <button onClick={choiceTravel} className="grid-tags__btn">
          #Travel
        </button>
      </NavLink>
      <NavLink
        to="articles/photography"
        className={({ isActive }) =>
          isActive
            ? "grid-tags__item grid-tags__item--b active"
            : "grid-tags__item grid-tags__item--b"
        }
      >
        <button onClick={choicePhotography} className="grid-tags__btn">
          #Photography
        </button>
      </NavLink>
      <NavLink
        to="articles/people"
        className={({ isActive }) =>
          isActive
            ? "grid-tags__item grid-tags__item--c active"
            : "grid-tags__item grid-tags__item--c"
        }
      >
        <button onClick={choicePeople} className="grid-tags__btn">
          #People
        </button>
      </NavLink>
      <NavLink
        to="articles/lifestyle"
        className={({ isActive }) =>
          isActive
            ? "grid-tags__item grid-tags__item--d active"
            : "grid-tags__item grid-tags__item--d"
        }
      >
        <button onClick={choiceLifestyle} className="grid-tags__btn">
          #Lifestyle
        </button>
      </NavLink>
      <NavLink
        to="article/favorite"
        className={({ isActive }) =>
          isActive
            ? "grid-tags__item grid-tags__item--e active"
            : "grid-tags__item grid-tags__item--e"
        }
      >
        <button onClick={ChoiceFavorite} className="grid-tags__btn">
          &#x2764; Favorite
        </button>
      </NavLink>
    </div>
  );
};

export default GridTags;
