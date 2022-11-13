const stickyNav = function (entries) {
  const bodyEl = document.querySelector("body");
  const [entry] = entries;
  if (!entry.isIntersecting) bodyEl.classList.add("sticky");
  else bodyEl.classList.remove("sticky");
};

export const addStickyObserver = function () {
  const navHeight = document
    .querySelector(".header")
    .getBoundingClientRect().height;

  const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  };
  const sectionHeroEl = document.querySelector(".section-hero");

  const observer = new IntersectionObserver(stickyNav, observerOptions);
  observer.observe(sectionHeroEl);
};
