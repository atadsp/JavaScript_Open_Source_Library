// use tools like jshint
//formatting style guides


var condition = true;

if ( condition ){
	console.log( 'sleepy' );
} else {
	console.log( 'not sleepy' );
}

var myThingOrSomething = $("selector");


//not optimal
for (var i=0; i<$("selector").length; i++){
	$("selector").hide();
}

//better
for (var i = 0; i<len; i++){
	myThingOrSomething.hide();
}