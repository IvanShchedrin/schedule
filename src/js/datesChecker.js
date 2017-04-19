import scheduleData from 'json!./../data/schedule.json';
const events = document.querySelectorAll('.schedule-event');
const dateNow = +new Date();

// Предполагается, что консистентность данных соблюдена и разметка соответствует тем данным, которые
// содержатся в js-бандле

// Пробегаем во всем событиям и, в зависимости от времени (в будущем, от начала прошло меньше
// или больше 3-х часов) добавляем соответствующий класс
scheduleData.forEach((event, index) => {
  const dateEvent = +new Date(event.date);
  let className;

  if (dateEvent < dateNow - 1000*60*180) { // 3 часа
    className = 'schedule-event_past';
  } else if (dateEvent < dateNow) {
    className = 'schedule-event_now';
  } else {
    className = 'schedule-event_future';
  }
  events[index].classList.add(className);
});