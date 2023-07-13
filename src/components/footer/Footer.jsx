// eslint-disable-next-line no-unused-vars
import React from "react";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <a href="" className="footer__logo">
        DEVELOPER
      </a>

      <div className="footer__socials">
        <a href="https://twitter.com/Mr__rovilay">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/ayodeji-akinola-296405224/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Mr-Rovilay">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <div className="footer__copyright">
        <small> Ayodeji Akinola {currentYear}</small>
      </div>
      <div className="footer-iconTop">
        <a href="#home">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
