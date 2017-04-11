import lecturersData from 'json!./../data/lecturers.json';

const lecturerImage = document.querySelector('.lecturer__image');
const lecturerText = document.querySelector('.lecturer__text');
const lecturerPopup = document.querySelector('.lecturer');
const htmlElement = document.querySelector('html');
let prevScrollTop = 0;

const handleLecturerClick = (event) => {
  event.preventDefault();
  const data = lecturersData[event.target.pathname.split(/[/ ]+/).pop()];

  prevScrollTop = document.body.scrollTop;
  document.body.classList.add('overlay');
  htmlElement.classList.add('overlay');
  lecturerPopup.classList.add('lecturer_active');
  lecturerImage.src = data.image;
  lecturerText.innerHTML = data.about;
};

const handleTitleClick = (event) => {
  event.preventDefault();
  event.target.parentNode.querySelector('.schedule-event__review').classList.add('schedule-event__review_active');
};

document.querySelector('.lecturer__cross').addEventListener('click', () => {
  htmlElement.classList.remove('overlay');
  document.body.classList.remove('overlay');
  document.body.scrollTop = prevScrollTop;
  lecturerImage.parentNode.classList.remove('lecturer_active');
});

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
