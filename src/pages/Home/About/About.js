import styles from "./About.module.scss";
import headshot from "../../../img/headshot.webp";
import Section from "../../../components/Section";
import Button from "../../../components/Button";

const About = () => {
  return (
    <Section className={styles.wrapper} id="about">
      <div className={styles.grid}>
        <div className={styles["text-box"]}>
          <h2>About</h2>
          <p className={styles.text}>
            <div>
              I'm currently a software developer at{" "}
              <a
                href={"https://www.avenirhealth.org/"}
                rel={"noopener noreferrer"}
                target={"_blank"}
              >
                Avenir Health
              </a>{" "}
              where I work on web applications targeting various public health
              areas, including child/maternal health, health systems planning
              and costing, Tuberculosis, and HIV/AIDS. My day to day work
              involves writing frontend React code where I build user interfaces
              from wireframes, implement state management, and integrate clients
              with backend services. I collaborate closely with modelers to
              deliver applications that effectively support public health
              initiatives and objectives.
            </div>
            <br />
            <div>
              I really enjoy problem solving and learning in all aspects of my
              life. Before transitioning into software development I was a high
              school physics/astronomy teacher, and I still have an avid passion
              for astronomy. In my free time I also enjoy backpacking, climbing
              and gardening.
            </div>
            <Button
              Tag="a"
              color="orange"
              className={styles.contact}
              href="mailto:kris.doyon@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              get in touch
            </Button>
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
