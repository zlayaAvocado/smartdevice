'use strict'

const smoothScroll= (button) => {
    button.scrollIntoView({
    behavior: 'smooth'
  });
};

const scrollButton = document.querySelector('.company-intro__scroll-to-bottom');
scrollButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  smoothScroll(scrollButton);
});

const consultButton = document.querySelector('.company-intro__consult-button');
consultButton.addEventListener('click', function (evt) {
  e.preventDefault();
  smoothScroll(consultButton);
});

const telInput = document.querySelector('.company-request__tel-input');
telInput.addEventListener('focus', function (evt) {
  telInput.value = '+7('
  const currentInputValue = evt.target.value;
  if (currentInputValue !== '+7(') {
    telInput.value = currentInputValue + ')'
  }
});
