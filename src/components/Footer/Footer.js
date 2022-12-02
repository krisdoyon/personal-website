import styles from "./Footer.module.scss";
import sprite from "../../img/sprite.svg";
import logo from "../../img/logo-color.webp";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles["icons-container"]}>
        <a
          href="mailto:kristopher.doyon@gmail.com"
          target="_blank"
          aria-label="footer email link"
          rel="noopener noreferrer"
        >
          <svg className={styles.icon}>
            <use href={`${sprite}#icon-envelope`}></use>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/krisdoyon"
          target="_blank"
          aria-label="footer Linkedin link"
          rel="noopener noreferrer"
        >
          <svg className={styles.icon}>
            <use href={`${sprite}#icon-linkedin`}></use>
          </svg>
        </a>
        <a
          href="https://github.com/krisdoyon"
          target="_blank"
          aria-label="footer GitHub link"
          rel="noopener noreferrer"
        >
          <svg className={styles.icon}>
            <use href={`${sprite}#icon-github`}></use>
          </svg>
        </a>
      </div>
      <a href="/#">
        <img
          src={logo}
          className={styles.logo}
          alt="logo with blue background and yellow letter"
        />
      </a>
    </footer>
  );
};

export default Footer;
