const projectsGridEl = document.querySelector(".projects-grid");

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
  "peak-tracker",
  "Peak Tracker",
  "peak tracker website in simulated browser",

  "Peak Tracker is a web app designed to track user progress of mountain summit peakbagging lists. I used the Leaflet library to implement map functionality and a simple NodeJS script to extract relevant mountain summit data from text files downloaded from the USGS Geographic Names Information System. I wrote the code for this project using a class based structure in order to practice object oriented programming concepts."
);

const triviaProject = new Project(
  "trivia",
  "Trivia Game",
  "trivia game website in simulated browser",

  "A simple trivia game using data from The Trivia API (https://the-trivia-api.com). XMLHttpRequest was used to fetch data from the API. In this project I practiced using array methods, event bubbling, using timers and randomizing data."
);

const calcProject = new Project(
  "calc",
  "Calculator",
  "calculator on simulated mobile device",

  "I designed this simple calculator to practice basic Javascript concepts. This was my first independent project using event handlers and DOM manipulation."
);

const cruxProject = new Project(
  "crux",
  "Climbing Gym Website",
  "crux cimbing gym website in simulated browser",

  "This was my first web project using HTML and CSS. I learned/practied BEM conventions, using CSS helper classes, webpage performance analysis using Lighthouse, image optimization, semantic HTML and best practices for accessbility."
);

const weatherProject = new Project(
  "weather",
  "Weather App",
  "weather app in simulated browser",

  "A simple weather app to practice using APIs. I used the OpenStreetMap Nominatim API to implement location search functionality, the OpenWeather and OpenMeteo APIs to fetch weather data, and the lunarphase-js npm module to get the current moon phase. I used the geolocation API to automatically get weather data using the user's location, and Parcel for bundling the application."
);

const forkifyProject = new Project(
  "forkify",
  "Forkify",
  "forkify app in simulated browser",

  "A simple recipe application created through Jonas Schmedmann's Javascript course on Udemy. This project was built using the Module-View-Controller architecture. Features include searching recipes by keywords, adjusting ingredient amounts based on servings, bookmarking recipes and adding personalized recipes. Recipe data comes from the Forkify v2 API and Parcel was used to bundle the application."
);

export const mainProjects = [
  cruxProject,
  calcProject,
  triviaProject,
  weatherProject,
  forkifyProject,
  peakTrackerProject,
];

export const displayProjects = function () {
  mainProjects.forEach((project) => {
    projectsGridEl.insertAdjacentHTML("afterbegin", project.projectHTML);
  });
};
