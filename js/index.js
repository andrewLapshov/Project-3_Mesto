// (function () {
import CardList from './cardlist.js';
import UserInfo from './userinfo.js';
import Validation from './validaton.js';
import AddCardPopup from './popup/addcardpopup.js';
import ProfilePopup from './popup/profilepopup.js';
import AvatarPopup from './popup/avatarpopup.js';
import ImgPopup from './popup/imgpopup.js';

const cardContainer = document.querySelector('.places-list');
const popup = document.querySelector('.popup');
const addCardButton = document.querySelector('.user-info__button');
const profileButton = document.querySelector('.user-info__edit');
const avatarButton = document.querySelector('.user-info__photo');

export const api = new Api({
  baseUrl: 'http://95.216.175.5/cohort5',
  headers: {
    authorization: '7c52e275-a3fe-469a-b1d5-5405c9a5e586',
    'Content-Type': 'application/json',
  },
});

export const cardList = new CardList(cardContainer);
export const addCardPopup = new AddCardPopup(popup);
export const profilePopup = new ProfilePopup(popup);
export const avatarPopup = new AvatarPopup(popup);
export const imgPopup = new ImgPopup(popup);
export const userInfo = new UserInfo();
export const validate = new Validation();

// window.api = api;
// window.cardList = cardList;
// window.validate = validate;
// // window.popupContainer = popupContainer;
// window.userInfo = userInfo;
window.connectError = 'Ошибка :( Попробуйте еще раз';
// window.addCardPopup = addCardPopup;
// window.profilePopup = profilePopup;
// window.avatarPopup = avatarPopup;
// window.imgPopup = imgPopup;

addCardButton.addEventListener('click', addCardPopup.open);
profileButton.addEventListener('click', profilePopup.open);
avatarButton.addEventListener('click', avatarPopup.open);
cardContainer.addEventListener('click', imgPopup.open);

cardList.render();
userInfo.getUserInfo();

// })();
