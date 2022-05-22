import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import emailjs from "emailjs-com";

import "./Contact.scss";

const contactInfos = [
  {
    id: Math.random(),
    icon: <MdOutlineEmail className="contact__option-icon" />,
    title: "Email",
    contactAdress: "eaakar.55@gmail.com",
    href: "mailto:eaakar.55@gmail.com",
  },
  {
    id: Math.random(),
    icon: <BsWhatsapp className="contact__option-icon" />,
    title: "WhatsApp",
    contactAdress: "Direct Message",
    href: "https://api.whatsapp.com/send?phone=05301350812",
  },
  {
    id: Math.random(),
    icon: <BsTelegram className="contact__option-icon" />,
    title: "Telegram",
    contactAdress: "Direct Message",
    href: "https://telegram.me/eaakar",
  },
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jrgrov7",
        "template_5luz3k2",
        form.current,
        "ML275e1kIvem4RaOk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {contactInfos.map(({ id, icon, title, contactAdress, href }) => (
            <article key={id} className="contact__option">
              {icon}
              <h4>{title}</h4>
              <h5>{contactAdress}</h5>
              <a href={href} target="_blank" rel="noreferrer">
                Send a message
              </a>
            </article>
          ))}
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
