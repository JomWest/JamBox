'use strict';


const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }




const navbar = document.querySelector("[data-navbar]");
const navbarOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarCloseBtn = document.querySelector("[data-nav-close-btn]");

navbarOpenBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
});

navbarCloseBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
});




const goTopBtn = document.querySelector("[data-go-top]");


window.addEventListener("scroll", function () {

  if (this.window.scrollY >= 500) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});
let prevScrollPos = window.pageYYOffset;
window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {

    navbar.classList.add("visible");
    navbar.classList.remove("hidden");
  } else {

    navbar.classList.add("hidden");
    navbar.classList.remove("visible");
  }

  prevScrollPos = currentScrollPos;
});
document.addEventListener('DOMContentLoaded', function () {
  const navOpenBtn = document.getElementById('nav-open-btn');
  const navCloseBtn = document.getElementById('nav-close-btn');


  navOpenBtn.addEventListener('click', function () {
      navOpenBtn.style.display = 'none'; 
      navCloseBtn.style.display = 'block'; 
  });

  navCloseBtn.addEventListener('click', function () {
      navCloseBtn.style.display = 'none'; 
      navOpenBtn.style.display = 'block'; 
  });
});