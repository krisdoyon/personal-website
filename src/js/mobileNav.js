let navOpen = false;
const headerEl = document.querySelector(".header");

const handleMobileNavClick = function () {
  const topBar = document.querySelector(
    ".main-nav__btn-mobile-bar:nth-child(1)"
  );
  const middleBar = document.querySelector(
    ".main-nav__btn-mobile-bar:nth-child(2)"
  );
  const bottomBar = document.querySelector(
    ".main-nav__btn-mobile-bar:nth-child(3)"
  );
  const barsArr = [...document.querySelectorAll(".main-nav__btn-mobile-bar")];

  headerEl.classList.toggle("nav-open");

  if (navOpen) {
    barsArr.forEach((bar) => {
      bar.style.top = "50%";
      bar.style.left = "50%";
      bar.style.transform = "translate(-50%,-50%)";
      bar.style.marginLeft = "0";
      navOpen = false;
    });
    middleBar.style.opacity = "1";
    topBar.style.marginTop = "-1.2rem";
    bottomBar.style.marginTop = "1.2rem";
  } else if (!navOpen) {
    [topBar, bottomBar].forEach((bar) => {
      bar.style.transform = `rotate(${bar === bottomBar ? "-" : ""}135deg)`;
      bar.style.marginLeft = `${-bar.offsetWidth / 2}px`;
      bar.style.marginTop = "0";
    });
    middleBar.style.opacity = "0";
    navOpen = true;
  }
};

const handleNavLinkClick = function () {
  if (headerEl.classList.contains("nav-open")) {
    headerEl.classList.remove("nav-open");
  } else return;
};

export const initializeMobileNav = function () {
  document
    .querySelector(".main-nav__btn-mobile")
    .addEventListener("click", handleMobileNavClick);

  document
    .querySelector(".main-nav")
    .addEventListener("click", handleNavLinkClick);
};
