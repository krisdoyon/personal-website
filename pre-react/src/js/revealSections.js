const allContainers = document.querySelectorAll(".container");

const revealContainer = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("container--hidden");
  observer.unobserve(entry.target);
};

const observerOptions = {
  root: null,
  threshold: 0.15,
};

export const addSectionObserver = function () {
  const observer = new IntersectionObserver(revealContainer, observerOptions);
  allContainers.forEach((container) => {
    container.classList.add("container--hidden");
    observer.observe(container);
  });
};
