import styles from "./Skill.module.scss";
import sprite from "../../../../img/sprite.svg";

const Skill = ({ title }) => {
  return (
    <article className={styles.wrapper}>
      <svg className={styles.icon}>
        <use href={`${sprite}#icon-${title.toLowerCase()}`}></use>
      </svg>
      <h3 className={styles.title}>{title}</h3>
    </article>
  );
};

export default Skill;
