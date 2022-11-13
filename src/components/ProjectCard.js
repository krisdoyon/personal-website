import React from "react";
import { useGlobalContext } from "../context/context";

const ProjectCard = ({ id, imgSrc, imgAlt, title, gitLink, siteLink }) => {
  const { openModal } = useGlobalContext();
  return (
    <div className="project" data-id={id} onClick={() => openModal(id)}>
      <img className="project__img" src={imgSrc} alt={imgAlt} />
      <div className="project__overlay">
        <h3 className="project__title">{title}</h3>
        <span className="project__more-info">MORE INFO</span>
        <div className="project__btn-box">
          <a
            className="btn btn--light"
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <a
            className="btn btn--light"
            href={siteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
