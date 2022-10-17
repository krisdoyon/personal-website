const btnNavEl = document.querySelector(".main-nav__btn-mobile");
const mainHeaderEl = document.querySelector(".header");
const bodyEl = document.querySelector("body");
const allContainers = document.querySelectorAll(".container");

const allLinks = document.querySelectorAll("a:link");

// Smooth scrolling

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to section
    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();

      const sectionEl = document.querySelector(href);
      // console.log('test');
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      mainHeaderEl.classList.toggle("nav-open");
    }
  });
});

// Sticky Navigation

const sectionHeroEl = document.querySelector(".section-hero");

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) bodyEl.classList.add("sticky");
  else bodyEl.classList.remove("sticky");
};

const navHeight = mainHeaderEl.getBoundingClientRect().height;

const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver(stickyNav, observerOptions);

observer.observe(sectionHeroEl);

/////////////////////////////////////////////////////////
// REVEAL SECTIONS ON SCROLL

const revealContainer = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("container--hidden");
  observer.unobserve(entry.target);
};

const containerObserver = new IntersectionObserver(revealContainer, {
  root: null,
  threshold: 0.15,
});

allContainers.forEach(function (container) {
  container.classList.add("container--hidden");
  containerObserver.observe(container);
});
