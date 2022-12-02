import React from "react";
import styles from "./AllProjects.module.scss";
import { useGlobalContext } from "../../context/context";
import Header from "../../components/Header";
import ProjectRow from "./ProjectRow";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

const AllProjects = () => {
  const { projects } = useGlobalContext();

  const independentProjects = projects.filter((project) =>
    project.categories.includes("independent")
  );

  const educationalProjects = projects.filter((project) =>
    project.categories.includes("educational")
  );
  return (
    <div className={styles.wrapper}>
      <Header sticky="always">
        <Button to="/" color="orange">
          Back home
        </Button>
      </Header>

      <section className={styles.section}>
        <h2>Independent Projects</h2>
        <p className={styles.text}>
          Projects which I have designed and created myself:
        </p>
        <ul className={styles.grid}>
          {independentProjects.map((project) => {
            const { id } = project;
            return <ProjectRow key={id} {...project} />;
          })}
        </ul>

        <h2>Educational Projects</h2>
        <p className={styles.text}>
          Projects which I have created through online courses and tutorials:
        </p>
        <ul className={styles.grid}>
          {educationalProjects.map((project) => {
            const { id } = project;
            return <ProjectRow key={id} {...project} />;
          })}
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default AllProjects;
