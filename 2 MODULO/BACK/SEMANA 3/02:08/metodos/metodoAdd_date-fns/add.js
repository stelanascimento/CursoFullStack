const {add} = require('date-fns');

let date = new Date(2018,2,13,12);

console.log(date);

date =  add(date,{
    seconds: 2,
    days: 1,
    years: 10
});

console.log(date);