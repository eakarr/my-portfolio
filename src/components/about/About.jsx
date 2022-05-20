import React from "react";
import ABOUT_ME from "../../assests/about-me.png";

import "./About.scss";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ABOUT_ME} alt="about-me" />
          </div>
        </div>

        <div className="about__content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
            voluptatem assumenda consectetur a deserunt doloremque ipsa soluta
            magnam sequi! Cumque hic omnis sed quidem temporibus esse maxime,
            reprehenderit provident ipsum. Cumque nam perspiciatis esse, quam
            iusto, inventore enim eaque maxime non reprehenderit nobis nihil ut!
            Veritatis dolorem fugit sint repudiandae cumque debitis ipsum
            corporis quam? Voluptatum laborum voluptatem vero fugit.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
