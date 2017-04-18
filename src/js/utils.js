const months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];

export const getMonth = month => months[month];

export const isDateValid = date => new Date(date) !== "Invalid Date" && !isNaN(new Date(date));

export const findElem = (array, key, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return array[i];
    }
  }
};