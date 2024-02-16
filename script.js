"use strict";

const signUpSection = document.querySelector(".section-main");
const successSection = document.querySelector(".section-success");
const userMail = document.querySelector(".user-mail");
const errorMessage = document.querySelector(".error-message");
const mailInput = document.getElementById("mail");
const submitBtn = document.querySelector(".btn");
const dismissBtn = document.querySelector(".dismiss");

mailInput.focus();

function validateEmail(mail) {
  const mailRegex = /^[^s@]+@[^s@]+\.[^s@]+$/;

  return mailRegex.test(mail);
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const email = mailInput.value;

  if (!validateEmail(email)) {
    errorMessage.classList.add("error");
    mailInput.classList.add("error");
  } else {
    errorMessage.classList.remove("error");
    mailInput.classList.remove("error");
    userMail.innerHTML = email;
    toggleSection();
    mailInput.value = "";
  }
});

const toggleSection = () => {
  signUpSection.classList.toggle("hide");
  successSection.classList.toggle("hide");
};

dismissBtn.addEventListener("click", () => {
  toggleSection();
  mailInput.focus();
});
