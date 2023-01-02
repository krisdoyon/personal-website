import styles from "./About.module.scss";
import headshot from "../../../img/headshot.webp";
import Section from "../../../components/Section";

const About = () => {
  return (
    <Section className={styles.wrapper} id="about">
      <div className={styles.grid}>
        <div className={styles["text-box"]}>
          <h2>About</h2>
          <p className={styles.text}>
            I'm a self taught software developer who enjoys problem solving and
            learning new technologies. Since transitioning out of my job as a
            high school science teacher I have been teaching myself to code full
            time with a focus in front-end web development. I am actively
            seeking a full time frontend software role.
          </p>
        </div>
        <img
          className={styles.img}
          src={headshot}
          alt="Headshot of Kris Doyon"
        />
      </div>
    </Section>
  );
};

export default About;
