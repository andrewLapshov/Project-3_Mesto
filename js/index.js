<<<<<<< HEAD
import Api from './Api.js';
import CardList from './CardList.js';
import UserInfo from './UserInfo.js';
import Validation from './Validation.js';
import AddCardPopup from './popup/AddCardPopup.js';
import ProfilePopup from './popup/ProfilePopup.js';
import AvatarPopup from './popup/AvatarPopup.js';
import ImgPopup from './popup/ImgPopup.js';
=======
/* eslint-disable func-names */
(function() {
  const cardContainer = document.querySelector('.places-list');
  const popup = document.querySelector('.popup');
  const addCardButton = document.querySelector('.user-info__button');
  const profileButton = document.querySelector('.user-info__edit');
  const avatarButton = document.querySelector('.user-info__photo');
>>>>>>> 9e307d4feb524d03e4da08ae34a4364bba273b58

const cardContainer = document.querySelector('.places-list');
const popup = document.querySelector('.popup');
const addCardButton = document.querySelector('.user-info__button');
const profileButton = document.querySelector('.user-info__edit');
const avatarButton = document.querySelector('.user-info__photo');

<<<<<<< HEAD
export const api = new Api({
  baseUrl: 'http://95.216.175.5/cohort5',
  headers: {
    authorization: '7c52e275-a3fe-469a-b1d5-5405c9a5e586',
    'Content-Type': 'application/json',
  },
});

export const cardList = new CardList(cardContainer);
export const userInfo = new UserInfo();
export const addCardPopup = new AddCardPopup(popup);
export const profilePopup = new ProfilePopup(popup);
export const avatarPopup = new AvatarPopup(popup);
export const imgPopup = new ImgPopup(popup);
export const validate = new Validation();

addCardButton.addEventListener('click', addCardPopup.open);
profileButton.addEventListener('click', profilePopup.open);
avatarButton.addEventListener('click', avatarPopup.open);
cardContainer.addEventListener('click', imgPopup.open);

cardList.render();
userInfo.getUserInfo();
=======
  const cardList = new CardList(cardContainer);
  window.cardList = cardList;
  const addCardPopup = new AddCardPopup(popup);
  const profilePopup = new ProfilePopup(popup);
  const avatarPopup = new AvatarPopup(popup);
  const imgPopup = new ImgPopup(popup);
  const userInfo = new UserInfo();
  const validate = new Validation();

  window.api = api;

  window.validate = validate;
  window.userInfo = userInfo;
  window.connectError = 'Ошибка :( Попробуйте еще раз';
  window.addCardPopup = addCardPopup;
  window.profilePopup = profilePopup;
  window.avatarPopup = avatarPopup;
  window.imgPopup = imgPopup;

  addCardButton.addEventListener('click', addCardPopup.open);
  profileButton.addEventListener('click', profilePopup.open);
  avatarButton.addEventListener('click', avatarPopup.open);
  cardContainer.addEventListener('click', imgPopup.open);

  cardList.render();
  userInfo.getUserInfo();
})();
>>>>>>> 9e307d4feb524d03e4da08ae34a4364bba273b58
