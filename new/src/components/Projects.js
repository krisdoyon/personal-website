import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context/context";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { mainProjects, addSectionObserver } = useGlobalContext();
  const containerRef = useRef();

  useEffect(() => {
    addSectionObserver(containerRef);
  }, []);

  return (
    <section className="section section-projects" id="projects">
      <div className="container container-preload" ref={containerRef}>
        <h2 className="heading-secondary">Projects</h2>
        <p className="projects-text">Check out some of my recent work:</p>
        <div className="projects-grid">
          {mainProjects.map((project) => {
            const { id } = project;
            return <ProjectCard key={id} {...project}></ProjectCard>;
          })}
          {/* <div className="project coming-soon"></div> */}
        </div>
        <button className="btn btn--orange btn-view-all">VIEW ALL</button>
      </div>
    </section>
  );
};

export default Projects;
