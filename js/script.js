const btnNavEl = document.querySelector(".btn-mobile-nav");
const mainheaderEl = document.querySelector(".main-header");
const bodyEl = document.querySelector("body");

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

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);


