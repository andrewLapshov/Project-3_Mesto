class UserInfo {
  constructor() {
    this.infoName = document.querySelector('.user-info__name');
    this.infoJob = document.querySelector('.user-info__job');
    this.infoAvatar = document.querySelector('.user-info__photo');
  }

  editUserInfo(name, about, e) {
    e.target.lastElementChild.textContent = '';
    e.target.elements.submit.textContent = 'Загрузка...';

    api
      .editUserInfo(name, about)
      .then(result => {
        this.infoName.textContent = result.name;
        this.infoJob.textContent = result.about;
        popupContainer.render(e);
      })
      .catch(() => {
        e.target.lastElementChild.textContent = connectError;
      })
      .finally(() => {
        e.target.elements.submit.textContent = 'Сохранить';
      });
  }

  editUserAvatar(link, e) {
    e.target.lastElementChild.textContent = '';
    e.target.elements.submit.textContent = 'Загрузка...';

    api
      .editUserAvatar(link)
      .then(result => {
        this.infoAvatar.style.backgroundImage = `url(${result.avatar})`;
        popupContainer.render(e);
      })
      .catch(() => {
        e.target.lastElementChild.textContent = connectError;
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
        const newError = document
          .querySelector('.error-template')
          .content.cloneNode(true);
        document.querySelector('.profile').appendChild(newError);
      });
  }
}
