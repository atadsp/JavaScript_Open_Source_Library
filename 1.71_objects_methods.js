// JavaScript Document

var monster = {
    name:"Godzilla",
    age:65000000,
	height: 108,
    weight:95000,
	
		abilityType	:{
		types	:[
			{abilityID: 1, name :"Super Strength"},
			{abilityID: 2, name :"Super Regeneration"},
			{abilityID: 3, name :"Super Endurance"},
			{abilityID: 4, name :"Atomic Breath"},
			{abilityID: 5, name :"Nuclear Pulse"},
	]		
	},
	size: function () {
		godzillaSize = this.height + " meters, and " + this.weight + " kilograms!";
		console.log(this.height + " meters, and " + this.weight + " kilograms!");
	},
	nameChange: function(newName){
		this.name = newName;
		return this.name;
	}
};

monster.size();
monster.nameChange('Gojira');