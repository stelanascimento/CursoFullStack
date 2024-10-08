//usar npm install date-fns-tz --save
const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz');

 // Set the date to "2018-09-01T16:01:36.386Z"
 const utcDate = zonedTimeToUtc('2018-09-01 18:01:36.386', 'Europe/Berlin');
 console.log(utcDate);




 // Obtain a Date instance that will render the equivalent Berlin time for the UTC date

const date = new Date('2018-09-01T16:01:36.386Z');
const timeZone = 'Europe/Berlin';
const zonedDate = utcToZonedTime(date, timeZone);
//utcToZonedTime vai mudar a hora e so ,nao muda fuso horario

// zonedDate could be used to initialize a date picker or display the formatted local date/time

 // Set the output to "1.9.2018 18:01:36.386 GMT+02:00 (CEST)"
 const pattern = 'd.M.yyyy HH:mm:ss.SSS \'GMT\' XXX (z)';
 const output = format(zonedDate, pattern, { timeZone: 'Europe/Berlin' });


 console.log(output);