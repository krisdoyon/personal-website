import styles from "./Header.module.scss";
import { useGlobalContext } from "../../context/context";
import logo from "../../img/logo.webp";

const Header = ({ children, className, sticky = "always" }) => {
  const { headerRef, stickyNav } = useGlobalContext();

  return (
    <header
      className={`${styles.wrapper} ${className ? className : ""} ${
        sticky === "always" || (sticky === "scroll" && stickyNav)
          ? styles.sticky
          : ""
      }`}
      ref={headerRef}
    >
      <a href="/#">
        <img className={styles.logo} src={logo} alt="outlined logo" />
      </a>
      {children}
    </header>
  );
};

export default Header;
