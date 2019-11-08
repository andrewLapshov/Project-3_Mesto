class CardList {
  constructor(container) {
    this.container = container;
    this.render = this.render.bind(this);
  }

  addCard(result) {
    const { cardElement } = new Card(result, true);
    this.container.appendChild(cardElement);
  }

  render(arr) {
    arr.forEach(item => {
      const { cardElement } = new Card(item, false);
      this.container.appendChild(cardElement);
    });
  }
}
