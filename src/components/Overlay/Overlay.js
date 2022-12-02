import styles from "./Overlay.module.scss";
import ReactDOM from "react-dom";
import { useGlobalContext } from "../../context/context";

const Overlay = () => {
  const { closeModal } = useGlobalContext();
  return ReactDOM.createPortal(
    <div className={styles.wrapper} onClick={closeModal} />,
    document.getElementById("overlay")
  );
};

export default Overlay;
