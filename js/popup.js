class Popup {
  constructor(container) {
    this.container = container;
    this.edit = document.querySelector('.popup__content_edit');
    this.newCard = document.querySelector('.popup__content_new-card');
    this.image = document.querySelector('.popup__content_type_image');

    this.infoName = document.querySelector('.user-info__name');
    this.infoJob = document.querySelector('.user-info__job');

    this.usernameInput = document.forms.edit.elements.username;
    this.jobInput = document.forms.edit.elements.job;
  }

  open(e) {
    if (e.target.classList.contains('button')) {
      this.container.classList.add('popup_is-opened');
      this.addListeners();

      if (e.target.classList.contains('user-info__edit')) {
        this.edit.classList.add('popup__content_is-opened');

        this.usernameInput.value = this.infoName.textContent;
        this.jobInput.value = this.infoJob.textContent;
      } else if (e.target.classList.contains('user-info__button')) {
        this.newCard.classList.add('popup__content_is-opened');
      }
    } else if (e.target.classList.contains('place-card__image')) {
      this.container.classList.add('popup_is-opened');
      this.addListeners();

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
    const editFormButton = document.querySelector('.popup__button_edit');
    this.removeListeners();
    e.target
      .closest('.popup__content')
      .classList.remove('popup__content_is-opened');
    this.container.classList.remove('popup_is-opened');

    editFormButton.removeAttribute('disabled');
    editFormButton.classList.remove('popup__button_disabled');
    this.edit.querySelectorAll('.popup__error').forEach(item => {
      item.textContent = '';
    });
  }

  addListeners() {
    this.container.addEventListener('click', this.close.bind(this));
    this.container.addEventListener('submit', this.submit.bind(this));
    this.container.addEventListener(
      'input',
      validate.validateHandler.bind(validate),
    );
  }

  removeListeners() {
    this.container.removeEventListener('click', this.close.bind(this));
    this.container.removeEventListener('submit', this.submit.bind(this));
    this.container.removeEventListener(
      'input',
      validate.validateHandler.bind(validate),
    );
  }

  submit(e) {
    e.preventDefault();

    const newCardForm = document.forms.new;

    if (e.target.name === 'edit') {
      this.infoName.textContent = this.usernameInput.value;
      this.infoJob.textContent = this.jobInput.value;
      this.render(e);
    } else {
      cardList.addCard(
        newCardForm.elements.name.value,
        newCardForm.elements.link.value,
      );
      this.render(e);
    }
  }
}
