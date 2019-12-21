# Сервис "Mesto"

## Учебный проект №3, выполненный на курсе "Веб-разработчик" в Яндекс.Практикуме.

Сервис обмена карточками интересных мест.

### Описание

Каждая карточка включает в себя фотографию места, название, кнопку лайка с счетчиком, иконку удаления. Кроме этого, имеется возможность добавления личной информации - имени, профессии и аватара. Пользователь может отредактировать всю личную информацию, загрузить, лайкнуть или удалить карточку.

Весь процесс взаимодействия с данными происходит путем общения с API удаленного сервера Практикума. В случае неудачного запроса на сервер пользователю выдается соответствующая ошибка.

### Стек

HTML,CSS-верстка, методология BEM. В проекте использован нативный JavaScript, ООП, асинхронный код, fetch-запросы. JS-компоненты разбиты на модули. Во всех формах используется валидация средствами HTML и JavaScript.
Для сборки проекта использован Webpack: оптимизация картинок и шрифтов, минимизация CSS кода + вендорные префиксы, транспиляция JS-кода в Babel.

### В планах

Добавление проверки корректности ссылок фотографий карточек, приходящих с сервера.

### Использование

Демо проекта: https://andrewlapshov.github.io/Sprint-11/

Для запуска проекта локально:

- клонировать репозиторий
- `npm install` - установки всех необходимых пакетов
- `npm run dev` - проект будет доступен на локальном порте 8080
