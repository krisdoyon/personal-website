import React from "react";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

const Projects = () => {
  const { projects } = useGlobalContext();

  const featuredProjects = projects.filter((project) =>
    project.categories.includes("featured")
  );

  return (
    <Section className="section-projects" id="projects">
      <h2 className="heading-secondary">Projects</h2>
      <p className="projects-text">Check out some of my recent work:</p>
      <div className="projects-grid">
        {featuredProjects.map((project) => {
          const { id } = project;
          return <ProjectCard key={id} {...project}></ProjectCard>;
        })}
        <div className="project coming-soon"></div>
      </div>
      <Link to="/all-projects" className="btn btn--orange btn-view-all">
        VIEW ALL
      </Link>
    </Section>
  );
};

export default Projects;
