class AddCardPopup extends Popup {
  constructor(container) {
    super(container);

    this.open = this.open.bind(this);
    this.submit = this.submit.bind(this);
  }

  open() {
    this.render('.popup-template_new-card');
    this.addListeners();
  }

  submit(e) {
    e.preventDefault();
    window.cardList.addCard(
      document.forms.new.elements.name.value,
      document.forms.new.elements.link.value,
      e,
    );
  }
}
