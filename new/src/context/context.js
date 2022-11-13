import React, { useContext, useEffect, useState, useRef } from "react";
import { mainProjects } from "../data/projects";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  const headerRef = useRef();

  const openModal = (id) => {
    setIsModalOpen(true);
    const project = mainProjects.find((project) => project.id === id);
    setModalProject(project);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalProject(null);
  };

  const revealContainer = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("container-preload");
    observer.unobserve(entry.target);
  };

  const addSectionObserver = function (ref) {
    const observer = new IntersectionObserver(revealContainer, {
      root: null,
      threshold: 0.15,
    });
    observer.observe(ref.current);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        modalProject,
        mainProjects,
        openModal,
        closeModal,
        addSectionObserver,
        headerRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
