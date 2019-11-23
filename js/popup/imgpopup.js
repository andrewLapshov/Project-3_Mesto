import Popup from './Popup.js';

export default class ImgPopup extends Popup {
  constructor(container) {
    super(container);

    this.open = this.open.bind(this);
  }

  open(e) {
    if (e.target.classList.contains('place-card__image')) {
      this.render('.popup-template_img');
      this.container
        .querySelector('.popup__image')
        .setAttribute('src', e.target.style.backgroundImage.slice(5, -2));

      this.container.addEventListener('click', this.close);
    }
  }
}
