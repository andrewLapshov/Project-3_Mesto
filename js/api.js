class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getJSONResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    }).then(res => this.getJSONResponse(res));
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    }).then(res => this.getJSONResponse(res));
  }

  addCard(name, link) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        link,
      }),
      headers: this.headers,
    }).then(res => this.getJSONResponse(res));
  }

  editUserInfo(name, about) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(res => this.getJSONResponse(res));
  }

  editUserAvatar(link) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: link,
      }),
    }).then(res => this.getJSONResponse(res));
  }

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(res => this.getJSONResponse(res));
  }

  likeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/like/${cardId}`, {
      method: 'PUT',
      headers: this.headers,
    }).then(res => this.getJSONResponse(res));
  }

  deleteLikeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/like/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(res => this.getJSONResponse(res));
  }
}

/*

Очень хорошая работа:
- реализован весь предложенный функционал
- сделано отображение ошибок в попапе
- проверка вынесена в метод getJSONResponse
- изменения на странице происходят только после ответа сервера
- порядок в коде, программа отлично разделена на классы и файлы


Небольшое замечание по проектной работе 8 - класс Popup нарушает принцип открытости-закрытости т.к.
в методах проверяется нажатие на какую кнопку произошло, лучше разбить класс Popup на несколько с использованием
наследования - выделить классы AddCardPopup и ProfilePopup наследуемые от абстрактного класса Popup
Подробнее о принципе открытости- закрытости можно почитать здесь https://habr.com/ru/company/tinkoff/blog/472186/

Успехов в дальнейшем обучении!

*/
