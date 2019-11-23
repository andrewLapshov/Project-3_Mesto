import { api, profilePopup } from './index.js';

export default class UserInfo {
  constructor() {
    this.api = api;
    this.connectError = 'Ошибка :( Попробуйте еще раз';
    this.infoName = document.querySelector('.user-info__name');
    this.infoJob = document.querySelector('.user-info__job');
    this.infoAvatar = document.querySelector('.user-info__photo');
  }

  editUserInfo(name, about, e) {
    profilePopup.submitRender(e);

    this.api
      .editUserInfo(name, about)
      .then(result => {
        this.infoName.textContent = result.name;
        this.infoJob.textContent = result.about;
        profilePopup.close();
      })
      .catch(() => {
        e.target.lastElementChild.textContent = this.connectError;
      })
      .finally(() => {
        e.target.elements.submit.textContent = 'Сохранить';
      });
  }

  editUserAvatar(link, e) {
    profilePopup.submitRender(e);

    this.api
      .editUserAvatar(link)
      .then(result => {
        this.infoAvatar.style.backgroundImage = `url(${result.avatar})`;
        profilePopup.close();
      })
      .catch(() => {
        e.target.lastElementChild.textContent = this.connectError;
      })
      .finally(() => {
        e.target.elements.submit.textContent = 'Сохранить';
      });
  }

  getUserInfo() {
    this.api
      .getUserInfo()
      .then(result => {
        this.infoAvatar.style.backgroundImage = `url(${result.avatar})`;
        this.infoName.textContent = result.name;
        this.infoJob.textContent = result.about;
      })
      .catch(() => {
        const newError = document
          .querySelector('.error-template')
          .content.cloneNode(true);
        document.querySelector('.profile').appendChild(newError);
      });
  }
}
