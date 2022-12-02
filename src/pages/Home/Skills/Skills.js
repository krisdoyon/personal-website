import styles from "./Skills.module.scss";
import Section from "../../../components/Section";
import Skill from "./Skill";

const Skills = () => {
  const skills = [
    "React",
    "Javascript",
    "Redux",
    "Git",
    "HTML",
    "CSS",
    "Sass",
    "npm",
  ];

  const currentlyLearning = ["Typescript", "Next.js"];

  return (
    <Section className={styles.wrapper} id="skills">
      <h2>Skills</h2>
      <p className={styles.text}>
        I have experience working with the following technologies:
      </p>
      <div className={styles.grid}>
        {skills.map((title, i) => (
          <Skill key={i} title={title}></Skill>
        ))}
      </div>
      <p className={styles.text}>Currently I'm learning:</p>
      <div className={styles.grid}>
        {currentlyLearning.map((title, i) => (
          <Skill key={i} title={title}></Skill>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
