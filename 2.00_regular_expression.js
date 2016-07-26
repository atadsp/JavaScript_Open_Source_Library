// JavaScript Document

//regular expressions use a specific set of instructions to help search through a string to find things inside of it

var srch = /hello World/i;
//this would search a string for a case sensative 'hello World'

var strng = "hello World how are you doing today?";
var srch2 = strng.search(/hello World/i);

console.log(srch2);

//you can procedurally replace segments of strings as well

var rep = strng.replace(/hello World/i, "Hello from the otherside!" );
console.log(rep)

//i is a case sensative search
//g is a global search and wont stop at the first result
//m does multi line matching

//there are many more including searching via letters [a,b,c,...], numbers [0-9] and more.