import React from "react";
import sprite from "../../src/img/sprite.svg";
import logo from "../../src/img/logo-footer.webp";

const Footer = () => {
  return (
    <footer className="footer section--border-top">
      <div className="footer__icon-box">
        <a
          href="mailto:kristopher.doyon@gmail.com"
          target="_blank"
          aria-label="footer email link"
        >
          <svg className="footer__icon">
            <use href={`${sprite}#icon-envelope`}></use>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/krisdoyon"
          target="_blank"
          aria-label="footer Linkedin link"
        >
          <svg className="footer__icon">
            <use href={`${sprite}#icon-linkedin`}></use>
          </svg>
        </a>
        <a
          href="https://github.com/krisdoyon"
          target="_blank"
          aria-label="footer GitHub link"
        >
          <svg className="footer__icon">
            <use href={`${sprite}#icon-github`}></use>
          </svg>
        </a>
      </div>
      <a href="#">
        <img
          src={logo}
          className="footer__logo"
          alt="logo with blue background and yellow letter"
        />
      </a>
    </footer>
  );
};

export default Footer;
