(function() {
  const rootContainer = document.querySelector('.root');
  const popup = document.querySelector('.popup');
  const cardList = new CardList(
    document.querySelector('.places-list'),
    window.initialCards,
  );
  const popupContainer = new Popup(popup);
  const validate = new Validation();

  window.cardList = cardList;
  window.validate = validate;

  rootContainer.addEventListener(
    'click',
    popupContainer.open.bind(popupContainer),
  );
})();
