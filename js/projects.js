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
  constructor(id, title, imgAlt, imgOrientation, modalText) {
    this.id = id;
    this.title = title;
    this.imgSrc = `img/${this.id}-screenshot.webp`;
    this.imgAlt = imgAlt;
    this.imgOrientation = imgOrientation;
    this.gitLink = `https://github.com/krisdoyon/${this.id}`;
    this.siteLink = `https://${this.id.replaceAll("-", "")}.krisdoyon.com`;
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

const peakTrackerProject = new Project(
  (this.id = "peak-tracker"),
  (this.title = "Peak Tracker"),
  (this.imgAlt = "peak tracker website in simulated browser"),
  (this.imgOrientation = "horizontal"),
  (this.modalText =
    "Peak Tracker is a web app designed to track user progress of mountain summit peakbagging lists. I used the Leaflet library to implement map functionality and a simple NodeJS script to extract relevant mountain summit data from text files downloaded from the USGS Geographic Names Information System. I wrote the code for this project using a class based structure in order to practice object oriented programming concepts.")
);

const triviaProject = new Project(
  (this.id = "trivia"),
  (this.title = "Trivia Game"),
  (this.imgAlt = "trivia game website in simulated browser"),
  (this.imgOrientation = "vertical"),
  (this.modalText =
    "A simple trivia game using data from The Trivia API (https://the-trivia-api.com). XMLHttpRequest was used to fetch data from the API. In this project I practiced using array methods, event bubbling, using timers and randomizing data.")
);

const calcProject = new Project(
  (this.id = "calc"),
  (this.title = "Calculator"),
  (this.imgAlt = "calculator on simulated mobile device"),
  (this.imgOrientation = "vertical"),
  (this.modalText =
    "I designed this simple calculator to practice basic Javascript concepts. This was my first independent project using event handlers and DOM manipulation.")
);

const cruxProject = new Project(
  (this.id = "crux"),
  (this.title = "Climbing Gym Website"),
  (this.imgAlt = "crux cimbing gym website in simulated browser"),
  (this.imgOrientation = "horizontal"),
  (this.modalText =
    "This was my first web project using HTML and CSS. I learned/practied BEM conventions, using CSS helper classes, webpage performance analysis using Lighthouse, image optimization, semantic HTML and best practices for accessbility.")
);

const weatherProject = new Project(
  (this.id = "weather"),
  (this.title = "Weather App"),
  (this.imgAlt = "weather app in simulated browser"),
  (this.imgOrientation = "horizontal"),
  (this.modalText =
    "A simple weather app to practice using APIs. I used the OpenStreetMap Nominatim API to implement location search functionality, the OpenWeather and OpenMeteo APIs to fetch weather data, and the lunarphase-js npm module to get the current moon phase. I used the geolocation API to automatically get weather data using the user's location, and Parcel for bundling the application.")
);

const forkifyProject = new Project(
  (this.id = "forkify"),
  (this.title = "Forkify"),
  (this.imgAlt = "forkify app in simulated browser"),
  (this.imgOrientation = "horizontal"),
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
