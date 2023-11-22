const hamburger = document.querySelector(".btn-toogle");
const navLink = document.querySelector(".navbar-res");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});
