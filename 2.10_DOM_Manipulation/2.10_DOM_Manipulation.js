// JavaScript Document

//using javascript you can manipulate the front end of the website to add interactivity to an otherwise static webpage. 
//by using the  document.getElementById function you can add or remove or collect data from HTML elements with the corrisponding ID

//this is an event listener that is listening for a click
window.onclick = myFunction;

// If the user clicks in the window, it will add the text to the paragraph tag with the corrisponding id tag
function myFunction() {
	document.getElementById('output').innerHTML += ("This information will be appended to the paragraph tag");
}

//if you include Jquery you can get even more intrict with its functionality