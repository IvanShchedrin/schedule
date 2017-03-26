import lecturersData from 'json!./../data/lecturers.json';
const lecturerImage = document.querySelector('.lecturer-image');
const lecturerText = document.querySelector('.lecturer-text');
let prevScrollTop = 0;

const handleLecturerClick = (event) => {
  event.preventDefault();

  const id = event.target.pathname.substring(1);
  const data = lecturersData[id];

  prevScrollTop = document.body.scrollTop;
  document.body.classList.add('overlay');
  document.querySelector('html').classList.add('overlay');
  lecturerImage.parentNode.classList.add('active');
  lecturerImage.src = data.image;
  lecturerText.innerHTML = data.about;
};

const lecturersClicks = () => {
  const lecturers = document.querySelectorAll('.schedule-event__lecturer > .pseudo-link');

  [].forEach.call(lecturers, lecturer => lecturer.addEventListener('click', handleLecturerClick));
};

const lecturerClose = () => {
  document.querySelector('.lecturer-cross').addEventListener('click', () => {
    document.body.classList.remove('overlay');
    document.querySelector('html').classList.remove('overlay');
    document.body.scrollTop = prevScrollTop;
    lecturerImage.parentNode.classList.remove('active');
  });
};

const handleTitleClick = (event) => {
  event.preventDefault();
  event.currentTarget.parentNode.parentNode.querySelector('.schedule-event__review').classList.add('active');
};
const titlesClicks = () => {
  const titles = document.querySelectorAll('.schedule-event__topic > .pseudo-link');
  [].forEach.call(titles, title => title.addEventListener('click', handleTitleClick));
};

const handleMouseOver = event => event.currentTarget.querySelector('.schedule-event__review').classList.remove('active');
const reviewMouseOvers = () => {
  const events = document.querySelector('.schedule').children;
  [].forEach.call(events, event => event.addEventListener('mouseleave', handleMouseOver));
};

const handleCrossClick = event => event.currentTarget.parentNode.classList.remove('active');
const reviewCrossClicks = () => {
  const crosses = document.querySelectorAll('.schedule-event__review > svg');
  [].forEach.call(crosses, cross => cross.addEventListener('click', handleCrossClick));
};

const initEvents = () => {
  titlesClicks();
  reviewMouseOvers();
  reviewCrossClicks();
  lecturersClicks();
  lecturerClose();
};

export { initEvents };