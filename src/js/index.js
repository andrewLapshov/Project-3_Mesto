import '../style.css';
import Api from './api.js';
import CardList from './cardlist.js';
import UserInfo from './userinfo.js';
import AddCardPopup from './popup/addcardpopup.js';
import ProfilePopup from './popup/profilepopup.js';
import AvatarPopup from './popup/avatarpopup.js';
import ImgPopup from './popup/imgpopup.js';
import Card from './card.js';

const cardContainer = document.querySelector('.places-list');
const popup = document.querySelector('.popup');
const addCardButton = document.querySelector('.user-info__button');
const profileButton = document.querySelector('.user-info__edit');
const avatarButton = document.querySelector('.user-info__photo');

const serverUrl =
  NODE_ENV === 'development'
    ? 'http://praktikum.tk/cohort5'
    : 'https://praktikum.tk/cohort5';

export const api = new Api({
  baseUrl: serverUrl,
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

addCardButton.addEventListener('click', addCardPopup.open);
profileButton.addEventListener('click', profilePopup.open);
avatarButton.addEventListener('click', avatarPopup.open);
cardContainer.addEventListener('click', imgPopup.open);

api
  .getAppInfo()
  .then(([cardsInfo, userData]) => {
    const regex = /((\.jpg)|(\.png)|(\.jpeg))$/i;
    cardsInfo.forEach(item => {
      if (regex.test(item.link)) {
        const card = new Card(item, false);
        const cardElement = card.render();
        cardContainer.appendChild(cardElement);
      }
    });
    userInfo.getUserInfo(userData);
  })
  .catch(() => {
    const newError = document
      .querySelector('.error-template')
      .content.cloneNode(true);
    document.querySelector('.profile').appendChild(newError);
  });
