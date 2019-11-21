import { api } from './index.js';

export default class Card {
  constructor(result, isMyCard) {
    this.result = result;
    this.isMyCard = isMyCard;
    this.cardId = '';
    this.cardElement = null;
    this.api = api;

    this.remove = this.remove.bind(this);
    this.like = this.like.bind(this);
  }

  render() {
    this.cardElement = this.create(this.result, this.isMyCard);
    this.cardElement = this.cardElement.querySelector('.place-card');
    this.addListeners();
    return this.cardElement;
  }

  addListeners() {
    this.cardElement
      .querySelector('.place-card__like-icon')
      .addEventListener('click', this.like);
    this.cardElement
      .querySelector('.place-card__delete-icon')
      .addEventListener('click', this.remove);
  }

  removeListeners() {
    this.cardElement
      .querySelector('.place-card__like-icon')
      .removeEventListener('click', this.like);
    this.cardElement
      .querySelector('.place-card__delete-icon')
      .removeEventListener('click', this.remove);
  }

  like(e) {
    if (e.target.classList.contains('place-card__like-icon_liked')) {
      this.api
        .deleteLikeCard(this.cardId)
        .then(result => {
          e.target.classList.remove('place-card__like-icon_liked');
          e.target.nextElementSibling.textContent = result.likes.length;
        })
        .catch(() => {
          alert(connectError);
        });
    } else if (e.target.classList.contains('place-card__like-icon')) {
      this.api
        .likeCard(this.cardId)
        .then(result => {
          e.target.classList.add('place-card__like-icon_liked');
          e.target.nextElementSibling.textContent = result.likes.length;
        })
        .catch(() => {
          alert(connectError);
        });
    }
  }

  remove(e) {
    if (e.target.classList.contains('place-card__delete-icon')) {
      if (window.confirm('Вы действительно хотите удалить эту карточку?')) {
        this.api
          .deleteCard(this.cardId)
          .then(() => {
            this.cardElement.remove();
            this.removeListeners();
          })
          .catch(() => {
            alert(connectError);
          });
      }
    }
  }

  create(result, isMyCard) {
    const myId = 'a4469f107fd1710abffb5622';
    const newCard = document
      .querySelector('.place-card-template')
      .content.cloneNode(true);
    const myIdCheck = result.likes.some(i => {
      return i._id === myId;
    });

    if (myIdCheck) {
      newCard
        .querySelector('.place-card__like-icon')
        .classList.add('place-card__like-icon_liked');
    }

    if (result.owner._id === myId || isMyCard) {
      const deleteButton = newCard.querySelector('.place-card__delete-icon');
      deleteButton.style.display = 'block';
    }

    newCard.querySelector(
      '.place-card__image',
    ).style.backgroundImage = `url(${result.link})`;
    newCard.querySelector('.place-card__name').textContent = result.name;
    newCard.querySelector('.place-card__like-counter').textContent =
      result.likes.length;
    this.cardId = result._id;

    return newCard;
  }
}
