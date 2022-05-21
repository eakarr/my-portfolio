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
            Hi there! My name is Emir. I am a passionate self-taught Frontend
            Developer. I am a very friendly and social person. I like spending
            time with my friends and having a good time with them. Actually, my
            adventure started as an Environmental Engineer. I know, it sounds
            interesting. I graduated from Hacettepe University as an
            Environmental Engineer in August 2021. Two months after my
            graduation, I realized that this job was not meant to be my primary
            job. So, I decided to follow my main curiosity which was coding! I
            was always curious about how those web pages were created, how the
            buttons were put there, how those buttons knew where I want to go or
            what I want to do, how those paragraphs were written there, etc. So,
            I decided to search about what this field is called in general and I
            found out that this was called Frontend Development. I started
            working on by watching videos, reading lots of articles, and of course,
            making lots of googling. After some time, I got into a couple of
            bootcamps and improved my Fronted skills even further! My main goal
            is to become a Frontend Developer that every company needs in their
            teams! Please, feel free to reach me out anytime! Thanks for reading
            until the end!
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
