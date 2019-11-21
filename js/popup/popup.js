import { validate } from '../index.js';

export default class Popup {
  constructor(container) {
    this.container = container;
    this.close = this.close.bind(this);
  }

  render(template) {
    const formPopup = document
      .querySelector(template)
      .content.cloneNode(true)
      .querySelector('.popup__content');
    this.container.appendChild(formPopup);

    this.container.classList.add('popup_is-opened');
  }

  close() {
    this.removeListeners();
    this.container.firstElementChild.remove();
    this.container.classList.remove('popup_is-opened');
  }

  submitRender(e) {
    e.target.lastElementChild.textContent = '';
    e.target.elements.submit.textContent = 'Загрузка...';
  }

  addListeners() {
    this.container
      .querySelector('.popup__close')
      .addEventListener('click', this.close);
    this.container.addEventListener('submit', this.submit);
    this.container.addEventListener('input', validate.validateHandler);
  }

  removeListeners() {
    this.container
      .querySelector('.popup__close')
      .removeEventListener('click', this.close);
    this.container.removeEventListener('submit', this.submit);
    this.container.removeEventListener('input', validate.validateHandler);
  }
}
