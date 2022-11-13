import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { projects, addSectionObserver } = useGlobalContext();
  const containerRef = useRef();

  console.log(projects);

  const featuredProjects = projects.filter((project) =>
    project.categories.includes("featured")
  );

  useEffect(() => {
    addSectionObserver(containerRef);
  }, [addSectionObserver]);

  return (
    <section className="section section-projects" id="projects">
      <div className="container container-preload" ref={containerRef}>
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
      </div>
    </section>
  );
};

export default Projects;
