"use strict";

var smoothScroll = function smoothScroll(element) {
  var elementPosition = element.getBoundingClientRect().top;
  window.scrollTo({
    top: elementPosition,
    behavior: "smooth"
  });
};

var scrollButton = document.querySelector(".company-intro__scroll-to-bottom");
var nextSection = document.querySelector(".advantages");
scrollButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  smoothScroll(nextSection);
});
var consultButton = document.querySelector(".company-intro__consult-button");
var companyRequestForm = document.querySelector(".company-request");
consultButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  smoothScroll(companyRequestForm);
});
var telInput = document.querySelector(".company-request__tel-input");
telInput.addEventListener("focus", function () {
  telInput.value = "+7(";
});

var addParantheses = function addParantheses(evt) {
  var currentInputValue = evt.target.value;
  evt.target.value = currentInputValue + ")";
  evt.target.removeEventListener("input", addParantheses);
};

telInput.addEventListener("input", addParantheses);

var toggleClass = function toggleClass(element, myclass) {
  element.classList.toggle(myclass);
};

var closeButton = document.querySelector(".callback-modal__close-button");
var callbackModal = document.querySelector(".callback-modal");
var overlay = document.querySelector(".overlay");
var callbackButton = document.querySelector(".main-header__callback-button");

var onEscKey = function onEscKey(evt) {
  if (evt.key === "esc" || evt.key === "Escape") {
    toggleClass(callbackModal, "callback-modal__open");
    toggleClass(overlay, "callback-modal__open");
    document.removeEventListener("keydown", onEscKey);
  }
};

var openModal = function openModal() {
  toggleClass(callbackModal, "callback-modal__open");
  toggleClass(overlay, "callback-modal__open");
};

var closeModal = function closeModal() {
  toggleClass(callbackModal, "callback-modal__open");
  toggleClass(overlay, "callback-modal__open");
  document.removeEventListener("keydown", onEscKey);
};

var saveToLocalStorage = function saveToLocalStorage() {
  var callbackForm = document.querySelector(".callback-modal__wrapper form");
  callbackForm.addEventListener("submit", function () {
    var firstNameValue = document.querySelector(".callback-modal .callback-modal__first-name input").value;
    var telValue = document.querySelector(".callback-modal .callback-modal__tel input").value;
    var questionValue = document.querySelector(".callback-modal .callback-modal__question textarea").value;
    localStorage.setItem("first_name", firstNameValue);
    localStorage.setItem("tel", telValue);
    localStorage.setItem("questionValue", questionValue);
  });
};

callbackButton.addEventListener("click", function () {
  openModal();
  saveToLocalStorage();
  document.addEventListener("keydown", onEscKey);
  overlay.addEventListener("click", closeModal);
  closeButton.addEventListener("click", closeModal);
  var callbackTelInput = document.querySelector(".callback-modal .callback-modal__tel-input");
  callbackTelInput.addEventListener("focus", function () {
    callbackTelInput.value = "+7(";
  });
  callbackTelInput.addEventListener("input", addParantheses);
});