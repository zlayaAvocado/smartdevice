const IMask = require([`../js/imask`], function () {
});
const smoothscroll = require([`../js/smoothscroll`], function () {
});

smoothscroll();

const smoothScroll = (element) => {
  const elementPosition = element.getBoundingClientRect().top;
  window.scrollTo({
    top: elementPosition,
    behavior: `smooth`
  });
};

const scrollButton = document.querySelector(`.company-intro__scroll-to-bottom`);
const nextSection = document.querySelector(`.advantages`);
scrollButton.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  smoothScroll(nextSection);
});

const consultButton = document.querySelector(`.company-intro__consult-button`);
const companyRequestForm = document.querySelector(`.company-request`);
consultButton.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  smoothScroll(companyRequestForm);
});

const maskOptions = {
  mask: `{+7(}000)0000000`
};

const telInput = document.querySelector(`.company-request__tel`);
telInput.addEventListener(`focus`, function () {
  const telMask = new IMask(telInput, maskOptions);
  telMask.cursorPos = 3;
  telInput.value = `+7(`;
});

const toggleClass = (element, myclass) => {
  element.classList.toggle(myclass);
};

const body = document.querySelector(`body`);
const closeButton = document.querySelector(`.callback-modal__close-button`);
const callbackModal = document.querySelector(`.callback-modal`);
const overlay = document.querySelector(`.overlay`);
const callbackButton = document.querySelector(`.main-header__callback-button`);

const onEscKey = (evt) => {
  if (evt.key === `esc` || evt.key === `Escape`) {
    toggleClass(callbackModal, `callback-modal--open`);
    toggleClass(overlay, `callback-modal--open`);
    document.removeEventListener(`keydown`, onEscKey);
  }
};

const openModal = () => {
  toggleClass(callbackModal, `callback-modal--open`);
  toggleClass(overlay, `callback-modal--open`);
  toggleClass(body, `main-body`);
};

const closeModal = () => {
  toggleClass(callbackModal, `callback-modal--open`);
  toggleClass(overlay, `callback-modal--open`);
  toggleClass(body, `main-body`);
  document.removeEventListener(`keydown`, onEscKey);
};

const saveToLocalStorage = () => {

  const callbackForm = document.querySelector(`.callback-modal__wrapper form`);
  callbackForm.addEventListener(`submit`, function () {
    const firstNameValue = document.querySelector(`.callback-modal .callback-modal__first-name input`).value;
    const telValue = document.querySelector(`.callback-modal .callback-modal__tel input`).value;
    const questionValue = document.querySelector(`.callback-modal .callback-modal__question textarea`).value;

    localStorage.setItem(`first_name`, firstNameValue);
    localStorage.setItem(`tel`, telValue);
    localStorage.setItem(`questionValue`, questionValue);
  });
};

callbackButton.addEventListener(`click`, function () {
  openModal();
  saveToLocalStorage();

  document.addEventListener(`keydown`, onEscKey);
  overlay.addEventListener(`click`, closeModal);
  closeButton.addEventListener(`click`, closeModal);

  const callbackTelInput = document.querySelector(`.callback-modal .callback-modal__tel-input`);
  callbackTelInput.addEventListener(`focus`, function () {
    const callbackTelMask = new IMask(callbackTelInput, maskOptions);
    callbackTelMask.cursorPos = 3;
    callbackTelInput.value = `+7(`;
  });
});

const toggleSiteMapButton = document.querySelector(`.main-footer__toggle-button-map`);
const toggleContactsButton = document.querySelector(`.main-footer__toggle-button-contacts`);
const siteMapList = document.querySelector(`.site-map-list`);
const contactsList = document.querySelector(`.office-contacts__wrapper`);
const siteMapWrapper = document.querySelector(`.main-footer__site-map-wrapper`);
const contactsWrapper = document.querySelector(`.main-footer__office-contacts`);

const toggleAttribute = (element, attribute, newAtt, oldAtt) => {
  if (element.getAttribute(attribute) === oldAtt) {
    element.setAttribute(attribute, newAtt);
  } else {
    element.setAttribute(attribute, oldAtt);
  }
};

const OPEN_SITE_MAP = `Открыть разделы сайта`;
const SLOSE_SITE_MAP = `Закрыть разделы сайта`;
const OPEN_CONTACTS = `Открыть список контактов`;
const CLOSE_CONTACTS = `Закрыть список контактов`;

siteMapWrapper.addEventListener(`click`, function () {
  toggleClass(siteMapList, `site-map-list--closed`);
  toggleClass(siteMapWrapper, `main-footer__site-map-wrapper--open`);
  toggleAttribute(toggleSiteMapButton, `aria-label`, OPEN_SITE_MAP, CLOSE_SITE_MAP);
}, true);

contactsWrapper.addEventListener(`click`, function () {
  toggleClass(contactsList, `office-contacts__wrapper--closed`);
  toggleClass(contactsWrapper, `main-footer__office-contacts--open`);
  toggleAttribute(toggleContactsButton, `aria-label`, OPEN_CONTACTS, CLOSE_CONTACTS);
}, true);
