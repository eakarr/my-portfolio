import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiSass } from "react-icons/si";

import "./Experience.scss";

const experiences = [
  {
    id: Math.random(),
    icon: <RiReactjsLine className="experience__details-icon" />,
    language: "ReactJS",
  },
  {
    id: Math.random(),
    icon: <SiJavascript className="experience__details-icon" />,
    language: "JavaScript",
  },
  {
    id: Math.random(),
    icon: <FaHtml5 className="experience__details-icon" />,
    language: "HTML",
  },
  {
    id: Math.random(),
    icon: <SiCss3 className="experience__details-icon" />,
    language: "CSS",
  },
  {
    id: Math.random(),
    icon: <SiSass className="experience__details-icon" />,
    language: "SASS",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {experiences.map((experience) => (
              <article key={experience.id} className="experience__details">
                {experience.icon} <h4>{experience.language}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
