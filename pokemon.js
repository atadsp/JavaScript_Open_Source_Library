
var bike = (function() {

	// private
	var wheels = 2;
	var bellSound = "ring, ring";

	return {
		model: "monocog",

		wheelCount: function() {
			console.log( wheels );
		},

		ringBell: function() {
			console.log( bellSound );
		},

		setBell: function( newSound ) {
			bellSound = newSound;
		}
	};
})();

console.log(bike.wheels);
bike.wheelCount();
bike.ringBell();
bike.setBell("dingaling");
bike.ringBell();


var pokemon = (function(){
	var primaryType = "electric";
	var secondaryType = null;
	var gender = "male";
	var attackIV = 31;
	var dexNumb = 25;
	var evolutionByLevel = false;
	var levelEvolutionExtra = false;
	var levelEvoExtra = null;
	var evolutionLevel = null;
	var evolutionByStone = true;
	var stoneRequired = "Thunder Stone";
	var evolutionByTrade = false;
	var itemReqOnTrade = false;
	var itemRequired = null;
	var evolutionByHappiness = false;

	return {
		poke: "Pikachu",

		typeDisplay: function (){
			if (secondaryType === null){
				console.log(this.poke + "'s type is: " + primaryType);
			} else {
				console.log(this.poke + "'s types are: " + primaryType + "and " + secondaryType);
			}
		},
		evolution: function (){
			if (evolutionByLevel === true){
				if (levelEvolutionExtra === true) {
					console.log(this.poke + " evolves when leveling up " + levelEvoExtra);
				} else {
					console.log(this.poke + " evolves at level " + evolutionLevel);
				}
			}else if (evolutionByStone === true){
				console.log(this.poke + " evolves with the " + stoneRequired);
			} else if (evolutionByTrade === true){
				if(itemReqOnTrade === true){
					console.log(this.poke + " evolves via trading it to another game while holding the " + itemRequired);
				} else {
					console.log(this.poke + " evolves via trading it to another game");
				}
			} else if (evolutionByHappiness ===true) {
				console.log(this.poke + " evolves with high happiness");
			} else {
				console.log(this.poke + " does not evolve");
			}
	}
};
})();

console.log(pokemon.poke);
pokemon.typeDisplay();