import React from "react";
import { useGlobalContext } from "../context/context";

const ProjectRow = ({ id, title }) => {
  const { openModal } = useGlobalContext();
  return (
    <li className="project-row">
      <h3 className="project-row__heading">{title}</h3>
      <button className="btn btn--orange" onClick={() => openModal(id)}>
        MORE INFO
      </button>
    </li>
  );
};

export default ProjectRow;
