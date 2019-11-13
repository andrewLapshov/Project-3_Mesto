class Popup {
  constructor(container) {
    this.container = container;
    this.edit = document.querySelector('.popup__content_edit');
    this.newCard = document.querySelector('.popup__content_new-card');
    this.image = document.querySelector('.popup__content_type_image');
    this.avatar = document.querySelector('.popup__content_avatar');

    this.usernameInput = document.forms.edit.elements.username;
    this.jobInput = document.forms.edit.elements.job;

    this.close = this.close.bind(this);
    this.submit = this.submit.bind(this);
  }

  open(e) {
    if (e.target.classList.contains('button')) {
      this.container.classList.add('popup_is-opened');
      this.addListeners();

      if (e.target.classList.contains('user-info__edit')) {
        this.edit.classList.add('popup__content_is-opened');

        this.usernameInput.value = userInfo.infoName.textContent;
        this.jobInput.value = userInfo.infoJob.textContent;
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
    } else if (e.target.classList.contains('user-info__photo')) {
      this.container.classList.add('popup_is-opened');
      this.addListeners();
      this.avatar.classList.add('popup__content_is-opened');
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
    this.container
      .querySelectorAll('.popup__error_type_submit')
      .forEach(item => {
        item.textContent = '';
      });
  }

  submit(e) {
    e.preventDefault();
    const newCardForm = document.forms.new;

    if (e.target.name === 'edit') {
      userInfo.editUserInfo(this.usernameInput.value, this.jobInput.value, e);
    } else if (e.target.name === 'avatar') {
      userInfo.editUserAvatar(document.forms.avatar.elements.link.value, e);
    } else {
      cardList.addCard(
        newCardForm.elements.name.value,
        newCardForm.elements.link.value,
        e,
      );
    }
  }

  submitRender(e) {
    e.target.lastElementChild.textContent = '';
    e.target.elements.submit.textContent = 'Загрузка...';
  }

  addListeners() {
    this.container.addEventListener('click', this.close);
    this.container.addEventListener('submit', this.submit);
    this.container.addEventListener('input', window.validate.validateHandler);
  }

  removeListeners() {
    this.container.removeEventListener('click', this.close);
    this.container.removeEventListener('submit', this.submit);
    this.container.removeEventListener(
      'input',
      window.validate.validateHandler,
    );
  }
}
