//template literals allow for easy concatination of strings and variables
var x = 12;
var y = 43;

console.log(`The sum of the numbers is ${x+y}!`);

var arry = ["Chris", "Kevin", "Ryan", "Steve"];
// you can even use them to help you loop through arrays
for (i = 0; i<arry.length; i++){
	console.log(`The student's name is ${arry[i]}`);
}