class Card {
  constructor(result, isMyCard) {
    this.cardElement = this.create(result, isMyCard);
    this.remove = this.remove.bind(this);
    this.cardId = '';
    // this.like = this.like.bind(this);
    // this.cardElement
    //   .querySelector('.place-card__like-icon')
    //   .addEventListener('click', this.like);
    // this.cardElement
    //   .querySelector('.place-card__delete-icon')
    //   .addEventListener('click', this.remove);
    cardList.container
      .addEventListener('click', this.like);
    cardList.container
      .addEventListener('click', this.remove);
  }

  like(e) {
    if (e.target.classList.contains('place-card__like-icon')) {
      e.target.classList.toggle('place-card__like-icon_liked');
    }
  }

  remove() {
    if (e.target.classList.contains('place-card__delete-icon')) {
      if (window.confirm('Вы действительно хотите удалить эту карточку?')) {
        api.deleteCard(this.cardId.bind(this));
      }

      this.cardElement.remove();
    }
    // this.cardElement
    //   .querySelector('.place-card__like-icon')
    //   .removeEventListener('click', this.like);
    // this.cardElement
    //   .querySelector('.place-card__delete-icon')
    //   .removeEventListener('click', this.remove);
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

    if (isMyCard) {
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('place-card__delete-icon');
      cardImage.appendChild(deleteButton);
    }

    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardDescription);
    cardDescription.appendChild(cardName);
    cardDescription.appendChild(likeButton);
    cardDescription.appendChild(likesCounter);

    cardImage.style.backgroundImage = `url(${result.link})`;
    cardName.textContent = result.name;
    this.cardId = result._id
    likesCounter.textContent = likes.length;

    return cardContainer;
  }
}
