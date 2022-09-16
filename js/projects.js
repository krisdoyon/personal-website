const projectGridEl = document.querySelector(".grid--projects");
const projOverlayEl = document.querySelector(".project-overlay");
const projModalEl = document.querySelector(".project-modal");
const projModalOverlayEl = document.querySelector(".project-modal-overlay");

const btnCloseModal = document.querySelector(".close-modal");

const modalTitle = document.querySelector(".modal-title");
const modalTextLabel = document.querySelector(".modal-text");
const modalGitBtn = document.querySelector(".modal-git-btn");
const modalSiteBtn = document.querySelector(".modal-site-btn");
const modalImg = document.querySelector(".modal-img");

// Display projects

class Project {
  constructor(
    id,
    title,
    imgSrc,
    imgAlt,
    imgOrientation,
    gitLink,
    siteLink,
    modalText
  ) {
    this.id = id;
    this.title = title;
    this.imgSrc = imgSrc;
    this.imgAlt = imgAlt;
    this.imgOrientation = imgOrientation;
    this.gitLink = gitLink;
    this.siteLink = siteLink;
    this.modalText = modalText;
    this.projectCardHTML = `<div class="project-card" id="${this.id}">
            <img
              class="project-img"
              src="${this.imgSrc}"
              alt="${this.imgAlt}"
              style="aspect-ratio:${
                this.imgOrientation === "vertical" ? 0.75 : 1.9
              }"
            />
            <div class="project-overlay">
              <h2 class="project-title">${this.title}</h2>
              <span>MORE INFO</span>
              <div class="project-btn-box">
                <a
                  class="project-btn"
                  href="${this.gitLink}"
                  target="_blank"
                  >View on GitHub
                </a>
                <a
                  class="project-btn"
                  href="${this.siteLink}"
                  target="_blank"
                  >View Live Site
                </a>
              </div>
            </div>
          </div>`;
  }
}

const triviaProject = new Project(
  (this.id = "trivia"),
  (this.title = "Trivia Game"),
  (this.imgSrc = "img/trivia-screenshot.webp"),
  (this.imgAlt = "trivia game website in simulated browser"),
  (this.imgOrientation = "horizontal"),
  (this.gitLink = "https://github.com/krisdoyon/trivia"),
  (this.siteLink = "https://trivia.krisdoyon.com"),
  (this.modalText =
    "This was my first project using an API. I used XMLHttpRequest to request trivia data from The Trivia API (https://the-trivia-api.com). I also practiced using array methods, event bubbling, using timers and randomizing data.")
);

const calcProject = new Project(
  (this.id = "calc"),
  (this.title = "Javascript Calculator"),
  (this.imgSrc = "img/calc-screenshot.webp"),
  (this.imgAlt = "calculator on simulated mobile device"),
  (this.imgOrientation = "vertical"),
  (this.gitLink = "https://github.com/krisdoyon/calc"),
  (this.siteLink = "https://calc.krisdoyon.com"),
  (this.modalText =
    "I designed this simple calculator to practice basic Javascript concepts. This was my first independent project using event handlers and DOM manipulation. I plan to refactor the code for this project after learning more about object oriented programming and classes in Javascript.")
);

const cruxProject = new Project(
  (this.id = "crux"),
  (this.title = "Climbing Gym Website"),
  (this.imgSrc = "img/crux-screenshot.webp"),
  (this.imgAlt = "crux cimbing gym website in simulated browser"),
  (this.imgOrientation = "horizontal"),
  (this.gitLink = "https://github.com/krisdoyon/crux"),
  (this.siteLink = "https://crux.krisdoyon.com"),
  (this.modalText =
    "This was my first project using HTML and CSS. I learned several things while working on this project including BEM conventions, using CSS helper classes, webpage performance analysis using Lighthouse, image optimization and semantic HTML/accessbility. ")
);

const mainProjects = [cruxProject, triviaProject, calcProject];

// Display projects
const displayProjects = function (projects) {
  projects.forEach((project) => {
    projectGridEl.insertAdjacentHTML("afterbegin", project.projectCardHTML);
  });
};

displayProjects(mainProjects);

const projectCards = Array.from(document.querySelectorAll(".project-card"));

// Add event listener to each project card, displayM

const updateModal = function (project) {
  modalTitle.textContent = project.title;
  modalTextLabel.textContent = project.modalText;
  modalImg.src = project.imgSrc;
  modalGitBtn.href = project.gitLink;
  modalSiteBtn.href = project.siteLink;
};

projectCards.forEach((projectCard) => {
  projectCard.addEventListener("click", function () {
    // Display the model and disable scroll
    projModalEl.classList.toggle("hidden");
    projModalOverlayEl.classList.toggle("hidden");
    bodyEl.classList.add("overflow-hidden");
    // Look in the main projects array and find the project which matches the HTML object ID
    const projectObj = mainProjects.find(
      (project) => project.id === projectCard.id
    );
    updateModal(projectObj);
  });
});

// Modal window

const openModal = function () {
  projModalEl.classList.remove("hidden");
  projModalOverlayEl.classList.remove("hidden");
  bodyEl.classList.add("overflow-hidden");
};

const closeModal = function () {
  projModalEl.classList.add("hidden");
  projModalOverlayEl.classList.add("hidden");
  bodyEl.classList.remove("overflow-hidden");
};

btnCloseModal.addEventListener("click", closeModal);
projModalOverlayEl.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !projModalEl.classList.contains("hidden")) {
    closeModal();
  }
});
