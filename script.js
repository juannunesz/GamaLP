const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () => header.classList.toggle("active"));

// hamburger.addEventListener("click", () => [
//     console.log ("teste")
// ])

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        window.scrollTo({
          behavior: 'smooth',
          top: targetSection.offsetTop,
        });
      }
    });
});