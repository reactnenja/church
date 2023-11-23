const hamburger = document.querySelector(".btn-toogle");
const navLink = document.querySelector(".navbar-res");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    backtop.classList.add("backtop-show");
  } else {
    backtop.classList.remove("backtop-show");
  }
}
