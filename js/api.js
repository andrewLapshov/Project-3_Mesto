/* eslint-disable class-methods-use-this */
class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
    this.getInitialCards();
    this.getUserInfo();
  }

  getInitialCards() {
    fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(result => {
        cardList.render(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  addCard(name, link, e) {
    e.target.textContent = 'Загрузка...';
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
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(result => {
        cardList.addCard(result);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        e.target.textContent = '+';
      })
  }

  deleteCard(cardId) {
    fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(err => {
        console.log(err);
      });
  }


  updateUserInfo(result) {
    document.querySelector('.user-info__photo').style.backgroundImage = `url(${result.avatar})`;
    document.querySelector('.user-info__name').textContent = result.name;
    document.querySelector('.user-info__job').textContent = result.about;
  }

  getUserInfo() {
    fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(result => {
        updateUserInfo(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  editUserInfo(name, about, e) {
    e.target.textContent = 'Загрузка...';
    fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about,
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(result => {
        updateUserInfo(result);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        e.target.textContent = 'Сохранить';
      })
  }
}
