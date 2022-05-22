import React from "react";
import HeaderButtons from "./headerButtons/HeaderButtons";
import ME from "../../assests/me.png";

import "./Header.scss";
import HeaderSocials from "./headerSocials/HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Emir AKAR</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <HeaderButtons />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
