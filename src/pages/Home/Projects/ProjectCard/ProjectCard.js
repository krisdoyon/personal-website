import styles from "./ProjectCard.module.scss";
import { useGlobalContext } from "../../../../context/context";
import Button from "../../../../components/Button";

const ProjectCard = ({ id, imgSrc, imgAlt, title, gitLink, siteLink }) => {
  const { openModal } = useGlobalContext();
  return (
    <article
      className={styles.wrapper}
      data-id={id}
      onClick={() => openModal(id)}
    >
      <img className={styles.img} src={imgSrc} alt={imgAlt} />
      <div className={styles.overlay}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles["more-info"]}>MORE INFO</span>
        <div className={styles["btn-container"]}>
          <Button
            Tag="a"
            color="light"
            className={styles.btn}
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </Button>
          <Button
            Tag="a"
            color="light"
            className={styles.btn}
            href={siteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Site
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
