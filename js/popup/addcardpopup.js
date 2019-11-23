import Popup from './Popup.js';
import { cardList } from '../index.js';

export default class AddCardPopup extends Popup {
  constructor(container) {
    super(container);
    this.cardList = cardList;

    this.open = this.open.bind(this);
    this.submit = this.submit.bind(this);
  }

  open() {
    this.render('.popup-template_new-card');
    this.addListeners();
  }

  submit(e) {
    e.preventDefault();
    this.cardList.addCard(
      document.forms.new.elements.name.value,
      document.forms.new.elements.link.value,
      e,
    );
  }
}
