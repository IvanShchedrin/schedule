// Получаем месяц в родительном падеже. Используется в шаблонизаторе
const months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
export const getMonth = month => months[month];

// Проверка на возможность преобразовать значение к дате
export const isDateValid = date => new Date(date) !== "Invalid Date" && !isNaN(new Date(date));