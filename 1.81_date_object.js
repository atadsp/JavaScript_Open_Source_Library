// JavaScript has a built in date function
var myDate = new Date(); //displayes the current date
console.log(myDate);

//you can pass days of the past, or future. 
var myPastDate = new Date(982, 6, 9);
var myFutureDate = new Date(3310, 0, 1);

console.log(myPastDate);
console.log(myFutureDate);

//methods we can call on the date objects

//returns the month
console.log(myPastDate.getMonth());

//returns year
console.log(myFutureDate.getFullYear());

//returns day in digit form
console.log(myPastDate.getDate());

//returns day of the week
console.log(myFutureDay.getDay());