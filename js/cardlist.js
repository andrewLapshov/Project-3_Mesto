class CardList {
  constructor(container) {
    this.container = container;
    this.render = this.render.bind(this);
  }

  addCard(name, link, e) {
    e.target.elements.submit.classList.add('popup__button_edit');
    e.target.lastElementChild.textContent = '';
    e.target.elements.submit.textContent = 'Загрузка...';

    api
      .addCard(name, link)
      .then(result => {
        const { cardElement } = new Card(result, true);
        this.container.appendChild(cardElement);
        popupContainer.render(e);
      })
      .catch(() => {
        e.target.lastElementChild.textContent = connectError;
      })
      .finally(() => {
        e.target.elements.submit.classList.remove('popup__button_edit');
        e.target.elements.submit.textContent = '+';
      });
  }

  render() {
    api
      .getInitialCards()
      .then(result => {
        result.forEach(item => {
          const { cardElement } = new Card(item, false);
          this.container.appendChild(cardElement);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
}
