import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, StyledEngineProvider } from "@mui/material";
import "./App.scss";

type Props = {};

const App = (props: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <div className="background background__image" />
      <div className="background background__greylayer" />
      <CssBaseline />
      <Container maxWidth="lg" className="main-container">
        <Header />
        <Main />
        <Footer />
      </Container>
    </StyledEngineProvider>
  );
};

export default App;
