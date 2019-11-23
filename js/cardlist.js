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
<<<<<<< HEAD
    addCardPopup.submitRender(e);
=======
    window.addCardPopup.submitRender(e);
>>>>>>> 9e307d4feb524d03e4da08ae34a4364bba273b58

    this.api
      .addCard(name, link)
      .then(result => {
        const card = new Card(result, false);
        const cardElement = card.render();
        this.container.appendChild(cardElement);
<<<<<<< HEAD
        addCardPopup.close();
      })
      .catch(() => {
        e.target.lastElementChild.textContent = this.connectError;
=======
        window.addCardPopup.close();
      })
      .catch(() => {
        e.target.lastElementChild.textContent = window.connectError;
>>>>>>> 9e307d4feb524d03e4da08ae34a4364bba273b58
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
