//Call backs are useful in creating asycronous applications that exicute commands before waiting for the response of the previous command
//This is most obvious in Node.Js, but can be emulated in regular javascript using the setTimeout function to place a delay in a function

document.getElementById('output').innerHTML += ('The function launches first -');

//without the setTimeout emulating the async nature of node this would print right after the previous line, but since there is a delay it will post after the next function
var myTimer = window.setTimeout(function() {
    document.getElementById('output').innerHTML += ("- This function goes last. Aren't callbacks fun!");
}, 500);


document.getElementById('output').innerHTML += ('- This function launches third but posts second');
