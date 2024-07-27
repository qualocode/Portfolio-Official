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
