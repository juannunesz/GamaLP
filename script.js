const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");

const hbLink = document.querySelector(".hb-link");
const hbLink2 = document.querySelector(".hb-link2");
const hbLink3 = document.querySelector(".hb-link3");

hamburger.addEventListener("click", () => header.classList.toggle("active"));

hbLink.addEventListener("click", () => header.classList.toggle("active"));
hbLink2.addEventListener("click", () => header.classList.toggle("active"));
hbLink3.addEventListener("click", () => header.classList.toggle("active"));

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


document.addEventListener('DOMContentLoaded', function () {
  function copyToClipboard(elementId) {
      var element = document.getElementById(elementId);
      var text = element.textContent || element.innerText;

      var textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);

      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      // Exibe o feedback de cópia
      var feedback = element.querySelector('.copy-feedback');
      feedback.style.display = 'inline-block';
      setTimeout(function () {
          feedback.style.display = 'none';
      }, 1000); // Esconde o feedback após 1 segundo
  }

  var phone = document.getElementById('phone');
  var instagram = document.getElementById('instagram');
  var email = document.getElementById('email');

  phone.addEventListener('click', function () {
      copyToClipboard('phone');
  });

  instagram.addEventListener('click', function () {
      copyToClipboard('instagram');
  });

  email.addEventListener('click', function () {
      copyToClipboard('email');
  });
});