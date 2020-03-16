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

const telInput = document.querySelector(`.company-request__tel-input`);
telInput.addEventListener(`focus`, function () {
  telInput.value = `+7(`;
});

const addParantheses = (evt) => {
  const currentInputValue = evt.target.value;
  evt.target.value = currentInputValue + `)`;
  evt.target.removeEventListener(`input`, addParantheses);
};

telInput.addEventListener(`input`, addParantheses);

const toggleClass = (element, myclass) => {
  element.classList.toggle(myclass);
};

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
};

const closeModal = () => {
  toggleClass(callbackModal, `callback-modal--open`);
  toggleClass(overlay, `callback-modal--open`);
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
    callbackTelInput.value = `+7(`;
  });
  callbackTelInput.addEventListener(`input`, addParantheses);
});

const toggleSiteMapButton = document.querySelector(`.main-footer__toggle-button-map`);
const toggleContactsButton = document.querySelector(`.main-footer__toggle-button-contacts`);
const siteMapList = document.querySelector(`.site-map-list`);
const contactsList = document.querySelector(`.office-contacts`);

const toggleAttribute = (attribute, oldAtt, newAtt) => {
  if (toggleSiteMapButton.getAttribute(attribute) === oldAtt) {
     toggleSiteMapButton.setAttribute(attribute, newAtt);
   } else {
     toggleSiteMapButton.setAttribute(attribute, oldAtt);
   }
};

toggleSiteMapButton.addEventListener(`click`, function () {
  toggleClass(siteMapList, `site-map-list--closed`);
  toggleAttribute(`aria-label`, `Открыть разделы сайта`, `Закрыть разделы сайта`);
});

toggleContactsButton.addEventListener(`click`, function () {
  toggleClass(contactsList, `office-contacts__wrapper--closed`);
  toggleAttribute(`aria-label`, `Открыть список контактов`, `Закрыть список контактов`);
});
