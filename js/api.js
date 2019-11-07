/* eslint-disable class-methods-use-this */
class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
    this.getInitialCards();
  }

  getInitialCards() {
    fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(result => {
        result.forEach(i => {
          const { cardElement } = new Card(i.name, i.link);
          cardList.container.appendChild(cardElement);
        });
      });
  }

  addCard(name, link) {
    fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        link,
      }),
      headers: this.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(result => {
        const { cardElement } = new Card(result.name, result.link);
        cardList.container.appendChild(cardElement);
      });
  }
}
