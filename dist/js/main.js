//Grab hamburger, listen for click to expand the menu
const hamburger = document.querySelector(".navbar-toggler");
const menu = document.querySelector("#nav-items");

hamburger.addEventListener("click", e => {
  menu.classList.add("show");
});

//When clicked outside menu, close it
document.querySelector("body").addEventListener("click", e => {
  if (e.target === hamburger) {
  } else if (menu.classList.contains("show") && e.target !== menu) {
    menu.classList.remove("show");
  }
});

//when clicked close button, remove show class
const exitNav = document.querySelector(".nav-item i");
exitNav.addEventListener("click", () => {
  menu.classList.remove("show");
});
