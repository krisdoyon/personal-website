import styles from "./Modal.module.scss";
import { useGlobalContext } from "../../context/context";
import ReactDOM from "react-dom";
import Button from "../Button";

const Modal = () => {
  const {
    closeModal,
    modalProject: { title, modalText, imgSrc, imgAlt, gitLink, siteLink },
  } = useGlobalContext();
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <button className={styles["btn-close"]} onClick={closeModal}>
        &times;
      </button>
      <div className={styles["img-container"]}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{modalText}</p>
        <div className={styles["btn-container"]}>
          <Button
            Tag="a"
            color="blue"
            className={styles.btn}
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </Button>
          <Button
            Tag="a"
            color="blue"
            className={styles.btn}
            href={siteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Site
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
