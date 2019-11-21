export default class AvatarPopup extends Popup {
  constructor(container) {
    super(container);
    this.userInfo = window.userInfo;

    this.open = this.open.bind(this);
    this.submit = this.submit.bind(this);
  }

  open() {
    this.render('.popup-template_avatar');
    this.addListeners();
  }

  submit(e) {
    e.preventDefault();
    this.userInfo.editUserAvatar(document.forms.avatar.elements.link.value, e);
  }
}