class Popup {
  constructor(container) {
    this.container = container;
    this.edit = document.querySelector('.popup__content_edit');
    this.newCard = document.querySelector('.popup__content_new-card');
    this.image = document.querySelector('.popup__content_type_image');
    this.container.addEventListener('click', this.close.bind(this));
    this.container.addEventListener('submit', this.submit.bind(this));
  }

  open(e) {
    if (e.target.classList.contains('button')) {
      this.container.classList.add('popup_is-opened');

      if (e.target.classList.contains('user-info__edit')) {
        this.edit.classList.add('popup__content_is-opened');
        usernameInput.value = userName.textContent;
        jobInput.value = userJob.textContent;
      } else if (e.target.classList.contains('user-info__button')) {
        this.newCard.classList.add('popup__content_is-opened');
      }
    } else if (e.target.classList.contains('place-card__image')) {
      this.container.classList.add('popup_is-opened');

      document
        .querySelector('.popup__image')
        .setAttribute('src', e.target.style.backgroundImage.slice(5, -2));
      this.image.classList.add('popup__content_is-opened');
    }
  }

  close(e) {
    if (e.target.classList.contains('popup__close')) {
      this.render(e);
    }
  }

  render(e) {
    e.target
      .closest('.popup__content')
      .classList.remove('popup__content_is-opened');
    this.container.classList.remove('popup_is-opened');
    this.removeListeners();
    editFormButton.removeAttribute('disabled');
    editFormButton.classList.remove('popup__button_disabled');
    this.edit.querySelectorAll('.popup__error').forEach(item => {
      item.textContent = '';
    });
  }

  removeListeners() {
    this.container.removeEventListener('click', this.close.bind(this));
    this.container.removeEventListener('submit', this.submit.bind(this));
  }

  submit(e) {
    e.preventDefault();

    if (e.target.name === 'edit') {
      userName.textContent = usernameInput.value;
      userJob.textContent = jobInput.value;
      this.render(e);
    } else {
      cardList.addCard(cardNameInput.value, linkInput.value);
      this.render(e);
    }
  }
}
