const lecturersData = require('json!./../data/lecturers.json');
const lecturerImage = document.querySelector('.lecturer-image');
const lecturerText = document.querySelector('.lecturer-text');
let prevScrollTop = 0;

const lecturersClicks = () => {
  const lecturers = document.querySelectorAll('.schedule-event__lecturer > .pseudo-link');

  lecturers.forEach(lecturer => lecturer.addEventListener('click', (event) => {
    event.preventDefault();

    const id = event.target.pathname.substring(1);
    const data = lecturersData[id];

    prevScrollTop = document.body.scrollTop;
    document.body.classList.add('overlay');
    document.querySelector('html').classList.add('overlay');
    lecturerImage.parentNode.classList.add('active');
    lecturerImage.src = data.image;
    lecturerText.innerHTML = data.about;
  }));
};

const titlesClicks = () => {
  const titles = document.querySelectorAll('.schedule-event__topic > .pseudo-link');

  titles.forEach(title => title.addEventListener('click', (event) => {
    const review = event.currentTarget.parentNode.parentNode.querySelector('.schedule-event__review');
    review.classList.add('active');
  }));
};

const reviewMouseOvers = () => {
  const events = document.querySelectorAll('.schedule-event');

  events.forEach(event => event.addEventListener('mouseleave', (e) => {
    e.currentTarget.querySelector('.schedule-event__review').classList.remove('active');
  }));
};

const reviewCrossClicks = () => {
  const crosses = document.querySelectorAll('.schedule-event__review > svg');

  crosses.forEach(cross => cross.addEventListener('click', (event) => {
    event.currentTarget.parentNode.classList.remove('active');
  }));
};

const initEvents = () => {
  titlesClicks();
  reviewMouseOvers();
  reviewCrossClicks();
  lecturersClicks();

  document.querySelector('.lecturer-cross').addEventListener('click', () => {
    document.body.classList.remove('overlay');
    document.querySelector('html').classList.remove('overlay');
    document.body.scrollTop = prevScrollTop;
    lecturerImage.parentNode.classList.remove('active');
  });
};

export { initEvents };