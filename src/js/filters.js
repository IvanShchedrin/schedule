import scheduleData from 'json!./../data/schedule.json';
import { isDateValid } from './utils';

// Сообщение о пустом результате фильтрации
const message = document.querySelector('.filter__message');
const events = document.querySelectorAll('.schedule-event');
const dateNow = +new Date();
const treeHoursInMs = 1000*60*180;
// Можно выбрать фильтр по ключу и проверить, удовлетворяет ли событие данному значению
const filters = {
  lecturer: (item, value) => item.lecturer === value, // фильтр по лекторы
  school: (item, value) => item.schools.indexOf(value) !== -1, // фильтр по школам
  date: (item, value) => { // фльтр по дате
    if (value === 'past') return +new Date(item.date) < (dateNow - treeHoursInMs); // 3 часаа
    if (value === 'now') return (+new Date(item.date) < dateNow) && (+new Date(item.date) > dateNow - treeHoursInMs);
    if (value === 'future') return +new Date(item.date) > dateNow;
    return true;
  },
};
// Текущие значение фильтров
const values = {};

const filterEvents = (key, value) => {
  // Немного странным кажется поведение, когда начинаешь вбивать дату и сразу пустой результат
  // Применяем фильтр только когда указаны первые 4 символа - год
  if ((key === 'dateAfter' || key === 'dateBefore') && (!isDateValid(value) || value.length < 4)) {
    delete values[key];
    return;
  }

  // Генерим массив нулей в количестве = количеству событий
  // В него будем копить все события, которые потом пометим спрятанными
  const hiddenEvents = new Array(events.length + 1).join('0').split('').map(parseFloat);

  // Сбрасываем фильтр, если выбран "показать все"
  if (value === 'all') {
    delete values[key];
  } else {
    values[key] = value;
  }

  // Пробегаем по всем фильтрам
  Object.keys(values).forEach((filterKey) => {
    hiddenEvents.forEach((hiddenEvent, index) => {
      // Если уже помечен как спрятанный, не делаем лушних вычислений
      if (hiddenEvent === 1) {
        return;
      }

      // По ключу достаем фильтр и делаем проверку. Если не ОК, то помечаем единичкой - спрятать!
      if (!filters[filterKey](scheduleData[index], values[filterKey])) {
        hiddenEvents[index] = 1;
      }
    });
  });

  // Прячем или показываем все события
  hiddenEvents.forEach((item, i) => item ? events[i].classList.add('schedule-event_hidden') : events[i].classList.remove('schedule-event_hidden'));
  // Если ниодного показанного события, то показываем сообщение о пустом результате
  hiddenEvents.indexOf(0) === -1 ? message.classList.remove('filter__message_hidden') : message.classList.add('filter__message_hidden');
};

// Навешиваем обработчики на инпуты
document.querySelector('#lecturer').addEventListener('change', event => filterEvents('lecturer', event.target.value));
document.querySelector('#school').addEventListener('change', event => filterEvents('school', event.target.value));
document.querySelector('#date').addEventListener('change', event => filterEvents('date', event.target.value));