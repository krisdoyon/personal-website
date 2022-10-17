const projectsGridEl = document.querySelector(".projects-grid");
const modalEl = document.querySelector(".modal");
const modalOverlayEl = document.querySelector(".modal__overlay");

const btnCloseModal = document.querySelector(".modal__close-btn");

const modalTitleLabel = document.querySelector(".modal__title");
const modalTextLabel = document.querySelector(".modal__text");
const modalGitBtn = document.querySelector(".modal__git-btn");
const modalSiteBtn = document.querySelector(".modal__site-btn");
const modalImg = document.querySelector(".modal__img");

// Display projects

class Project {
  constructor(id, title, imgAlt, modalText) {
    this.id = id;
    this.title = title;
    this.imgSrc = `img/${this.id}-screenshot.webp`;
    this.imgAlt = imgAlt;
    this.gitLink = `https://github.com/krisdoyon/${this.id}`;
    this.siteLink = `https://${this.id.replaceAll("-", "")}.krisdoyon.com`;
    this.modalText = modalText;
    this.projectHTML = `<div class="project" data-id="${this.id}">
            <img
              class="project__img"
              src="${this.imgSrc}"
              alt="${this.imgAlt}"
            />
            <div class="project__overlay">
              <h2 class="project__title">${this.title}</h2>
              <span class="project__more-info">MORE INFO</span>
              <div class="project__btn-box">
                <a
                  class="btn btn--light"
                  href="${this.gitLink}"
                  target="_blank"
                  >View on GitHub
                </a>
                <a
                  class="btn btn--light"
                  href="${this.siteLink}"
                  target="_blank"
                  >View Live Site
                </a>
              </div>
            </div>
          </div>`;
  }
}

const peakTrackerProject = new Project(
  (this.id = "peak-tracker"),
  (this.title = "Peak Tracker"),
  (this.imgAlt = "peak tracker website in simulated browser"),
  (this.modalText =
    "Peak Tracker is a web app designed to track user progress of mountain summit peakbagging lists. I used the Leaflet library to implement map functionality and a simple NodeJS script to extract relevant mountain summit data from text files downloaded from the USGS Geographic Names Information System. I wrote the code for this project using a class based structure in order to practice object oriented programming concepts.")
);

const triviaProject = new Project(
  (this.id = "trivia"),
  (this.title = "Trivia Game"),
  (this.imgAlt = "trivia game website in simulated browser"),
  (this.modalText =
    "A simple trivia game using data from The Trivia API (https://the-trivia-api.com). XMLHttpRequest was used to fetch data from the API. In this project I practiced using array methods, event bubbling, using timers and randomizing data.")
);

const calcProject = new Project(
  (this.id = "calc"),
  (this.title = "Calculator"),
  (this.imgAlt = "calculator on simulated mobile device"),
  (this.modalText =
    "I designed this simple calculator to practice basic Javascript concepts. This was my first independent project using event handlers and DOM manipulation.")
);

const cruxProject = new Project(
  (this.id = "crux"),
  (this.title = "Climbing Gym Website"),
  (this.imgAlt = "crux cimbing gym website in simulated browser"),
  (this.modalText =
    "This was my first web project using HTML and CSS. I learned/practied BEM conventions, using CSS helper classes, webpage performance analysis using Lighthouse, image optimization, semantic HTML and best practices for accessbility.")
);

const weatherProject = new Project(
  (this.id = "weather"),
  (this.title = "Weather App"),
  (this.imgAlt = "weather app in simulated browser"),
  (this.modalText =
    "A simple weather app to practice using APIs. I used the OpenStreetMap Nominatim API to implement location search functionality, the OpenWeather and OpenMeteo APIs to fetch weather data, and the lunarphase-js npm module to get the current moon phase. I used the geolocation API to automatically get weather data using the user's location, and Parcel for bundling the application.")
);

const forkifyProject = new Project(
  (this.id = "forkify"),
  (this.title = "Forkify"),
  (this.imgAlt = "forkify app in simulated browser"),
  (this.modalText =
    "A simple recipe application created through Jonas Schmedmann's Javascript course on Udemy. This project was built using the Module-View-Controller architecture. Features include searching recipes by keywords, adjusting ingredient amounts based on servings, bookmarking recipes and adding personalized recipes. Recipe data comes from the Forkify v2 API and Parcel was used to bundle the application.")
);

const mainProjects = [
  cruxProject,
  calcProject,
  triviaProject,
  weatherProject,
  forkifyProject,
  peakTrackerProject,
];

const displayProjects = function (projects) {
  projects.forEach((project) => {
    projectsGridEl.insertAdjacentHTML("afterbegin", project.projectHTML);
  });
};

displayProjects(mainProjects);

const updateModal = function (projectID) {
  const project = mainProjects.find((proj) => proj.id === projectID);
  modalTitleLabel.textContent = project.title;
  console.log(project);
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
