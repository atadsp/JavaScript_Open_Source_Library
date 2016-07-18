// // function declarations
// function square( number ) {
// 	return number * number;
// }

// // function expression
// 				// Anonomous function
// var add = function( first, second ) {
// 	return first + second;
// };

// // function expression with identifier
// var factorial = function factorial( number ) {
// 	if ( number < 2 ) {
// 		return 1;
// 	}

// 	return number * factorial( number - 1 );
// };

// // function expression with identifier
// var sum = function innerSum( firstNum, secondNum ) {
// 	return firstNum + secondNum;
// };

// // MINIFIED
// var a=function a(n){if(n<2){return 1;} return n*a(n-1);};


// Hoisting

// var result = console.log(squair( 11 ));
// // function declarations are hoisted
// function squair( number ) {
// 	return number * number;
// }

// // function expressions are not
// var result2 = squair2( 11 ); // ERRORRORROR!!

// var squair2 = function( number ) {
// 	return number * number;
// };

// var result2 = squair2( 11 );



/// parameters

// function echo( value ) {
// 	return value;
// }

// console.log( echo( "heyo" ));
// console.log( echo( "don't panic", 42) );
// console.log( echo( { firstName: "blah", lastName: "blah"}, 1 ));
// console.log( echo.length ); // arity

function echo2() {
	return arguments;
}

console.log( echo2( "howdy", "blah", "false", 2 ) );

// // add any number of values together
// function sum() {
// 	var result = 0,
// 		i = 0,
// 		len = arguments.length;

// 	while ( i < len ) {
// 		result += arguments[i];
// 		i++;
// 	}

// 	return result;
// }

// console.log( sum( 1, 2 ) );
// console.log( sum( 3, 4, 5, 6, 7 ) );

function sum( numbersArray ) {

}

sum( [1,2,3,4]);

function someOtherFunction( settings ) {
	if (settings.username === "cory" ) {
		// app.grantSuperuser();
	}
}
someOtherFunction( { username: "cory", id: 1 