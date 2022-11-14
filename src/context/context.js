import React, { useContext, useState, useRef } from "react";
import { projects } from "../data/projects";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  const headerRef = useRef();

  const openModal = (id) => {
    setIsModalOpen(true);
    const project = projects.find((project) => project.id === id);
    setModalProject(project);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalProject(null);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        modalProject,
        openModal,
        closeModal,
        headerRef,
        projects,
        activeSection,
        setActiveSection,
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
