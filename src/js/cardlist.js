import { api, addCardPopup } from './index.js';
import Card from './card.js';

export default class CardList {
  constructor(container) {
    this.api = api;
    this.connectError = 'Ошибка :( Попробуйте еще раз';
    this.container = container;
  }

  addCard(name, link, e) {
    e.target.elements.submit.classList.add('popup__button_edit');
    addCardPopup.submitRender(e);

    this.api
      .addCard(name, link)
      .then(result => {
        const card = new Card(result, false);
        const cardElement = card.render();
        this.container.appendChild(cardElement);
        addCardPopup.close();
      })
      .catch(() => {
        e.target.lastElementChild.textContent = this.connectError;
      })
      .finally(() => {
        e.target.elements.submit.classList.remove('popup__button_edit');
        e.target.elements.submit.textContent = '+';
      });
  }
}
