const titlesClick = () => {
  const titles = document.querySelectorAll('.schedule-event__topic > .pseudo-link');

  titles.forEach(title => title.addEventListener('click', () => {
    const review = event.target.parentNode.parentNode.querySelector('.schedule-event__review');
    review.classList.add('active');
  }));
};

const reviewMouseOver = () => {
  const events = document.querySelectorAll('.schedule-event');

  events.forEach(event => event.addEventListener('mouseleave', (e) => {
    e.target.querySelector('.schedule-event__review').classList.remove('active');
  }));
};

const reviewCrossClick = () => {
  const crosses = document.querySelectorAll('.schedule-event__review > svg');

  crosses.forEach(cross => cross.addEventListener('click', (event) => {
    for (let i = 0; i < event.path.length; i++) {
      if (typeof event.path[i].className === 'string' && event.path[i].className.indexOf('schedule-event__review') !== -1) {
        event.path[i].classList.remove('active');
        return;
      }
    }
  }));
};

const lecturersClick = () => {
  const lecturers = document.querySelectorAll('.schedule-event__lecturer > .pseudo-link');

  lecturers.forEach(lecturer => lecturer.addEventListener('click', (event) => {
    event.preventDefault();
    const id = event.target.pathname.substring(1);
    console.log(id);
  }));
};

const initEvents = () => {
  titlesClick();
  reviewMouseOver();
  reviewCrossClick();
  lecturersClick();
};

export { initEvents };