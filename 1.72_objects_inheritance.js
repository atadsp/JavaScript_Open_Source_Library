// JavaScript Document
//redid the object as a function so I could create children more easily.
function monster(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
	this.size = function() {
		console.log(this.height + " meters, and " + this.weight + " kilograms!");};
	this.nameChange = function(newName){
		this.name = newName;
		return this.name;
	}
}

//create two children, Godzilla and Rodan, each has the same properties

var godzilla = new monster("Godzilla", 65000000, 108, 95000);
var rodan = new monster("Rodan", 66, 100, 30000);

//I can also run the same functions on both easily
godzilla.size();
rodan.size();
godzilla.nameChange('Gojira');
rodan.nameChange('Redon');
