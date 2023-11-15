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


//Validação do formulário

document.getElementById('form').addEventListener('submit', function (event) {
  let valid = true;

  const fullNameInput = document.getElementById('full-name');
  const fullNameErrorMessage = document.getElementById('error-message-full-name');
  if (fullNameInput.value.trim() === '') {
      valid = false;
      fullNameInput.classList.add('error');
      fullNameErrorMessage.innerHTML = '<img class="form-error error-icon" src="assets/form-error.svg" alt="Error Icon"> Full Name is required.';
  } else {
      fullNameInput.classList.remove('error');
      fullNameErrorMessage.textContent = '';
  }

  const emailInput = document.getElementById('email');
  const emailErrorMessage = document.getElementById('error-message-email');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(emailInput.value)) {
      valid = false;
      emailInput.classList.add('error');
      emailErrorMessage.innerHTML = '<img class="form-error error-icon" src="assets/form-error.svg" alt="Error Icon"> Invalid email address.';
  } else {
      emailInput.classList.remove('error');
      emailErrorMessage.textContent = '';
  }

  const primaryPhoneInput = document.getElementById('primary-phone');
  const primaryPhoneErrorMessage = document.getElementById('error-message-primary-phone');
  if (primaryPhoneInput.value.trim() === '') {
      valid = false;
      primaryPhoneInput.classList.add('error');
      primaryPhoneErrorMessage.innerHTML = '<img class="form-error error-icon" src="assets/form-error.svg" alt="Error Icon"> Phone is required.';
  } else {
      primaryPhoneInput.classList.remove('error');
      primaryPhoneErrorMessage.textContent = '';
  }

  const secondaryPhoneInput = document.getElementById('secondary-phone');
  const secondaryPhoneErrorMessage = document.getElementById('error-message-secondary-phone');
  if (secondaryPhoneInput.value.trim() === '') {
      valid = false;
      secondaryPhoneInput.classList.add('error');
      secondaryPhoneErrorMessage.innerHTML = '<img class="form-error error-icon" src="assets/form-error.svg" alt="Error Icon"> Phone is required.';
  } else {
      secondaryPhoneInput.classList.remove('error');
      secondaryPhoneErrorMessage.textContent = '';
  }

  const addressInput = document.getElementById('address');
  const addressErrorMessage = document.getElementById('error-message-address');

  if (addressInput.value.trim() === '') {
      valid = false;
      addressInput.classList.add('error');
      addressErrorMessage.innerHTML = '<img class="form-error error-icon" src="assets/form-error.svg" alt="Error Icon"> Address is required.';
  } else {
      addressInput.classList.remove('error');
      addressErrorMessage.textContent = '';
  }

  const availabilitySelect = document.getElementById('availability');
  const availabilityErrorMessage = document.getElementById('error-message-availability');

  if (availabilitySelect.value === "") {
      valid = false;
      availabilitySelect.classList.add('error');
      availabilityErrorMessage.innerHTML = '<img class="form-error error-icon" src="assets/form-error.svg" alt="Error Icon"> Please select an option.';
  } else {
      availabilitySelect.classList.remove('error');
      availabilityErrorMessage.textContent = '';
  }

  const englishLevelSelect = document.getElementById('english-level');
  const englishLevelErrorMessage = document.getElementById('error-message-english-level');

  if (englishLevelSelect.value === "") {
      valid = false;
      englishLevelSelect.classList.add('error');
      englishLevelErrorMessage.innerHTML = '<img class="form-error error-icon" src="assets/form-error.svg" alt="Error Icon"> Please select an option.';
  } else {
      englishLevelSelect.classList.remove('error');
      englishLevelErrorMessage.textContent = '';
  }

  const opportunityYouWant = document.getElementById('opportunity');
  const opportunityErrorMessage = document.getElementById('error-message-opportunity');

  if (opportunityYouWant.value === "") {
      valid = false;
      opportunityYouWant.classList.add('error');
      opportunityErrorMessage.innerHTML = '<img class="form-error error-icon" src="assets/form-error.svg" alt="Error Icon"> Please select an option.';
  } else {
      opportunityYouWant.classList.remove('error');
      opportunityErrorMessage.textContent = '';
  }

  const ppsSelect = document.getElementById('pps');
  const ppsErrorMessage = document.getElementById('error-message-pps');

  if (ppsSelect.value === "") {
      valid = false;
      ppsSelect.classList.add('error');
      ppsErrorMessage.innerHTML = '<img class="form-error error-icon" src="assets/form-error.svg" alt="Error Icon"> Please select an option.';
  } else {
      ppsSelect.classList.remove('error');
      ppsErrorMessage.textContent = '';
  }

  const workAreasInput = document.getElementById('work-areas');
  const workAreasErrorMessage = document.getElementById('error-message-work-areas');

  if (workAreasInput.value.trim() === '') {
      valid = false;
      workAreasInput.classList.add('error');
      workAreasErrorMessage.innerHTML = '<img class="form-error error-icon" src="assets/form-error.svg" alt="Error Icon"> Other work areas is required.';
  } else {
      workAreasInput.classList.remove('error');
      workAreasErrorMessage.textContent = '';
  }

  const termsAgreementCheckbox = document.getElementById('terms-agreement');
  const termsAgreementErrorMessage = document.getElementById('error-message-terms');

  if (!termsAgreementCheckbox.checked) {
      valid = false;
      termsAgreementErrorMessage.innerHTML = '<img class="form-error error-icon" src="assets/form-error.svg" alt="Error Icon"> You must agree to the terms and conditions.';
  } else {
      termsAgreementErrorMessage.textContent = '';
  }

  const cvUploadInput = document.getElementById('cv-upload-input');
  const cvUploadErrorMessage = document.getElementById('error-message-upload-cv');

  if (cvUploadInput.files.length === 0) {
      valid = false;
      cvUploadErrorMessage.innerHTML = '<img class="form-error error-icon" src="assets/form-error.svg" alt="Error Icon"> Please upload your CV.';
  } else {
      cvUploadErrorMessage.textContent = '';
  }

  if (!valid) {
      event.preventDefault();
  }
});

//Botão de upload

document.getElementById('cv-upload-button').addEventListener('click', function () {
  document.getElementById('cv-upload-input').click();
});

const cvUploadButton = document.getElementById('cv-upload-button');
const cvUploadInput = document.getElementById('cv-upload-input');
const cvUploadText = document.getElementById('cv-upload-text');

cvUploadInput.addEventListener('change', function () {
  if (cvUploadInput.files.length > 0) {
      const fileName = cvUploadInput.files[0].name;
      cvUploadText.textContent = fileName;
      cvUploadButton.classList.add('file-selected');
  } else {
      cvUploadText.textContent = 'Upload your CV';
      cvUploadButton.classList.remove('file-selected');
  }
});