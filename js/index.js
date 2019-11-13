(function() {
  const rootContainer = document.querySelector('.root');
  const popup = document.querySelector('.popup');

  const api = new Api({
    baseUrl: 'http://95.216.175.5/cohort5',
    headers: {
      authorization: '7c52e275-a3fe-469a-b1d5-5405c9a5e586',
      'Content-Type': 'application/json',
    },
  });

  const cardList = new CardList(document.querySelector('.places-list'));
  const popupContainer = new Popup(popup);
  const userInfo = new UserInfo();
  const validate = new Validation();

  window.api = api;
  window.cardList = cardList;
  window.validate = validate;
  window.popupContainer = popupContainer;
  window.userInfo = userInfo;
  window.connectError = 'Ошибка :( Попробуйте еще раз';

  cardList.render();
  userInfo.getUserInfo();

  rootContainer.addEventListener(
    'click',
    popupContainer.open.bind(popupContainer),
  );
})();
