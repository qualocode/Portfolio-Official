// --------------------------------------------
// ------------- MORE INFO BUTTON -------------
// --------------------------------------------

let btn = document.querySelector("#moreInfoBtn");

btn.addEventListener("click", function () {
  let lowerPart = document.querySelector("#aside .lowerPart");
  lowerPart.classList.toggle("active");
});

// --------------------------------------------
// ------------- NAVIGATING PAGES -------------
// --------------------------------------------

let navBtns = document.querySelectorAll(".mainContent #navbar ul li button");
let articles = document.querySelectorAll(".mainContent article");

for (let i = 0; i < navBtns.length; i++) {
  navBtns[i].addEventListener("click", () => {
    for (b of navBtns) {
      b.classList.remove("active");
    }

    for (art of articles) {
      art.classList.remove("active");
    }

    if (articles[i].classList.value == navBtns[i].innerText.toLowerCase()) {
      articles[i].classList.add("active");
    }

    navBtns[i].classList.add("active");
  });
}

// ---------------------------------------------
// ------------- Projects Redirect -------------
// ---------------------------------------------

let proj_1 = document.getElementById("project_1");
let proj_2 = document.getElementById("project_2");
let proj_3 = document.getElementById("project_3");
let proj_4 = document.getElementById("project_4");

function redirectProjects(elm, url) {
  elm.addEventListener("click", function () {
    window.open(url, "_blank");
  });
}

redirectProjects(proj_1, "https://frontendproj1.netlify.app/");
redirectProjects(proj_2, "https://frontendproj2.netlify.app/");
redirectProjects(proj_3, "https://frontendproj03.netlify.app/");
redirectProjects(proj_4, "https://frontendproj4.netlify.app/");
