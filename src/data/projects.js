import bookClubImg from "../img/screenshots/book-club-screenshot.webp";
import calcImg from "../img/screenshots/calc-screenshot.webp";
import cocktailsImg from "../img/screenshots/cocktails-screenshot.webp";
import cruxImg from "../img/screenshots/crux-screenshot.webp";
import forkifyImg from "../img/screenshots/forkify-screenshot.webp";
import natoursImg from "../img/screenshots/natours-screenshot.webp";
import nexterImg from "../img/screenshots/nexter-screenshot.webp";
import trilloImg from "../img/screenshots/trillo-screenshot.webp";
import personalWebsiteImg from "../img/screenshots/personal-website-screenshot.webp";
import peakTrackerImg from "../img/screenshots/peak-tracker-screenshot.webp";
import seedsImg from "../img/screenshots/seeds-screenshot.webp";
import triviaImg from "../img/screenshots/trivia-screenshot.webp";
import weatherImg from "../img/screenshots/weather-screenshot.webp";

class Project {
  constructor(id, title, imgSrc, modalText, categories) {
    this.id = id;
    this.title = title;
    this.imgSrc = imgSrc;
    this.imgAlt = `${this.title} screenshot`;
    this.gitLink = `https://github.com/krisdoyon/${this.id}`;
    this.siteLink = `https://${this.id.replaceAll("-", "")}.krisdoyon.com`;
    this.modalText = modalText;
    this.categories = categories;
  }
}

// INDEPENDENT

const seeds = new Project(
  "seeds",
  "Harvest Seed Company",
  seedsImg,
  "An ecommerce site for a fictional vegetable seed company built with React and Redux Toolkit. I used React Router for client side routing and SCSS modules for styling. Features include adding items to cart and wishlist, filtering and sorting products, applying promo codes, checkout form with validation and submitting orders with automatic product in stock quantity updates.",
  ["featured", "independent"]
);

const peakTracker = new Project(
  "peak-tracker",
  "Peak Tracker",
  peakTrackerImg,
  "A web app designed to track user progress of mountain summit peakbagging lists. I built this project using the model-view-controller architecture. I extracted relevant mountain data from text files downloaded from the USGS Geographic Names Information System using a NodeJS script. In addition to MVC, I practiced event delegation, DOM manipulation and state management using local storage.",
  ["featured", "independent"]
);

const bookClub = new Project(
  "book-club",
  "Book Club Website",
  bookClubImg,
  "A website I built using React for my book club to track books read and book ratings. I used the chart.js library to implement chart components. I practiced using react router and managing controlled inputs in this project. I downloaded book information and ratings data from a spreadsheet as a .csv file and wrote the data to JSON using a Node JS script.",
  ["featured", "independent"]
);

const trivia = new Project(
  "trivia",
  "Trivia Game",
  triviaImg,
  "A trivia game using data from The Trivia API (https://the-trivia-api.com). I originally built this project using Vanilla JS and recently refactored it using React to practice using the useReducer hook and state management. In this project I also practiced using array methods, using timers and randomizing data.",
  ["featured", "independent"]
);

const calc = new Project(
  "calc",
  "Calculator",
  calcImg,
  "I designed this simple calculator to practice basic Javascript concepts. This was my first independent project using event handlers and DOM manipulation.",
  ["independent"]
);

const crux = new Project(
  "crux",
  "Climbing Gym Website",
  cruxImg,
  "This was my first web project using HTML and CSS. I learned and practied BEM conventions, using CSS helper classes, webpage performance analysis using Lighthouse, image optimization, semantic HTML and best practices for accessbility.",
  ["featured", "independent"]
);

const weather = new Project(
  "weather",
  "Weather App",
  weatherImg,
  "A simple weather app to practice using APIs. I used the OpenStreetMap Nominatim API to implement location search functionality, the OpenWeather and OpenMeteo APIs to fetch weather data, and the lunarphase-js module (via npm) to get the current moon phase. I used the geolocation API to automatically get weather data using the user's location, and Parcel for bundling the application.",
  ["featured", "independent"]
);

const personalWebsite = new Project(
  "personal-website",
  "Personal Website",
  personalWebsiteImg,
  "I built this website to serve as my web developer portfolio. It is built with React and uses React Router. I practiced building reusable react components, react hooks, using the context API and using the intersection observer API.",
  ["independent"]
);

personalWebsite.siteLink = "https://www.krisdoyon.com";

// EDUCATIONAL

const forkify = new Project(
  "forkify",
  "Forkify",
  forkifyImg,
  "A JavaScript application created through Jonas Schmedtmann's Javascript course on Udemy. This project was built using the Module-View-Controller architecture. Features include searching recipes by keywords, adjusting ingredient amounts based on servings, bookmarking recipes and adding personalized recipes. Recipe data comes from the Forkify v2 API and Parcel was used to bundle the application.",
  ["educational"]
);

const natours = new Project(
  "natours",
  "Natours",
  natoursImg,
  "A mock webpage for an outdoor touring company completed as a part of Jonas Schmedtmann's Advances CSS and Sass course on Udemy. In this project I practiced BEM conventions, Sass, sematic HTML, CSS grid, flexbox, CSS animations, responsive design and custom form inputs.",
  ["educational"]
);

const nexter = new Project(
  "nexter",
  "Nexter",
  nexterImg,
  "A mock webpage for a realtor company completed as a part of Jonas Schmedtmann's Advances CSS and Sass course on Udemy. In this project I practiced BEM conventions, sematic HTML, Sass, CSS grid, flexbox and responsive design.",
  ["educational"]
);

const trillo = new Project(
  "trillo",
  "Trillo",
  trilloImg,
  "A mock webpage for a travel application completed as a part of Jonas Schmedtmann's Advances CSS and Sass course on Udemy. In this project I practiced BEM conventions, sematic HTML, Sass, flexbox and responsive design.",
  ["educational"]
);

const cocktails = new Project(
  "cocktails",
  "Cocktails DB",
  cocktailsImg,
  "An app built with React for searching and displaying details for cocktails, completed as a part of John Smilga's React course on Udemy. In this project I practiced building react components, react hooks, react router, fetching data and using the context API.",
  ["educational"]
);

export const projects = [
  seeds,
  personalWebsite,
  peakTracker,
  bookClub,
  forkify,
  weather,
  trivia,
  calc,
  crux,
  natours,
  nexter,
  trillo,
  cocktails,
];
