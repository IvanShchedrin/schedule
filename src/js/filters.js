import scheduleData from 'json!./../data/schedule.json';
import { findElem, isDateValid } from './utils';

const message = document.querySelector('.filter__message');
const events = document.querySelector('.schedule').children;
const filters = {
  lecturer: (item, value) => item.lecturer === value,
  school: (item, value) => item.schools.indexOf(value) !== -1,
  dateAfter: (item, value) => +new Date(item.date) >= +new Date(value),
  dateBefore: (item, value) => +new Date(item.date) <= +new Date(value),
};
const values = {};

const filterEvents = (key, value) => {
  if ((key === 'dateAfter' || key === 'dateBefore') && (!isDateValid(value) || value.length < 4)) {
    delete values[key];
    return;
  }

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

  hiddenEvents.forEach((item, i) => item ? events[i].classList.add('schedule-event_hidden') : events[i].classList.remove('schedule-event_hidden'));
  hiddenEvents.indexOf(0) === -1 ? message.classList.remove('filter__message_hidden') : message.classList.add('filter__message_hidden');
};

export default function () {
  document.querySelector('#lecturer').addEventListener('change', event => filterEvents('lecturer', event.target.value));
  document.querySelector('#school').addEventListener('change', event => filterEvents('school', event.target.value));
  document.querySelector('#dateAfter').addEventListener('input', event => filterEvents('dateAfter', event.target.value));
  document.querySelector('#dateBefore').addEventListener('input', event => filterEvents('dateBefore', event.target.value));
};