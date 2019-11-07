/* eslint-disable func-names */
(function() {
  const rootContainer = document.querySelector('.root');
  const popup = document.querySelector('.popup');

  const cardList = new CardList(
    document.querySelector('.places-list'),
    window.initialCards,
  );
  const api = new Api({
    baseUrl: 'http://95.216.175.5/cohort5',
    headers: {
      authorization: '7c52e275-a3fe-469a-b1d5-5405c9a5e586',
      'Content-Type': 'application/json',
    },
  });

  const popupContainer = new Popup(popup);
  const validate = new Validation();

  window.api = api;
  window.cardList = cardList;
  window.validate = validate;

  rootContainer.addEventListener(
    'click',
    popupContainer.open.bind(popupContainer),
  );
})();

/**
 * Здравствуйте. Удивили ))
 * С настренным линтером, с разбивкой файлов и так далее ... круто )
 *
 * можно лучше. Зачем вы делаете глобальным  window.initialCards = initialCards;
 *
 * можно лучше: в классе Card вы вешаете на каждую карточку слушатель , почему не на родителя
 * а потом удаляете. Повешайте на родителя и удалять не придётся слушатель как и вешать
 *
 * можно лучше. Я бы в классе  CardList делал инъекцию класса card. https://habr.com/ru/post/232851/
 *
 * Давно таких хороших работ не видел, вы молодец
 *
 * @koras
 *
 */
