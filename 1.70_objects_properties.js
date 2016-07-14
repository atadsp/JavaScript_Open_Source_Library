var monster = {
    name:"Godzilla",
    age:65000000,
	height: 108,
    weight:95000,
	
		abilityType	:{
			//this is an array within a property, its sooo cool and difficult to understand
		types	:[
			{abilityID: 1, name :"Super Strength"},
			{abilityID: 2, name :"Super Regeneration"},
			{abilityID: 3, name :"Super Endurance"},
			{abilityID: 4, name :"Atomic Breath"},
			{abilityID: 5, name :"Nuclear Pulse"},
	]		
	}
	
};

for (var ability in monster.abilityType.types){
	console.log("Godzilla has: " + monster.abilityType.types[ability].name)
}

console.log(monster);
console.log(monster.age + " years old");
console.log(monster.height + " meters");
console.log(monster.abilityType);
console.log(monster.abilityType.types[0].name);