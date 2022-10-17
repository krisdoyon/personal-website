const sectionHeroEl = document.querySelector(".section-hero");
const bodyEl = document.querySelector("body");
const headerEl = document.querySelector(".header");

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) bodyEl.classList.add("sticky");
  else bodyEl.classList.remove("sticky");
};

const navHeight = headerEl.getBoundingClientRect().height;

const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

export const addStickyObserver = function () {
  const observer = new IntersectionObserver(stickyNav, observerOptions);
  observer.observe(sectionHeroEl);
};
