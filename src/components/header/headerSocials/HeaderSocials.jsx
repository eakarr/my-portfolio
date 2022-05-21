import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";

const socials = [
  {
    id: Math.random(),
    target: "_blank",
    rel: "noreferrer",
    href: "https://www.linkedin.com/in/emir-akar/",
    icon: <BsLinkedin />,
  },
  {
    id: Math.random(),
    target: "_blank",
    rel: "noreferrer",
    href: "https://github.com/eakarr",
    icon: <BsGithub />,
  },
  {
    id: Math.random(),
    target: "_blank",
    rel: "noreferrer",
    href: "https://medium.com/@eaakar.55",
    icon: <BsMedium />,
  },
];
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {socials.map((social) => (
        <a
          key={social.id}
          target={social.target}
          rel={social.rel}
          href={social.href}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default HeaderSocials;
