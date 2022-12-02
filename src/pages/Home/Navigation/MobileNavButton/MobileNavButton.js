import styles from "./MobileNavButton.module.scss";
import { useRef } from "react";

const MobileNavButton = ({ isNavOpen, onClick }) => {
  const barRef = useRef();

  return (
    <button className={styles.wrapper} onClick={onClick}>
      <div
        className={styles.bar}
        style={{
          marginTop: isNavOpen ? 0 : "-1.2rem",
          transform: isNavOpen ? "rotate(135deg)" : "",
          marginLeft: isNavOpen ? `${-barRef.current.offsetWidth / 2}px` : "",
        }}
        ref={barRef}
      ></div>
      <div className={styles.bar} style={{ opacity: isNavOpen ? 0 : 1 }}></div>
      <div
        className={styles.bar}
        style={{
          marginTop: isNavOpen ? 0 : "1.2rem",
          transform: isNavOpen ? "rotate(-135deg)" : "",
          marginLeft: isNavOpen ? `${-barRef.current.offsetWidth / 2}px` : "",
        }}
      ></div>
    </button>
  );
};

export default MobileNavButton;
