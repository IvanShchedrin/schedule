/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _datesChecker = __webpack_require__(1);

	var _datesChecker2 = _interopRequireDefault(_datesChecker);

	var _events = __webpack_require__(4);

	var _events2 = _interopRequireDefault(_events);

	var _filters = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _datesChecker2.default)();
	(0, _filters.initFilters)();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _schedule = __webpack_require__(2);

	var _schedule2 = _interopRequireDefault(_schedule);

	var _utils = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var checkDates = function checkDates() {
	  var events = document.querySelectorAll('.schedule-event') || [];
	  var dateNow = new Date();

	  [].forEach.call(events, function (event) {
	    var eventData = (0, _utils.findElem)(_schedule2.default, 'alias', event.dataset.alias);

	    if (!eventData) return;

	    if (+new Date(eventData.date) < +dateNow - 1000 * 60 * 120) {
	      // 2 hours left
	      event.classList.add('schedule-event_past');
	    }
	  });
	};

	exports.default = checkDates;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = [
		{
			"alias": "1",
			"schools": [
				"shri",
				"design"
			],
			"topic": "Адаптивная вёрстка",
			"lecturer": "basvasilich",
			"date": "2017-03-20T19:30+03:00",
			"place": "Синий Кит",
			"review": "О проблемах отображения современного сайта на разных устройствах, с их удачными и не лучшими решениями. В практической части лекции рассматривается процесс улучшения статического сайта и основные прикладные техники адаптивной вёрстки."
		},
		{
			"alias": "2",
			"schools": [
				"shri",
				"mobdev",
				"design"
			],
			"topic": "Работа с сенсорным пользовательским вводом",
			"lecturer": "d-dushkin",
			"date": "2017-03-21T19:30+03:00",
			"place": "Королевский пингвин",
			"review": "Об отличиях интерфейсов, рассчитанных на сенсорный ввод, про новый стандарт обработки событий ввода Pointer Events и CSS-свойства, которые полезно знать при работе над сенсорными интерфейсами. Практическая часть представлена разбором реализации жеста для скрытия бокового меню."
		},
		{
			"alias": "3",
			"schools": [
				"shri"
			],
			"topic": "Мультимедиа: возможности браузера",
			"lecturer": "maxatwork",
			"date": "2017-03-22T20:15+03:00",
			"place": "Подлый ленивец",
			"review": "О средствах для работы с графикой и звуком в браузере: Canvas, WebGL и Web Audio API."
		},
		{
			"alias": "4",
			"schools": [
				"shri",
				"mobdev"
			],
			"topic": "Нативные приложения на веб-технологиях",
			"lecturer": "veged",
			"date": "2017-03-23T20:00+03:00",
			"place": "Рыжий лис",
			"review": "Зачем и в каких случаях стоит использовать веб-технологии для создания нативных приложений. В лекции рассматриваются технологические варианты реализации, особое внимание уделено рекомендуемому способу с использованием Cordova и PhoneGap."
		},
		{
			"alias": "5",
			"schools": [
				"shri"
			],
			"topic": "Клиентская оптимизация: базовые знания и лучшие практики",
			"lecturer": "alt-j",
			"date": "2017-03-24T19:30+03:00",
			"place": "Большая и толстая коала",
			"review": "Что такое клиентская оптимизация (web performance optimization), а также о базовых техниках ускорения загрузки и лучших практиках разработки быстроработающих приложений."
		},
		{
			"alias": "6",
			"schools": [
				"shri",
				"mobdev",
				"design"
			],
			"topic": "Клиентская оптимизация: мобильные устройства и инструменты",
			"lecturer": "veged",
			"date": "2017-03-25T20:00+03:00",
			"place": "Рыжий лис",
			"review": "Оптимизации для мобильных устройств нужно уделять больше внимания, чем для десктопных. Ведь надо обеспечивать работу в мобильных сетях и на более слабом «железе». Лекция о многообразии платформ, браузеров и их версий, с упоминанием основных проблем, влияющих на производительность, и способов их решения. Так же — об основных принципах измерений на клиенте, что позволяет видеть результаты оптимизации."
		},
		{
			"alias": "7",
			"schools": [
				"shri",
				"mobdev",
				"design"
			],
			"topic": "Инфраструктура веб-проектов",
			"lecturer": "andre487",
			"date": "2017-03-26T19:00+03:00",
			"place": "Синий Кит",
			"review": "Что такое инфраструктура веб-проектов и зачем нужны дополнительные средства, не решающие бизнес-задачи напрямую. Какими средствами окружить проект, чтобы разработка оказалась удобной и быстрой, а сервис был стабильным. Лекция с ответами на эти вопросы на примере условного проекта, решениями инфраструктурных задач и чек-листом для старта."
		},
		{
			"alias": "8",
			"schools": [
				"shri"
			],
			"topic": "Инструменты разработки мобильного фронтенда",
			"lecturer": "andre487",
			"date": "2017-03-27T19:30+03:00",
			"place": "Королевский пингвин",
			"review": "Как сделать процесс разработки под мобильные браузеры таким же комфортным, как под десктопные. Или об инструментах веб-разработки и о том, как использовать их под мобильные нужды."
		},
		{
			"alias": "9",
			"schools": [
				"shri",
				"design"
			],
			"topic": "Адаптивная вёрстка",
			"lecturer": "basvasilich",
			"date": "2017-03-28T19:30+03:00",
			"place": "Синий Кит",
			"review": "О проблемах отображения современного сайта на разных устройствах, с их удачными и не лучшими решениями. В практической части лекции рассматривается процесс улучшения статического сайта и основные прикладные техники адаптивной вёрстки."
		},
		{
			"alias": "10",
			"schools": [
				"shri",
				"mobdev",
				"design"
			],
			"topic": "Работа с сенсорным пользовательским вводом",
			"lecturer": "d-dushkin",
			"date": "2017-03-29T20:15+03:00",
			"place": "Королевский пингвин",
			"review": "Об отличиях интерфейсов, рассчитанных на сенсорный ввод, про новый стандарт обработки событий ввода Pointer Events и CSS-свойства, которые полезно знать при работе над сенсорными интерфейсами. Практическая часть представлена разбором реализации жеста для скрытия бокового меню."
		},
		{
			"alias": "11",
			"schools": [
				"shri"
			],
			"topic": "Мультимедиа: возможности браузера",
			"lecturer": "maxatwork",
			"date": "2017-03-30T22:00+03:00",
			"place": "Подлый ленивец",
			"review": "О средствах для работы с графикой и звуком в браузере: Canvas, WebGL и Web Audio API."
		},
		{
			"alias": "12",
			"schools": [
				"shri",
				"mobdev"
			],
			"topic": "Нативные приложения на веб-технологиях",
			"lecturer": "veged",
			"date": "2017-04-01T19:30+03:00",
			"place": "Рыжий лис",
			"review": "Зачем и в каких случаях стоит использовать веб-технологии для создания нативных приложений. В лекции рассматриваются технологические варианты реализации, особое внимание уделено рекомендуемому способу с использованием Cordova и PhoneGap."
		},
		{
			"alias": "13",
			"schools": [
				"shri"
			],
			"topic": "Клиентская оптимизация: базовые знания и лучшие практики",
			"lecturer": "alt-j",
			"date": "2017-04-02T20:00+03:00",
			"place": "Большая и толстая коала",
			"review": "Что такое клиентская оптимизация (web performance optimization), а также о базовых техниках ускорения загрузки и лучших практиках разработки быстроработающих приложений."
		},
		{
			"alias": "14",
			"schools": [
				"shri"
			],
			"topic": "Клиентская оптимизация: мобильные устройства и инструменты",
			"lecturer": "veged",
			"date": "2017-04-03T19:30+03:00",
			"place": "Рыжий лис",
			"review": "Оптимизации для мобильных устройств нужно уделять больше внимания, чем для десктопных. Ведь надо обеспечивать работу в мобильных сетях и на более слабом «железе». Лекция о многообразии платформ, браузеров и их версий, с упоминанием основных проблем, влияющих на производительность, и способов их решения. Так же — об основных принципах измерений на клиенте, что позволяет видеть результаты оптимизации."
		},
		{
			"alias": "15",
			"schools": [
				"shri",
				"mobdev",
				"design"
			],
			"topic": "Инфраструктура веб-проектов",
			"lecturer": "andre487",
			"date": "2017-04-04T20:15+03:00",
			"place": "Синий Кит",
			"review": "Что такое инфраструктура веб-проектов и зачем нужны дополнительные средства, не решающие бизнес-задачи напрямую. Какими средствами окружить проект, чтобы разработка оказалась удобной и быстрой, а сервис был стабильным. Лекция с ответами на эти вопросы на примере условного проекта, решениями инфраструктурных задач и чек-листом для старта."
		},
		{
			"alias": "16",
			"schools": [
				"shri"
			],
			"topic": "Инструменты разработки мобильного фронтенда",
			"lecturer": "andre487",
			"date": "2017-04-05T19:30+03:00",
			"place": "Королевский пингвин",
			"review": "Как сделать процесс разработки под мобильные браузеры таким же комфортным, как под десктопные. Или об инструментах веб-разработки и о том, как использовать их под мобильные нужды."
		},
		{
			"alias": "17",
			"schools": [
				"shri",
				"design"
			],
			"topic": "Адаптивная вёрстка",
			"lecturer": "basvasilich",
			"date": "2017-04-06T19:30+03:00",
			"place": "Синий Кит",
			"review": "О проблемах отображения современного сайта на разных устройствах, с их удачными и не лучшими решениями. В практической части лекции рассматривается процесс улучшения статического сайта и основные прикладные техники адаптивной вёрстки."
		},
		{
			"alias": "18",
			"schools": [
				"shri",
				"mobdev",
				"design"
			],
			"topic": "Работа с сенсорным пользовательским вводом",
			"lecturer": "d-dushkin",
			"date": "2017-04-07T20:00+03:00",
			"place": "Королевский пингвин",
			"review": "Об отличиях интерфейсов, рассчитанных на сенсорный ввод, про новый стандарт обработки событий ввода Pointer Events и CSS-свойства, которые полезно знать при работе над сенсорными интерфейсами. Практическая часть представлена разбором реализации жеста для скрытия бокового меню."
		},
		{
			"alias": "19",
			"schools": [
				"shri"
			],
			"topic": "Мультимедиа: возможности браузера",
			"lecturer": "maxatwork",
			"date": "2017-04-08T19:30+03:00",
			"place": "Подлый ленивец",
			"review": "О средствах для работы с графикой и звуком в браузере: Canvas, WebGL и Web Audio API."
		},
		{
			"alias": "20",
			"schools": [
				"shri",
				"mobdev"
			],
			"topic": "Нативные приложения на веб-технологиях",
			"lecturer": "veged",
			"date": "2017-04-09T20:15+03:00",
			"place": "Рыжий лис",
			"review": "Зачем и в каких случаях стоит использовать веб-технологии для создания нативных приложений. В лекции рассматриваются технологические варианты реализации, особое внимание уделено рекомендуемому способу с использованием Cordova и PhoneGap."
		},
		{
			"alias": "21",
			"schools": [
				"shri"
			],
			"topic": "Клиентская оптимизация: базовые знания и лучшие практики",
			"lecturer": "alt-j",
			"date": "2017-04-10T20:15+03:00",
			"place": "Большая и толстая коала",
			"review": "Что такое клиентская оптимизация (web performance optimization), а также о базовых техниках ускорения загрузки и лучших практиках разработки быстроработающих приложений."
		},
		{
			"alias": "22",
			"schools": [
				"shri"
			],
			"topic": "Клиентская оптимизация: мобильные устройства и инструменты",
			"lecturer": "veged",
			"date": "2017-04-11T19:30+03:00",
			"place": "Рыжий лис",
			"review": "Оптимизации для мобильных устройств нужно уделять больше внимания, чем для десктопных. Ведь надо обеспечивать работу в мобильных сетях и на более слабом «железе». Лекция о многообразии платформ, браузеров и их версий, с упоминанием основных проблем, влияющих на производительность, и способов их решения. Так же — об основных принципах измерений на клиенте, что позволяет видеть результаты оптимизации."
		},
		{
			"alias": "23",
			"schools": [
				"shri",
				"mobdev",
				"design"
			],
			"topic": "Инфраструктура веб-проектов",
			"lecturer": "andre487",
			"date": "2017-04-12T20:15+03:00",
			"place": "Синий Кит",
			"review": "Что такое инфраструктура веб-проектов и зачем нужны дополнительные средства, не решающие бизнес-задачи напрямую. Какими средствами окружить проект, чтобы разработка оказалась удобной и быстрой, а сервис был стабильным. Лекция с ответами на эти вопросы на примере условного проекта, решениями инфраструктурных задач и чек-листом для старта."
		}
	];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

	var getMonth = exports.getMonth = function getMonth(month) {
	  return months[month];
	};

	var findElem = exports.findElem = function findElem(array, key, value) {
	  for (var i = 0; i < array.length; i++) {
	    if (array[i][key] === value) {
	      return array[i];
	    }
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _lecturers = __webpack_require__(5);

	var _lecturers2 = _interopRequireDefault(_lecturers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var lecturerImage = document.querySelector('.lecturer__image');
	var lecturerText = document.querySelector('.lecturer__text');
	var lecturerPopup = document.querySelector('.lecturer');
	var htmlElement = document.querySelector('html');
	var prevScrollTop = 0;

	var handleLecturerClick = function handleLecturerClick(event) {
	  event.preventDefault();
	  var data = _lecturers2.default[event.target.pathname.substring(1)];

	  prevScrollTop = document.body.scrollTop;
	  document.body.classList.add('overlay');
	  htmlElement.classList.add('overlay');
	  lecturerPopup.classList.add('lecturer_active');
	  lecturerImage.src = data.image;
	  lecturerText.innerHTML = data.about;
	};

	var handleTitleClick = function handleTitleClick(event) {
	  event.preventDefault();
	  event.target.parentNode.querySelector('.schedule-event__review').classList.add('schedule-event__review_active');
	};

	document.querySelector('.lecturer__cross').addEventListener('click', function () {
	  htmlElement.classList.remove('overlay');
	  document.body.classList.remove('overlay');
	  document.body.scrollTop = prevScrollTop;
	  lecturerImage.parentNode.classList.remove('lecturer_active');
	});

	document.querySelector('.schedule').addEventListener('click', function (event) {
	  var classList = event.target.classList;

	  if (classList.contains('schedule-event__lecturer')) {
	    handleLecturerClick(event);
	  } else if (classList.contains('schedule-event__topic')) {
	    handleTitleClick(event);
	  } else if (classList.contains('schedule-event__review-cross')) {
	    event.target.parentNode.classList.remove('schedule-event__review_active');
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
		"basvasilich": {
			"name": "Вадим Пацев",
			"about": "Руководитель отдела разработки интерфейсов. В Яндексе с 2008 года. Был в роли дизайнера и разработчика интерфейсов. Интересуется быстрым прототипированием и визуальными возможностями современных веб технологий.",
			"image": "https://avatars.mds.yandex.net/get-yaevents/198307/86248e34b6d511e687ef002590c62a5c/big"
		},
		"d-dushkin": {
			"name": "Дмитрий Душкин",
			"about": "Кандидат технических наук, научный сотрудник ИПУ РАН с 2008 по 2013. Пришёл в Яндекс.Картинки в 2014 году, отвечал за мобильную версию и рост производительности сервиса. В 2016 перешёл в Yandex Data Factory, где разрабатывает интерфейсы и дизайн веб-приложений для B2B.",
			"image": "https://avatars.mds.yandex.net/get-yaevents/95043/0914ac42b6dc11e687ef002590c62a5c/big"
		},
		"veged": {
			"name": "Сергей Бережной",
			"about": "Веб-разработчик в Яндексе с 2005 года. Успел поработать над Поиском, Почтой, Поиском по блогам, Я.ру, Картинками, Видео. Помимо этого, активно занимается развитием внутренних инструментов для создания сайтов.",
			"image": "https://avatars.mds.yandex.net/get-yaevents/194464/2e89984ab6d511e687ef002590c62a5c/big"
		},
		"alt-j": {
			"name": "Андрей Морозов",
			"about": "Окончил радиофизический факультет Киевского Национального Университета. Автор трёх патентных заявок. В Яндексе с 2014 года, разрабатывает интерфейсы Яндекс.Карт.",
			"image": "https://avatars.mds.yandex.net/get-yaevents/204268/478d8b92b6dc11e687ef002590c62a5c/big"
		},
		"andre487": {
			"name": "Прокопюк Андрей",
			"about": "В 2008 году впечатлился веб-разработкой из-за скорости воплощения идей и лёгкость их донесения до пользователей. В Яндексе с 2014 года, разрабатывает страницу поисковой выдачи. Любит сложные задачи, интересуется аналитикой, тестированием и новыми способами автоматизировать рутину.",
			"image": "https://avatars.mds.yandex.net/get-yaevents/197753/08c0df918516725d5f8ac452fb8bf610/big"
		},
		"maxatwork": {
			"name": "Максим Васильев",
			"about": "Во фронтенд-разработке с 2007 года. До 2013-го, когда пришёл в Яндекс, работал технологом в студии Лебедева и других компаниях.",
			"image": "https://avatars.mds.yandex.net/get-yaevents/194464/21e1dae2b6dc11e687ef002590c62a5c/big"
		}
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initFilters = undefined;

	var _schedule = __webpack_require__(2);

	var _schedule2 = _interopRequireDefault(_schedule);

	var _utils = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var message = document.querySelector('.filter__message');
	var events = document.querySelector('.schedule').children;
	var filters = {
	  lecturer: function lecturer(item, value) {
	    return item.lecturer === value;
	  },
	  school: function school(item, value) {
	    return item.schools.indexOf(value) !== -1;
	  }
	};
	var values = {};

	var filterEvents = function filterEvents(key, value) {
	  var hiddenEvents = new Array(events.length + 1).join('0').split('').map(parseFloat);

	  if (value === 'all') {
	    delete values[key];
	  } else {
	    values[key] = value;
	  }

	  Object.keys(values).forEach(function (filterKey) {
	    hiddenEvents.forEach(function (hiddenEvent, i) {
	      if (hiddenEvent) {
	        return;
	      }

	      var eventData = (0, _utils.findElem)(_schedule2.default, 'alias', events[i].dataset.alias);

	      if (!filters[filterKey](eventData, values[filterKey])) {
	        hiddenEvents[i] = 1;
	      }
	    });
	  });

	  hiddenEvents.forEach(function (item, i) {
	    return item ? events[i].classList.add('schedule-event_hidden') : events[i].classList.remove('schedule-event_hidden');
	  });
	  hiddenEvents.indexOf(0) === -1 ? message.classList.remove('schedule-event_hidden') : message.classList.add('schedule-event_hidden');
	};

	var initFilters = function initFilters() {
	  document.querySelector('.filter__lecturer').addEventListener('change', function (event) {
	    return filterEvents('lecturer', event.target.value);
	  });
	  document.querySelector('.filter__school').addEventListener('change', function (event) {
	    return filterEvents('school', event.target.value);
	  });
	};

	exports.initFilters = initFilters;

/***/ }
/******/ ]);