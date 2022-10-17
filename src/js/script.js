import { addMobileNavHandler } from "./mobileNav.js";
import { addStickyObserver } from "./stickyNav.js";
import { addSectionObserver } from "./revealSections.js";
import { initializeModal } from "./modal.js";
import { displayProjects } from "./projects.js";

const init = function () {
  addMobileNavHandler();
  addStickyObserver();
  addSectionObserver();
  initializeModal();
  displayProjects();
};

init();
