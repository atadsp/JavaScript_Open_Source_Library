// JavaScript Document
//redid the object as a function so I could create children more easily.
//all children of the monster object have the same base propteries, but those properties contain diffrent values
function monster(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    
    
	this.abilties = [];
			
			
	this.size = function() {
		console.log(this.height + " meters, and " + this.weight + " kilograms!");
	};
		
	this.nameChange = function(newName){
		this.name = newName;
		return this.name;
	};
	
	this.listAbilties = function(){
		for (i = 0; this.abilties.length > i; i++) { 
			console.log(this.name + " has " +this.abilties[i]);
		}
	};
}

//create two children, Godzilla and Rodan, each has the same properties

var godzilla = new monster("Godzilla", 65000000, 108, 95000);

godzilla.abilties.push("Super Strength");
godzilla.abilties.push("Super Endurance");
godzilla.abilties.push("Super Regeneration");
godzilla.abilties.push("Atomic Breath");
godzilla.abilties.push("Nuclear Pulse");


var rodan = new monster("Rodan", 66, 100, 30000);
rodan.abilties.push("Flight at Mach 3");

//I can also run the same functions on both easily
godzilla.size();
rodan.size();
godzilla.nameChange('Gojira');
rodan.nameChange('Redon');

godzilla.listAbilties();
rodan.listAbilties();