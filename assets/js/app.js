const hamburger = document.querySelector(".btn-toogle");
const navLink = document.querySelector(".res__menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hide");
  navLink.classList.toggle("hide");
});
