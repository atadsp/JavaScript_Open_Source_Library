// JavaScript Document

//to create a multidimesional array you must instantiate an array inside of an array

var arry = [
[1,2,3],
[4,5,6],
[7,8,9]
]

console.log("So if I log arry[1][1] I would get the central element: " + arry[1][1]);

//you can loop through arrays using the nested for loop listed below

for(i=0; i<arry.length; i++) {
	for(j=0; j<arry[i].length; j++) {
	console.log("Values at arr["+i+"]["+j+"] is "+arry[i][j]);
	}
}