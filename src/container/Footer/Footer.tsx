import { Box } from "@mui/material";
import React from "react";
import "./Footer.scss";
import logo from "assets/footer-logo.png";
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <Box className="footer-bar">
        <h2 className="footer-bar__title">Информация и контакты</h2>
        <div className="footer-bar__wrap">
          <div className="footer-bar-item">
            <img className="footer-bar-item__image" src={logo} alt="404" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              neque expedita vero atque modi accusantium error fuga? Voluptates,
              maxime sunt. Omnis illo sint accusantium!
            </p>
          </div>
          <div className="footer-bar-item">
            <h3 className="footer-bar-item__title">Популярные тэги</h3>
            <div className="grid-tags">
              <Link to="/travel" className="grid-tags__item-a">
                #travel
              </Link>
              <Link to="/photography" className="grid-tags__item-b">
                #photography
              </Link>
              <Link to="/people" className="grid-tags__item-c">
                #people
              </Link>
              <Link to="/lifestyle" className="grid-tags__item-d">
                #lifestyle
              </Link>
              <Link to="/favorite" className="grid-tags__item-e">
                #favorite
              </Link>
            </div>
          </div>
          <div className="footer-bar-item">
            <h3 className="footer-bar-item__title">Подпишись</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              neque expedita vero atque modi accusantium error fuga? Voluptates,
              maxime sunt. Omnis illo sint accusantium!
            </p>
          </div>
        </div>
        <div className="footer-bar__copyright">
          <span>&copy; Kozychev Vladislav template replica </span>
        </div>
      </Box>
    </footer>
  );
};

export default Footer;
