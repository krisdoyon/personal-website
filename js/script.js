const btnNavEl = document.querySelector(".btn-mobile-nav");
const mainheaderEl = document.querySelector(".main-header");
const bodyEl = document.querySelector("body");
const allSections = document.querySelectorAll(".section");

btnNavEl.addEventListener("click", function () {
  mainheaderEl.classList.toggle("nav-open");
  bodyEl.classList.toggle("overflow-hidden");
});

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
      headerEl.classList.toggle("nav-open");
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

const navHeight = mainheaderEl.getBoundingClientRect().height;

const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver(stickyNav, observerOptions);

observer.observe(sectionHeroEl);

/////////////////////////////////////////////////////////
// REVEAL SECTIONS ON SCROLL

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
});
