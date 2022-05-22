import React from "react";

import "./Footer.scss";
import FooterSocials from "./footerSocials/FooterSocials";

const Footer = () => {
  return (
    <footer>
      <FooterSocials />
      <div className="footer__copyright">
        &copy; Emir AKAR. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
