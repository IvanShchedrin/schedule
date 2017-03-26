import scheduleData from 'json!./../data/schedule.json';
import { findElem } from './../utils';

const checkDates = () => {
  const events = document.querySelectorAll('.schedule-event') || [];
  const dateNow = new Date();

  [].forEach.call(events, event => {
    const eventData = findElem(scheduleData, 'alias', event.dataset.alias);

    if (!eventData) return;

    if (+new Date(eventData.date) < +dateNow + 1000*60*180) { // 3 hours left
      event.classList.add('schedule-event-past')
    }
  });
};

export default checkDates;