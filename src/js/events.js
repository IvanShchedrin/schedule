import lecturersData from 'json!./../data/lecturers.json';

const lecturerImage = document.querySelector('.lecturer__image');
const lecturerText = document.querySelector('.lecturer__text');
const lecturerPopup = document.querySelector('.lecturer');
const htmlElement = document.querySelector('html');
let prevScrollTop = 0;

// Обработчик клика на имени лектора. Превентим, т.к. это ссылка (см коммент handleTitleClick)
const handleLecturerClick = (event) => {
  event.preventDefault();
  // Вытаскиваем неведомым способом алиас лектора
  const data = lecturersData[event.target.pathname.split(/[/ ]+/).pop()];

  // Сохраняем текущий скролл для safari
  prevScrollTop = document.body.scrollTop;
  // Обрубаем скролл на странице с помощью overflow: hidden
  document.body.classList.add('overlay');
  htmlElement.classList.add('overlay');
  // Показываем попап с инфо о лекторе
  lecturerPopup.classList.add('lecturer_active');
  // Меняем картинку и текст
  lecturerImage.src = data.image;
  lecturerText.innerHTML = data.about;
};

// Оработчик клика на названии лекции. Используется ссылка с перевентом события для возможности перехода
// к событию по ссылке, если отключен javascript
const handleTitleClick = (event) => {
  event.preventDefault();
  event.target.parentNode.querySelector('.schedule-event__review').classList.add('schedule-event__review_active');
};

// Обрабатываем клик на крестике попапа с инфо о лекторе
document.querySelector('.lecturer__cross').addEventListener('click', () => {
  // Сбралываем класс с overflow: hidden
  htmlElement.classList.remove('overlay');
  document.body.classList.remove('overlay');
  // Возвращаем скролл для safari
  document.body.scrollTop = prevScrollTop;
  lecturerImage.parentNode.classList.remove('lecturer_active');
});

// Навешиваем обработчик клика на контейнере с событияями. Выполняем определенное лействие в зависимости
// от того, где именно произошел клик.
document.querySelector('.schedule').addEventListener('click', (event) => {
  const classList = event.target.classList;

  if (classList.contains('schedule-event__lecturer')) {
    handleLecturerClick(event);
  } else if (classList.contains('schedule-event__topic')) {
    handleTitleClick(event);
  } else if (classList.contains('schedule-event__review-cross')) {
    event.target.parentNode.classList.remove('schedule-event__review_active');
  }
});
