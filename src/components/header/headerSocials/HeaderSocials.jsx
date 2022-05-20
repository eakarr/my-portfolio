import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/emir-akar/"
      >
        <BsLinkedin />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/eakarr">
        <BsGithub />
      </a>
      <a target="_blank" rel="noreferrer" href="https://medium.com/@eaakar.55">
        <BsMedium />
      </a>
    </div>
  );
};

export default HeaderSocials;
