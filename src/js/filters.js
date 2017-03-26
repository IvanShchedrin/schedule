import scheduleData from 'json!./../data/schedule.json';
import { findElem } from './../utils';

const message = document.querySelector('.filter-message');
const events = document.querySelector('.schedule').children;
const filters = {
  lecturer: (item, value) => item.lecturer === value,
  school: (item, value) => item.schools.indexOf(value) !== -1,
  // dateAfter: (item, value) => +new Date(item.date) > +new Date(value),
  // dateBefore: (item, value) => +new Date(item.date) < +new Date(value),
};
const values = {};

const filterEvents = (key, value) => {
  const hiddenEvents = new Array(events.length + 1).join('0').split('').map(parseFloat);

  if (value === 'all') {
    delete values[key];
  } else {
    values[key] = value;
  }

  Object.keys(values).forEach((filterKey) => {
    hiddenEvents.forEach((hiddenEvent, i) => {
      if (hiddenEvent) {
        return;
      }

      const eventData = findElem(scheduleData, 'alias', events[i].dataset.alias);

      if (!filters[filterKey](eventData, values[filterKey])) {
        hiddenEvents[i] = 1;
      }
    });
  });

  hiddenEvents.forEach((item, i) => item ? events[i].classList.add('hidden') : events[i].classList.remove('hidden'));
  hiddenEvents.indexOf(0) === -1 ? message.classList.remove('hidden') : message.classList.add('hidden');
};

const initFilters = () => {
  document.querySelector('.filter-lecturer').addEventListener('change', (event) => filterEvents('lecturer', event.target.value));
  document.querySelector('.filter-school').addEventListener('change', (event) => filterEvents('school', event.target.value));
};

export { initFilters };