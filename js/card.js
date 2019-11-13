/* eslint-disable class-methods-use-this */
class Card {
  constructor(result, isMyCard) {
    this.cardId = '';
    this.cardElement = this.create(result, isMyCard);
    this.remove = this.remove.bind(this);
    this.like = this.like.bind(this);

    this.cardElement
      .querySelector('.place-card__like-icon')
      .addEventListener('click', this.like);

    // this.cardElement
    //   .querySelector('.place-card__delete-icon')
    //   .addEventListener('click', this.remove);
  }

  like(e) {
    if (e.target.classList.contains('place-card__like-icon_liked')) {
      api
        .deleteLikeCard(this.cardId)
        .then(result => {
          e.target.classList.toggle('place-card__like-icon_liked');
          e.target.nextElementSibling.textContent = result.likes.length;
        })
        .catch(() => {
          alert(connectError);
        });
    } else if (e.target.classList.contains('place-card__like-icon')) {
      api
        .likeCard(this.cardId)
        .then(result => {
          e.target.classList.toggle('place-card__like-icon_liked');
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
        // e.target.closest('place-card').remove();
        api
          .deleteCard(this.cardId)
          .then(() => {
            this.cardElement.remove();
            this.cardElement
              .querySelector('.place-card__like-icon')
              .removeEventListener('click', this.like);
            this.cardElement
              .querySelector('.place-card__delete-icon')
              .removeEventListener('click', this.remove);
          })
          .catch(() => {
            alert(connectError);
          });
      }
    }
  }

  create(result, isMyCard) {
    const myId = 'a4469f107fd1710abffb5622';

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('place-card');

    const cardImage = document.createElement('div');
    cardImage.classList.add('place-card__image');

    const cardDescription = document.createElement('div');
    cardDescription.classList.add('place-card__description');

    const cardName = document.createElement('h3');
    cardName.classList.add('place-card__name');

    const likeContainer = document.createElement('div');
    likeContainer.classList.add('place-card__like-container');

    const likeButton = document.createElement('button');
    likeButton.classList.add('place-card__like-icon');
    const myIdCheck = result.likes.some(i => {
      return i._id === myId;
    });
    if (myIdCheck) {
      likeButton.classList.add('place-card__like-icon_liked');
    }

    const likesCounter = document.createElement('span');
    likesCounter.classList.add('place-card__like-counter');

    if (result.owner._id === myId || isMyCard) {
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('place-card__delete-icon');
      cardImage.appendChild(deleteButton);
      cardContainer.addEventListener('click', this.remove.bind(this));
    }

    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardDescription);
    cardDescription.appendChild(cardName);
    likeContainer.appendChild(likeButton);
    likeContainer.appendChild(likesCounter);
    cardDescription.appendChild(likeContainer);

    cardImage.style.backgroundImage = `url(${result.link})`;
    cardName.textContent = result.name;
    this.cardId = result._id;
    likesCounter.textContent = result.likes.length;

    return cardContainer;
  }

  createTemp(result, isMyCard) {
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
      newCard.addEventListener('click', this.remove);
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
