/* eslint-disable class-methods-use-this */
class Card {
  constructor(result, isMyCard) {
    this.cardId = '';
    this.cardElement = this.create(result, isMyCard);
    this.remove = this.remove.bind(this);

    this.cardElement
      .querySelector('.place-card__like-icon')
      .addEventListener('click', this.like);
  }

  like(e) {
    if (e.target.classList.contains('place-card__like-icon')) {
      e.target.classList.toggle('place-card__like-icon_liked');
    }
  }

  remove(e) {
    if (e.target.classList.contains('place-card__delete-icon')) {
      if (window.confirm('Вы действительно хотите удалить эту карточку?')) {
        api.deleteCard(this.cardId);
        this.cardElement.remove();
        this.cardElement
          .querySelector('.place-card__like-icon')
          .removeEventListener('click', this.like);
        this.cardElement
          .querySelector('.place-card__delete-icon')
          .removeEventListener('click', this.remove);
      }
    }
  }

  create(result, isMyCard) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('place-card');

    const cardImage = document.createElement('div');
    cardImage.classList.add('place-card__image');

    const cardDescription = document.createElement('div');
    cardDescription.classList.add('place-card__description');

    const cardName = document.createElement('h3');
    cardName.classList.add('place-card__name');

    const likeButton = document.createElement('button');
    likeButton.classList.add('place-card__like-icon');

    const likesCounter = document.createElement('span');
    likesCounter.classList.add('place-card__like-counter');

    if (result.owner._id === 'a4469f107fd1710abffb5622' || isMyCard) {
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('place-card__delete-icon');
      cardImage.appendChild(deleteButton);
      deleteButton.addEventListener('click', this.remove.bind(this));
    }

    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardDescription);
    cardDescription.appendChild(cardName);
    cardDescription.appendChild(likeButton);
    cardDescription.appendChild(likesCounter);

    cardImage.style.backgroundImage = `url(${result.link})`;
    cardName.textContent = result.name;
    this.cardId = result._id;
    likesCounter.textContent = result.likes.length;

    return cardContainer;
  }
}
