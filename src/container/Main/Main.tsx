import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Articles from "../../pages/Articles/Articles";

import "./Main.scss";
import Travel from "pages/Travel/Travel";
import Photography from "pages/Photography/Photography";
import People from "pages/People/People";
import Lifestyle from "pages/Lifestyle/Lifestyle";
import Favorite from "pages/Favorite/Favorite";
import Contacts from "pages/Contacts/Contacts";

type Props = {};

type UserData = {
  favorite: number[];
};

const Main = (props: Props) => {
  const [userData, setUserData] = React.useState<UserData>({
    favorite: [],
  });

  //id это articles.id
  function handleAddToFavorite(id: number) {
    let copy = Object.assign(userData.favorite);
    let findItem = copy.findIndex((i: number) => i === id);
    userData.favorite.includes(id) === true
      ? copy.splice(findItem, 1)
      : copy.push(id);

    return setUserData({ favorite: copy });
  }

  return (
    <main>
      <Routes>
        <Route
          path="/*"
          element={
            <Home
              userData={userData}
              handleAddToFavorite={handleAddToFavorite}
            />
          }
        />
        <Route
          path="/articles/*"
          element={
            <Articles
              userData={userData}
              handleAddToFavorite={handleAddToFavorite}
            />
          }
        />
        <Route
          path="travel"
          element={
            <Travel
              userData={userData}
              handleAddToFavorite={handleAddToFavorite}
            />
          }
        />
        <Route
          path="photography"
          element={
            <Photography
              userData={userData}
              handleAddToFavorite={handleAddToFavorite}
            />
          }
        />
        <Route
          path="people"
          element={
            <People
              userData={userData}
              handleAddToFavorite={handleAddToFavorite}
            />
          }
        />
        <Route
          path="lifestyle"
          element={
            <Lifestyle
              userData={userData}
              handleAddToFavorite={handleAddToFavorite}
            />
          }
        />
        <Route
          path="/favorite"
          element={
            <Favorite
              handleAddToFavorite={handleAddToFavorite}
              userData={userData}
            />
          }
        />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </main>
  );
};

export default Main;
