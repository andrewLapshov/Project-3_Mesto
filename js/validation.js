class Validation {
  constructor() {
    this.validateHandler = this.validateHandler.bind(this);
  }

  inputHandler(event) {
    if (event.target.validity.valueMissing) {
      event.target.nextElementSibling.textContent =
        window.validationErrors.noValueError;
    } else if (
      event.target !== document.forms.new.elements.link &&
      (event.target.validity.tooLong || event.target.validity.tooShort)
    ) {
      event.target.nextElementSibling.textContent =
        window.validationErrors.rangeError;
    } else if (
      event.target === document.forms.new.elements.link &&
      event.target.validity.typeMismatch
    ) {
      event.target.nextElementSibling.textContent =
        window.validationErrors.linkError;
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
