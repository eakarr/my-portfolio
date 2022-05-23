import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

import "./Navigation.scss";

const Navigation = () => {
  const [activeNav, setActiveNav] = useState("#home");

  setTimeout(() => {
    function selectElementById(id) {
      return document.querySelector(`#${id}`);
    }

    const sections = [
      selectElementById("home"),
      selectElementById("about"),
      selectElementById("experience"),
      selectElementById("portfolio"),
      selectElementById("contact"),
    ];

    const navItems = {
      home: selectElementById("homeNavItem"),
      about: selectElementById("aboutNavItem"),
      experience: selectElementById("experienceNavItem"),
      portfolio: selectElementById("portfolioNavItem"),
      contact: selectElementById("contactNavItem"),
    };

    // intersection observer setup
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.62,
    };
    if (window.innerHeight <= 800) {
      observerOptions.threshold = 0.2;
    } else if (window.innerHeight <= 950) {
      observerOptions.threshold = 0.3;
    } else if (window.innerHeight <= 1200) {
      observerOptions.threshold = 0.6;
    } else {
      observerOptions.threshold = 0.7;
    }
    // console.log(observerOptions.threshold);
    // console.log(window.innerHeight);
    function observerCallback(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // get the nav item corresponding to the id of the section
          // that is currently in view
          const navItem = navItems[entry.target.id];
          // add 'active' class on the navItem
          navItem.classList.add("active");
          // remove 'active' class from any navItem that is not
          // same as 'navItem' defined above
          Object.values(navItems).forEach((item) => {
            if (item !== navItem) {
              item.classList.remove("active");
            }
          });
        }
      });
    }

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((sec) => observer.observe(sec));
  }, 10);
  return (
    <nav>
      <a
        id="homeNavItem"
        href="#home"
        onClick={() => {
          setActiveNav("#home");
        }}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        id="aboutNavItem"
        href="#about"
        onClick={() => {
          setActiveNav("#about");
        }}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a
        id="experienceNavItem"
        href="#experience"
        onClick={() => {
          setActiveNav("#experience");
        }}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        id="portfolioNavItem"
        href="#portfolio"
        onClick={() => {
          setActiveNav("#portfolio");
        }}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        id="contactNavItem"
        href="#contact"
        onClick={() => {
          setActiveNav("#contact");
        }}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navigation;
