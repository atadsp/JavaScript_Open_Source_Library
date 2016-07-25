//In order to generate a random number you use the math random function. It generates a random number between 0 and 1
var x = Math.random();
console.log(x);

//by using the math floor function you can round that number and then multiply by 10 to generate a number 1-10
var y = Math.floor(Math.random() * 10);
console.log(y);

//if you change the formula a bit to generate any range of numbers you like
var max = 110
var min = 20
if(max > min){
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
} else {
console.log('max much be bigger than min');
}