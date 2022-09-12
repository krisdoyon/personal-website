const projectGridEl = document.querySelector(".grid--projects");
const projOverlayEl = document.querySelector(".project-overlay");
const projModalEl = document.querySelector(".project-modal");
const projModalOverlayEl = document.querySelector(".project-modal-overlay");

const btnCloseModal = document.querySelector(".close-modal");

const modalTitle = document.querySelector(".modal-title");
const modalText = document.querySelector(".modal-text");
const modalGitBtn = document.querySelector(".modal-git-btn");
const modalSiteBtn = document.querySelector(".modal-site-btn");
const modalImg = document.querySelector(".modal-img");

// Display projects

const calcProject = {
  id: "calc",
  title: "Javascript Calculator",
  imgSrc: "img/calc-screenshot.webp",
  imgAlt: "calculator on simulated mobile device",
  gitLink: "https://github.com/krisdoyon/calc",
  siteLink: "https://calc.krisdoyon.com",
  modalText:
    "I designed this simple calculator to practice basic Javascript concepts. This was my first independent project using event handlers and DOM manipulation. I plan to refactor the code for this project after learning more about object oriented programming and classes in Javascript.",
};

const cruxProject = {
  id: "crux",
  title: "Climbing Gym Website",
  imgSrc: "img/crux-screenshot.webp",
  imgAlt: "crux cimbing gym website in simulated browser",
  gitLink: "https://github.com/krisdoyon/crux",
  siteLink: "https://crux.krisdoyon.com",
  modalText:
    "This was my first project using HTML and CSS. I learned several things while working on this project including BEM conventions, using CSS helper classes, webpage performance analysis using Lighthouse, image optimization and semantic HTML/accessbility. ",
};

const mainProjects = [cruxProject, calcProject];

// Display projects
const displayProjects = function (projects) {
  projects.forEach((project) => {
    project.projectCardHTML = `<div class="project-card" id="${project.id}">
            <img
              class="project-img"
              src="${project.imgSrc}"
              alt="${project.imgAlt}"
            />
            <div class="project-overlay">
              <h2 class="project-title">${project.title}</h2>
              <span>MORE INFO</span>
              <div class="project-btn-box">
                <a
                  class="project-btn"
                  href="${project.gitLink}"
                  target="_blank"
                  >View on GitHub
                </a>
                <a
                  class="project-btn"
                  href="${project.siteLink}"
                  target="_blank"
                  >View Live Site
                </a>
              </div>
            </div>
          </div>`;
    projectGridEl.insertAdjacentHTML("afterbegin", project.projectCardHTML);
  });
};

displayProjects(mainProjects);

const projectCards = Array.from(document.querySelectorAll(".project-card"));

// Add event listener to each project card, displayM

const updateModal = function (project) {
  modalTitle.textContent = project.title;
  modalText.textContent = project.modalText;
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
