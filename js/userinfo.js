export default class UserInfo {
  constructor() {
    this.profilePopup = window.profilePopup;
    this.connectError = window.connectError;
    this.infoName = document.querySelector('.user-info__name');
    this.infoJob = document.querySelector('.user-info__job');
    this.infoAvatar = document.querySelector('.user-info__photo');
  }

  editUserInfo(name, about, e) {
    this.profilePopup.submitRender(e);

    api
      .editUserInfo(name, about)
      .then(result => {
        this.infoName.textContent = result.name;
        this.infoJob.textContent = result.about;
        this.profilePopup.close();
      })
      .catch(() => {
        e.target.lastElementChild.textContent = this.connectError;
      })
      .finally(() => {
        e.target.elements.submit.textContent = 'Сохранить';
      });
  }

  editUserAvatar(link, e) {
    this.profilePopup.submitRender(e);

    api
      .editUserAvatar(link)
      .then(result => {
        this.infoAvatar.style.backgroundImage = `url(${result.avatar})`;
        this.profilePopup.close();
      })
      .catch(() => {
        e.target.lastElementChild.textContent = this.connectError;
      })
      .finally(() => {
        e.target.elements.submit.textContent = 'Сохранить';
      });
  }

  getUserInfo() {
    api
      .getUserInfo()
      .then(result => {
        this.infoAvatar.style.backgroundImage = `url(${result.avatar})`;
        this.infoName.textContent = result.name;
        this.infoJob.textContent = result.about;
      })
      .catch(() => {
        // const newError = document
        //   .querySelector('.error-template')
        //   .content.cloneNode(true);
        // document.querySelector('.profile').appendChild(newError);
      });
  }
}
