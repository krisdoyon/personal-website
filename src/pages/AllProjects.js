import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import ProjectRow from "../components/ProjectRow";
import Footer from "../components/Footer";

const AllProjects = () => {
  const { projects } = useGlobalContext();

  const independentProjects = projects.filter((project) =>
    project.categories.includes("independent")
  );

  const educationalProjects = projects.filter((project) =>
    project.categories.includes("educational")
  );
  return (
    <div className="all-projects">
      <div className="all-projects__container">
        <Link to="/" className="btn btn--orange btn-home">
          BACK TO HOME
        </Link>
        <h2 className="heading-secondary">Independent Projects</h2>
        <p className="projects-text">
          Projects which I have designed and created myself:
        </p>
        <ul className="all-projects__grid">
          {independentProjects.map((project) => {
            const { id } = project;
            return <ProjectRow key={id} {...project} />;
          })}
        </ul>

        <h2 className="heading-secondary">Educational Projects</h2>
        <p className="projects-text">
          Projects which I have created through online courses and tutorials:
        </p>
        <ul className="all-projects__grid">
          {educationalProjects.map((project) => {
            const { id } = project;
            return <ProjectRow key={id} {...project} />;
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default AllProjects;