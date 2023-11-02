const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () => header.classList.toggle("active"));

// hamburger.addEventListener("click", () => [
//     console.log ("teste")
// ])