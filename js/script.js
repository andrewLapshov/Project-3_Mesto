const rootContainer = document.querySelector('.root');

const popup = document.querySelector('.popup');

const addFormButton = document.querySelector('.popup__button_new');
const editFormButton = document.querySelector('.popup__button_edit');
const userName = document.querySelector('.user-info__name');
const userJob = document.querySelector('.user-info__job');

const newCardForm = document.forms.new;
const cardNameInput = newCardForm.elements.name;
const linkInput = newCardForm.elements.link;
const editForm = document.forms.edit;
const usernameInput = editForm.elements.username;
const jobInput = editForm.elements.job;

const cardList = new CardList(
  document.querySelector('.places-list'),
  window.initialCards,
);

const popupContainer = new Popup(popup);

function inputHandler(event) {
  if (event.target.validity.valueMissing) {
    event.target.nextElementSibling.textContent =
      window.validationErrors.noValueError;
  } else if (
    event.target !== linkInput &&
    (event.target.validity.tooLong || event.target.validity.tooShort)
  ) {
    event.target.nextElementSibling.textContent =
      window.validationErrors.rangeError;
  } else if (event.target === linkInput && event.target.validity.typeMismatch) {
    event.target.nextElementSibling.textContent =
      window.validationErrors.linkError;
  } else {
    event.target.nextElementSibling.textContent = '';
  }
}

function checkFormValid(form) {
  if (form.checkValidity()) return true;
  return false;
}

function validateHandler(event) {
  const popupForm = checkFormValid(event.target.closest('.popup__form'));

  inputHandler(event);
  if (popupForm) {
    popupForm.elements.submit.removeAttribute('disabled');
    popupForm.elements.submit.classList.remove('popup__button_disabled');
  } else {
    popupForm.elements.submit.setAttribute('disabled', true);
    popupForm.elements.submit.classList.add('popup__button_disabled');
  }
}

rootContainer.addEventListener(
  'click',
  popupContainer.open.bind(popupContainer),
);

rootContainer.addEventListener('input', validateHandler);
