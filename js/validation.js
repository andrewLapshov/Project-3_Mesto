<<<<<<< HEAD
import { validationErrors } from './validationErrors.js';

export default class Validation {
=======
class Validation {
>>>>>>> 9e307d4feb524d03e4da08ae34a4364bba273b58
  constructor() {
    this.validationErrors = validationErrors;
    this.validateHandler = this.validateHandler.bind(this);
  }

  inputHandler(event) {
    if (event.target.validity.valueMissing) {
      event.target.nextElementSibling.textContent = this.validationErrors.noValueError;
    } else if (
      !event.target.classList.contains('popup__input_type_link-url') &&
      (event.target.validity.tooLong || event.target.validity.tooShort)
    ) {
      event.target.nextElementSibling.textContent = this.validationErrors.rangeError;
    } else if (
      event.target.classList.contains('popup__input_type_link-url') &&
      event.target.validity.typeMismatch
    ) {
      event.target.nextElementSibling.textContent = this.validationErrors.linkError;
    } else {
      event.target.nextElementSibling.textContent = '';
    }
  }

  checkFormValid(form) {
    if (form.checkValidity()) return true;
    return false;
  }

  validateHandler(event) {
    const popupForm = event.target.closest('.popup__form');

    this.inputHandler(event);
    if (this.checkFormValid(popupForm)) {
      popupForm.elements.submit.removeAttribute('disabled');
      popupForm.elements.submit.classList.remove('popup__button_disabled');
    } else {
      popupForm.elements.submit.setAttribute('disabled', true);
      popupForm.elements.submit.classList.add('popup__button_disabled');
    }
  }
}
