class CardList {
  constructor(container, arr) {
    this.container = container;
    this.arr = arr;
    this.render();
  }

  addCard(name, link) {
    const { cardElement } = new Card(name, link);
    this.container.appendChild(cardElement);
  }

  render() {
    this.arr.forEach(item => {
      const { cardElement } = new Card(item.name, item.link);
      this.container.appendChild(cardElement);
    });
  }
}
