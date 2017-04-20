## Расписание
[Задание](https://academy.yandex.ru/events/frontend/shri_msk-2017/)

### Немного о реализации
Кратко по пунктам:
* Для сборки используется Gulp. Выбрал его за гибкость и простоту конфигурации. 
* Разметка генерируется с помощью EJS. Ему подкармливается JSON модель и на основе нее генерирую HTML. Подключил минифаер, т.к. на выходе получается слишком много лишних переносов и отступов.
* Стили написаны на Sass. Используется Autoprefixer для автоматической расстановки префиксов. Также используется минифаер стилей.
* JS собираю Webpack-ом. Подключил Babel с es2015 и stage-2 пресетами для возможности писать на ES6. Минифаются встроенным плагином UglifyJs.
* Прочие статичные файлы (а там аж одна svg-шка😆) просто перекидываются в директорию с билдом.

### Обоснование использования Javascript-а
JS использается для следующих задач:
#### Расстановка классов - прошедшее событие, идет сейчас или будет в будущем.
На практике намного лучше сделать эту проверку на этапе серверного рендеринга или JS-ом в момент рендеринга компонентов. Т.к. у нас статичная верстка, логичнее всего JS-ом проверить события после добавления их в DOM.
#### Обработка кликов
Имеется 4 ключевых момента, которые необходимо обработать: клик на имени лектора, клик на названии события, клики на крестиках, закрывающих описание лекции и инфо о лекторе. Все это можно сделать и CSS-ом, но это наложит ряд ограничений и сильно усложнит верстку. Было решено обработку этих событий вынести в JS. Для тех, у кого JS выключен, есть фоллбек - он сможет перейти по ссылке и прочитать описание лекции или инфо о лекторе в другом окне.
#### Фильтры
Фильтрация была вынесена в JS по причине легкости реализации. Честно говоря, не пришло в голову, как можно реализовать фильтрацию по датам одним CSS-ом.

### Проблемы
* Вынести в отдельный файл константы, такие как паддинги/маржины, цвета, размеры шрифтов и т.п.
* Облегчить js-бандл, перенеся всю необходимую информацию в data-атрибуты. Сейчас данные берутся из подключенных JSON-моделек.
* Проблема при смене изображения лектора. При медленном интернете изображение не успевает подгрузиться и при просмотре второго лектора некоторое время видно изображение первого. Можно:  
1. закостылить, добавив transition: opacity с небольшим таймаутом (текущая реализация);  
2. создать много попапов и триггерить их, но это захламит разметку и сгенерирует лишний траффик (вдруг пользователь не будет читать инфо, а картинки уже будут загружены);

### Разработка:
$ npm i  
$ gulp  
-> localhost:8000

### Сборка для прода:
$ gulp build  
-> ./build

### Сборка и деплой на gh-pages:
$ gulp gh:publish  
-> https://oktava6.github.io/schedule/
