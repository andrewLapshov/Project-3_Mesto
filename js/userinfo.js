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
<<<<<<< HEAD
    profilePopup.submitRender(e);
=======
    window.profilePopup.submitRender(e);
>>>>>>> 9e307d4feb524d03e4da08ae34a4364bba273b58

    this.api
      .editUserInfo(name, about)
      .then(result => {
        this.infoName.textContent = result.name;
        this.infoJob.textContent = result.about;
<<<<<<< HEAD
        profilePopup.close();
      })
      .catch(() => {
        e.target.lastElementChild.textContent = this.connectError;
=======
        window.profilePopup.close();
      })
      .catch(() => {
        e.target.lastElementChild.textContent = window.connectError;
>>>>>>> 9e307d4feb524d03e4da08ae34a4364bba273b58
      })
      .finally(() => {
        e.target.elements.submit.textContent = 'Сохранить';
      });
  }

  editUserAvatar(link, e) {
<<<<<<< HEAD
    profilePopup.submitRender(e);
=======
    window.profilePopup.submitRender(e);
>>>>>>> 9e307d4feb524d03e4da08ae34a4364bba273b58

    this.api
      .editUserAvatar(link)
      .then(result => {
        this.infoAvatar.style.backgroundImage = `url(${result.avatar})`;
<<<<<<< HEAD
        profilePopup.close();
      })
      .catch(() => {
        e.target.lastElementChild.textContent = this.connectError;
=======
        window.profilePopup.close();
      })
      .catch(() => {
        e.target.lastElementChild.textContent = window.connectError;
>>>>>>> 9e307d4feb524d03e4da08ae34a4364bba273b58
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
