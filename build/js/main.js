"use strict";

var IMask = require(["../js/imask"], function () {});

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
var maskOptions = {
  mask: "{+7(}000)0000000"
};
var telInput = document.querySelector(".company-request__tel");
telInput.addEventListener("focus", function () {
  var telMask = new IMask(telInput, maskOptions);
  telMask.cursorPos = 3;
  telInput.value = "+7(";
});

var toggleClass = function toggleClass(element, myclass) {
  element.classList.toggle(myclass);
};

var body = document.querySelector("body");
var closeButton = document.querySelector(".callback-modal__close-button");
var callbackModal = document.querySelector(".callback-modal");
var overlay = document.querySelector(".overlay");
var callbackButton = document.querySelector(".main-header__callback-button");

var onEscKey = function onEscKey(evt) {
  if (evt.key === "esc" || evt.key === "Escape") {
    toggleClass(callbackModal, "callback-modal--open");
    toggleClass(overlay, "callback-modal--open");
    document.removeEventListener("keydown", onEscKey);
  }
};

var openModal = function openModal() {
  toggleClass(callbackModal, "callback-modal--open");
  toggleClass(overlay, "callback-modal--open");
  toggleClass(body, "main-body");
};

var closeModal = function closeModal() {
  toggleClass(callbackModal, "callback-modal--open");
  toggleClass(overlay, "callback-modal--open");
  toggleClass(body, "main-body");
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
    var callbackTelMask = new IMask(callbackTelInput, maskOptions);
    callbackTelMask.cursorPos = 3;
    callbackTelInput.value = "+7(";
  });
});
var toggleSiteMapButton = document.querySelector(".main-footer__toggle-button-map");
var toggleContactsButton = document.querySelector(".main-footer__toggle-button-contacts");
var siteMapList = document.querySelector(".site-map-list");
var contactsList = document.querySelector(".office-contacts__wrapper");
var siteMapWrapper = document.querySelector(".main-footer__site-map-wrapper");
var contactsWrapper = document.querySelector(".main-footer__office-contacts");

var toggleAttribute = function toggleAttribute(element, attribute, newAtt, oldAtt) {
  if (element.getAttribute(attribute) === oldAtt) {
    element.setAttribute(attribute, newAtt);
  } else {
    element.setAttribute(attribute, oldAtt);
  }
};

siteMapWrapper.addEventListener("click", function () {
  toggleClass(siteMapList, "site-map-list--closed");
  toggleClass(siteMapWrapper, "main-footer__site-map-wrapper--open");
  toggleAttribute(toggleSiteMapButton, "aria-label", "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0437\u0434\u0435\u043B\u044B \u0441\u0430\u0439\u0442\u0430", "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0437\u0434\u0435\u043B\u044B \u0441\u0430\u0439\u0442\u0430");
}, true);
contactsWrapper.addEventListener("click", function () {
  toggleClass(contactsList, "office-contacts__wrapper--closed");
  toggleClass(contactsWrapper, "main-footer__office-contacts--open");
  toggleAttribute(toggleContactsButton, "aria-label", "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432", "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432");
}, true);