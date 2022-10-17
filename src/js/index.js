import { initializeMobileNav } from "./mobileNav.js";
import { addSectionObserver } from "./revealSections.js";
import { initializeModal } from "./modal.js";
import { displayProjects } from "./projects.js";

const init = function () {
  initializeMobileNav();
  addSectionObserver();
  initializeModal();
  displayProjects();
};

init();
