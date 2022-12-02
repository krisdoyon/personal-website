import styles from "./ProjectRow.module.scss";
import { useGlobalContext } from "../../../context/context";
import Button from "../../../components/Button";

const ProjectRow = ({ id, title }) => {
  const { openModal } = useGlobalContext();
  return (
    <li className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <Button
        color="orange"
        className={styles.btn}
        onClick={() => openModal(id)}
      >
        MORE INFO
      </Button>
    </li>
  );
};

export default ProjectRow;
