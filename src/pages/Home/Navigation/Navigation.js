import styles from "./Navigation.module.scss";
import { useState } from "react";
import { useGlobalContext } from "../../../context/context";
import MobileNavButton from "./MobileNavButton";
import Button from "../../../components/Button";

const Navigation = () => {
  const { activeSection } = useGlobalContext();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMobileNavClick = () => {
    if (window.matchMedia("(max-width: 1000px").matches) {
      setIsNavOpen(!isNavOpen);
    }
  };

  return (
    <>
      <nav
        className={`${styles.wrapper} ${isNavOpen ? styles.open : ""}`}
        onClick={handleMobileNavClick}
      >
        <ul className={styles.list}>
          <li>
            <a
              className={`${styles.link} ${
                activeSection === "projects" ? styles.active : ""
              }`}
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={`${styles.link} ${
                activeSection === "skills" ? styles.active : ""
              }`}
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className={`${styles.link} ${
                activeSection === "about" ? styles.active : ""
              }`}
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/krisdoyon"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://github.com/krisdoyon"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
        <Button
          Tag="a"
          color="orange"
          className={styles.contact}
          href="mailto:kris.doyon@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact me
        </Button>
      </nav>
      <MobileNavButton onClick={handleMobileNavClick} isNavOpen={isNavOpen} />
    </>
  );
};

export default Navigation;
