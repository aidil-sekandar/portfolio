const hamburgerInactive = document.querySelector(".hamburger-inactive");
const hamburger = document.querySelector(".hamburger");
const nav = document.getElementById("nav");

const main = (width) => {
  if (width <= 780) {
    nav.setAttribute("class", "");
    hamburger.style.display = "none";
    hamburgerInactive.style.display = "block";

    hamburgerInactive.addEventListener("click", () => {
      nav.classList.add("active");
      hamburger.style.display = "flex";
      hamburgerInactive.style.display = "none";
    });

    hamburger.addEventListener("click", () => {
      nav.classList.remove("active");
      hamburger.style.display = "none";
      hamburgerInactive.style.display = "block";
    });
  } else if (width >= 780) {
    nav.setAttribute("class", "");
    hamburger.style.display = "none";
    hamburgerInactive.style.display = "none";
  }
};

window.onload = () => {
  main(window.innerWidth);
};

window.onresize = () => {
  main(window.innerWidth);
};
