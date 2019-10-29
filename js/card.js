class Card {
  constructor(name, link) {
    this.cardElement = this.create(name, link);
    this.remove = this.remove.bind(this);
    this.cardElement
      .querySelector('.place-card__like-icon')
      .addEventListener('click', this.like);
    this.cardElement
      .querySelector('.place-card__delete-icon')
      .addEventListener('click', this.remove);
  }

  /*   create(name, link) {
    const cardContainer = document
      .querySelector('.place-card-template')
      .content.cloneNode(true);

    cardContainer.querySelector(
      '.place-card__image',
    ).style.backgroundImage = `url(${link})`;
    cardContainer.querySelector('.place-card__name').textContent = name;

    return cardContainer;
  } */

  like(e) {
    e.target.classList.toggle('place-card__like-icon_liked');
  }

  remove() {
    this.cardElement.remove();
    this.cardElement
      .querySelector('.place-card__like-icon')
      .removeEventListener('click', this.like);
    this.cardElement
      .querySelector('.place-card__delete-icon')
      .removeEventListener('click', this.remove);
  }

  create(name, link) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('place-card');

    const cardImage = document.createElement('div');
    cardImage.classList.add('place-card__image');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('place-card__delete-icon');

    const cardDescription = document.createElement('div');
    cardDescription.classList.add('place-card__description');

    const cardName = document.createElement('h3');
    cardName.classList.add('place-card__name');

    const likeButton = document.createElement('button');
    likeButton.classList.add('place-card__like-icon');

    cardContainer.appendChild(cardImage);
    cardImage.appendChild(deleteButton);
    cardContainer.appendChild(cardDescription);
    cardDescription.appendChild(cardName);
    cardDescription.appendChild(likeButton);

    cardImage.style.backgroundImage = `url(${link})`;
    cardName.textContent = name;

    return cardContainer;
  }
}
