const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".Header");

btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });