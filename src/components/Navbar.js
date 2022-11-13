import React, { useState, useRef } from "react";
import { useGlobalContext } from "../context/context";
import logo from "../img/logo.webp";

const Navbar = () => {
  const { headerRef } = useGlobalContext();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const barRef = useRef();

  return (
    <header className={`header ${isNavOpen ? "nav-open" : ""}`} ref={headerRef}>
      <a href="#">
        <img className="header__logo" src={logo} alt="outlined logo" />
      </a>
      <nav className="nav" onClick={() => setIsNavOpen(!isNavOpen)}>
        <ul className="nav__list">
          <li>
            <a className="nav__link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="nav__link" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="nav__link" href="#about">
              About
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="https://www.linkedin.com/in/krisdoyon"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="https://github.com/krisdoyon"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
        <a
          className="btn btn--orange header__btn-contact"
          href="mailto:kristopher.doyon@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact me
        </a>
      </nav>

      <button
        className="nav__btn-mobile"
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
      >
        <div
          className="nav__btn-mobile-bar"
          style={{
            marginTop: isNavOpen ? 0 : "-1.2rem",
            transform: isNavOpen ? "rotate(135deg)" : "",
            marginLeft: isNavOpen ? `${-barRef.current.offsetWidth / 2}px` : "",
          }}
          ref={barRef}
        ></div>
        <div
          className="nav__btn-mobile-bar"
          style={{ opacity: isNavOpen ? 0 : 1 }}
        ></div>
        <div
          className="nav__btn-mobile-bar"
          style={{
            marginTop: isNavOpen ? 0 : "1.2rem",
            transform: isNavOpen ? "rotate(-135deg)" : "",
            marginLeft: isNavOpen ? `${-barRef.current.offsetWidth / 2}px` : "",
          }}
        ></div>
      </button>
    </header>
  );
};

export default Navbar;
