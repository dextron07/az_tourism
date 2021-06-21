const sideBar = document.querySelector("#side-bar");

const changeSideBar = () => {
  let showcaseAppear = document.querySelector(".images");
  let showcaseAppearPosition = showcaseAppear.getBoundingClientRect().top * 2;

  let popularDestinationAppear = document.querySelector(
    "#section-destinations .slide-show"
  );
  let popularDestinationAppearPosition =
    popularDestinationAppear.getBoundingClientRect().top;

  let popularPackageAppear = document.querySelector(
    "#section-packages .slide-show"
  );
  let popularPackageAppearPosition =
    popularPackageAppear.getBoundingClientRect().top;

  let servicesAppear = document.querySelector(".section-services-cards");
  let servicesAppearPosition = servicesAppear.getBoundingClientRect().top;

  let screenPosition = window.innerHeight / 1.3;

  let bar1 = document.querySelector("#bar-1");
  let bar2 = document.querySelector("#bar-2");
  let bar3 = document.querySelector("#bar-3");
  let bar4 = document.querySelector("#bar-4");

  if (showcaseAppearPosition < screenPosition) {
    bar1.classList.add("bar-active");
    bar2.classList.remove("bar-active");
    bar3.classList.remove("bar-active");
    bar4.classList.remove("bar-active");

    // popularPackageAppear.classList.remove("slide-show-appear");
    // popularDestinationAppear.classList.remove("slide-show-appear");
  }

  if (popularDestinationAppearPosition < screenPosition) {
    bar1.classList.remove("bar-active");
    bar3.classList.remove("bar-active");
    bar4.classList.remove("bar-active");
    bar2.classList.add("bar-active");

    popularDestinationAppear.classList.add("slide-show-appear");
    // popularPackageAppear.classList.remove("slide-show-appear");
  }

  if (popularPackageAppearPosition < screenPosition) {
    bar2.classList.remove("bar-active");
    bar1.classList.remove("bar-active");
    bar3.classList.add("bar-active");
    bar4.classList.remove("bar-active");

    popularPackageAppear.classList.add("slide-show-appear");
    // popularDestinationAppear.classList.remove("slide-show-appear");
  }

  if (servicesAppearPosition < screenPosition) {
    bar1.classList.remove("bar-active");
    bar2.classList.remove("bar-active");
    bar3.classList.remove("bar-active");
    bar4.classList.add("bar-active");
  }
};

const toggleMenu = (showMenu) => {
  let menu = document.querySelector("nav");
  let header = document.querySelector("header");

  if (showMenu) {
    menu.classList.add("active");
    header.classList.add("inactive");
  } else {
    menu.classList.remove("active");
    header.classList.remove("inactive");
  }
};

window.addEventListener("scroll", changeSideBar);
