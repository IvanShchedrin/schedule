const lecturers = require('json!./../data/lecturers.json');
import checkDates from './datesChecker';
import { initEvents } from './events';

checkDates();
initEvents();