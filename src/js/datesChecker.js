import scheduleData from 'json!./../data/schedule.json';
import { findElem } from './utils';

export default function() {
  const events = document.querySelectorAll('.schedule-event');
  const dateNow = +new Date();

  [].forEach.call(events, event => {
    const eventData = findElem(scheduleData, 'alias', event.dataset.alias);
    const dateEvent = +new Date(eventData.date);
    let className = 'schedule-event_future';

    if (dateEvent < dateNow - 1000*60*180) { // 3 hours left
      className = 'schedule-event_past';
    } else if (dateEvent < dateNow) {
      className = 'schedule-event_now';
    }
    event.classList.add(className);
  });
};