//You can put more complicated objects inside of an array such as objects
var monsters = [];

//the best way to add information to an array is using the .push() command
monsters.push({name:"Godzilla", first_apperance:1954});
monsters.push({name:"Mothra", first_apperance:1960});
monsters.push({name:"King Kong", first_apperance:1933});

console.log(monsters);

//You can use the information inside of the array to sort the entries

// monsters.sort(function(a, b){
//  return a.first_apperance-b.first_apperance
// })

monsters.sort(function(a, b){
 var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
 if (nameA < nameB) //sort string ascending
  return -1 
 if (nameA > nameB)
  return 1
 return 0 //default return value (no sorting)
})