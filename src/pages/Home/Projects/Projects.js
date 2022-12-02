import styles from "./Projects.module.scss";
import { useGlobalContext } from "../../../context/context";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import Section from "../../../components/Section";
import Button from "../../../components/Button";

const Projects = () => {
  const { projects } = useGlobalContext();

  const featuredProjects = projects.filter((project) =>
    project.categories.includes("featured")
  );

  return (
    <Section className={styles.wrapper} id="projects">
      <h2>Projects</h2>
      <p className={styles.text}>Check out some of my recent work:</p>
      <div className={styles.grid}>
        {featuredProjects.map((project) => {
          const { id } = project;
          return <ProjectCard key={id} {...project}></ProjectCard>;
        })}
        {/* <div className="project coming-soon"></div> */}
      </div>
      <Button
        to="/all-projects"
        color="orange"
        className={styles["btn-view-all"]}
      >
        VIEW ALL
      </Button>
    </Section>
  );
};

export default Projects;
