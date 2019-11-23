import { api, addCardPopup } from './index.js';
import Card from './Card.js';

export default class CardList {
  constructor(container) {
    this.api = api;
    this.connectError = 'Ошибка :( Попробуйте еще раз';
    this.container = container;
    this.render = this.render.bind(this);
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

  render() {
    this.api
      .getInitialCards()
      .then(result => {
        result.forEach(item => {
          const card = new Card(item, false);
          const cardElement = card.render();
          this.container.appendChild(cardElement);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
}
