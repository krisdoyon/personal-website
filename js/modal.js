import { mainProjects } from "./projects.js";

const projectsGridEl = document.querySelector(".projects-grid");
const modalEl = document.querySelector(".modal");
const modalOverlayEl = document.querySelector(".modal__overlay");
const btnCloseModal = document.querySelector(".modal__close-btn");
const modalTitleLabel = document.querySelector(".modal__title");
const modalTextLabel = document.querySelector(".modal__text");
const modalGitBtn = document.querySelector(".modal__git-btn");
const modalSiteBtn = document.querySelector(".modal__site-btn");
const modalImg = document.querySelector(".modal__img");

const updateModal = function (projectID) {
  const project = mainProjects.find((proj) => proj.id === projectID);
  modalTitleLabel.textContent = project.title;
  modalTextLabel.textContent = project.modalText;
  modalImg.src = project.imgSrc;
  modalGitBtn.href = project.gitLink;
  modalSiteBtn.href = project.siteLink;
};

const openModal = function () {
  modalEl.classList.remove("hidden");
  modalOverlayEl.classList.remove("hidden");
};

const closeModal = function () {
  modalEl.classList.add("hidden");
  modalOverlayEl.classList.add("hidden");
};

export const initializeModal = function () {
  projectsGridEl.addEventListener("click", function (e) {
    const clicked = e.target.closest(".project");
    if (!clicked) return;
    updateModal(clicked.dataset.id);
    openModal();
  });
  btnCloseModal.addEventListener("click", closeModal);
  modalOverlayEl.addEventListener("click", closeModal);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !projModalEl.classList.contains("hidden")) {
      closeModal();
    }
  });
};
