let hamburger = document.querySelector(".ham");
let navList = document.querySelector(".nav-list");
let links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function () {
    this.classList.toggle("click");
    navList.classList.toggle("open");
    });

