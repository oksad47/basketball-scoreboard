// Section for selectors \\

let homeScoring = document.getElementById("home-scoring");
let home1Point = document.getElementById("home-1point");
let home2Points = document.getElementById("home-2points");
let home3Points = document.getElementById("home-3points");
let homeReset = document.getElementById("home-reset");

let guestScoring = document.getElementById("guest-scoring");
let guest1Point = document.getElementById("guest-1point");
let guest2Points = document.getElementById("guest-2points");
let guest3Points = document.getElementById("guest-3points");
let guestReset = document.getElementById("guest-reset");

// Section for Home scoring \\

home1Point.addEventListener("click", function () {
  homeScoring.textContent++;
});

home2Points.addEventListener("click", function () {
  homeScoring.textContent = Number(homeScoring.textContent) + 2;
});

home3Points.addEventListener("click", function () {
  homeScoring.textContent = Number(homeScoring.textContent) + 3;
});

homeReset.addEventListener("click", function () {
  homeScoring.textContent = 0;
});

// Section for Guest scoring \\

guest1Point.addEventListener("click", function () {
  guestScoring.textContent++;
});

guest2Points.addEventListener("click", function () {
  guestScoring.textContent = Number(guestScoring.textContent) + 2;
});

guest3Points.addEventListener("click", function () {
  guestScoring.textContent = Number(guestScoring.textContent) + 3;
});

guestReset.addEventListener("click", function () {
  guestScoring.textContent = 0;
});
