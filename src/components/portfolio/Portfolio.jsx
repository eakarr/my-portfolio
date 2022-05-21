import ikinciElProject from "../../assests/ikinci-el-project.png";
import marvelAPI from "../../assests/marvel-api.png";
import miniMathGame from "../../assests/mini-math-game.png";
import registrationPanel from "../../assests/registration-panel.png";

import "./Portfolio.scss";

const myProjects = [
  {
    id: Math.random(),
    image: ikinciElProject,
    title: "İkinci El Project",
    github: "https://github.com/eakarr/protein-patika-graduation-project",
    demo: "https://protein-patika-graduation-project.vercel.app/",
  },
  {
    id: Math.random(),
    image: marvelAPI,
    title: "Marvel API",
    github: "https://github.com/eakarr/patika-marvel-responsive-api-reactjs",
    demo: "https://patika-marvel-responsive-api-reactjs.vercel.app/",
  },
  {
    id: Math.random(),
    image: miniMathGame,
    title: "Mini Math Game",
    github: "https://github.com/eakarr/patika-mini-math-game-reactjs",
    demo: "https://patika-mini-math-game-reactjs.vercel.app/",
  },
  {
    id: Math.random(),
    image: registrationPanel,
    title: "Registration Panel",
    github: "https://github.com/eakarr/patika-register-page-reactjs",
    demo: "https://patika-register-page-reactjs.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {myProjects.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" rel="noreferrer" target="_blank">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                rel="noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
