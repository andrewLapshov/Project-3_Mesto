export default class Popup {
  constructor(container) {
    this.container = container;
    this.close = this.close.bind(this);
  }

  render(template) {
    const formPopup = document
      .querySelector(template)
      .content.cloneNode(true)
      .querySelector('.popup__content');
    this.container.appendChild(formPopup);

    this.container.classList.add('popup_is-opened');
  }

  close() {
    this.removeListeners();
    this.container.firstElementChild.remove();
    this.container.classList.remove('popup_is-opened');
  }

  submitRender(e) {
    e.target.lastElementChild.textContent = '';
    e.target.elements.submit.textContent = 'Загрузка...';
  }

  addListeners() {
    this.container.querySelector('.popup__close').addEventListener('click', this.close);
    this.container.addEventListener('submit', this.submit);
    this.container.addEventListener('input', window.validate.validateHandler);
  }

  removeListeners() {
    this.container.querySelector('.popup__close').removeEventListener('click', this.close);
    this.container.removeEventListener('submit', this.submit);
    this.container.removeEventListener(
      'input',
      window.validate.validateHandler,
    );
  }
}

  // open(e) {
  // if (e.target.classList.contains('button')) {
  // this.container.classList.add('popup_is-opened');
  // this.addListeners();

  // if (e.target.classList.contains('user-info__edit')) {
  //   this.edit.classList.add('popup__content_is-opened');

  //   this.usernameInput.value = userInfo.infoName.textContent;
  //   this.jobInput.value = userInfo.infoJob.textContent;

  // if (e.target.classList.contains('place-card__image')) {
  //   this.container.classList.add('popup_is-opened');
  //   this.addListeners();

  //   document
  //     .querySelector('.popup__image')
  //     .setAttribute('src', e.target.style.backgroundImage.slice(5, -2));
  //   this.image.classList.add('popup__content_is-opened');
// }
//  else if (e.target.classList.contains('user-info__photo')) {
//   this.container.classList.add('popup_is-opened');
//   this.addListeners();
//   this.avatar.classList.add('popup__content_is-opened');
// }
// }



// render(e) {
//   const editFormButton = document.querySelector('.popup__button_edit');

//   this.removeListeners();
//   e.target
//     .closest('.popup__content')
//     .classList.remove('popup__content_is-opened');
//   this.container.classList.remove('popup_is-opened');

//   editFormButton.removeAttribute('disabled');
//   editFormButton.classList.remove('popup__button_disabled');
//   this.edit.querySelectorAll('.popup__error').forEach(item => {
//     item.textContent = '';
//   });
//   this.container
//     .querySelectorAll('.popup__error_type_submit')
//     .forEach(item => {
//       item.textContent = '';
//     });
// }






