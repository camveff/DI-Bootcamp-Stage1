//excersice 1

//let people = ["Greg", "Mary", "Devon", "James"];
//people[2] = "Jason"
//people[3] = "Cameron"
//console.log(people.indexOf("Mary"));
//console.log(people.slice(0, 3 ))

//let newPeople = people.slice(1, 3)
//console.log(`newPeople:`, newPeople)
//console.log(people.indexOf("foo"))
// uses -1 since it could not find foo in the array

//let last = people.at(-1)
//console.log(`last:`, last)



//console.log(people)


//part 2

//let people = ["Greg", "Mary", "Devon", "James"];
//for (const person of people){
	//console.log("this person is:" , person);
    //if (friend = "Mary") { break } 

//}


//excersice 2

//let colours = ["Green", "Red", "Orange", "Blue", "Yellow"];
//for (let i = 0; i < colours.length; i++) {
	//console.log(`My #${i} choice is ${colours[i]}`)

//}

//excersice 3

//let answer = prompt("Please enter a number")
//let number = Number(answer)
//console.log(`answer:`, answer)

//let number = "number"

//while (number != 10) {
	//let answer = prompt("Please enter a number")
//let number = Number(answer)
//}


//excersice 4

//const building = {
  //  numberOfFloors: 4,
   // numberOfAptByFloor: {
     //   firstFloor: 3,
     //   secondFloor: 4,
      //  thirdFloor: 9,
       // fourthFloor: 2,
   // },
    //nameOfTenants: ["Sarah", "Dan", "David"],
    //numberOfRoomsAndRent:  {
       // sarah: [3, 990],
      //  dan:  [4, 1000],
      //  david: [1, 500],
   // },
//}

//console.log(building.numberOfFloors)

//console.log("apartments on first floor:" , building.numberOfAptByFloor.firstFloor)

//console.log("apartments on first floor:" , building.numberOfAptByFloor.thirdFloor)

//console.log("second tenant:" , building.nameOfTenants[1])

//console.log("dan number of rooms:", building.numberOfRoomsAndRent.dan[0])

//let sarahRent = building.numberOfRoomsAndRent.sarah[1]
//let davidRent = building.numberOfRoomsAndRent.david[1]
//let danRent = building.numberOfRoomsAndRent.dan[1]

//if (sarahRent + davidRent > danRent) {
	//building.numberOfRoomsAndRent.dan[1] = 1200
//console.log(building)

// excercise 5

//let family = {
	//dad: "Bob",
	//mom: "Emma",
	//son: "Andrew"
//
//for (let item in family) {
   //console.log(`key:`, item)
   //console.log(`value:`, family[item])
//}

// excercise 6

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

let sentence = " "
for (let key in details) {
	sentence = sentence + " " + key + " " + details[key]
}

console.log(sentence)

//excercise 7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let acronym = " "

let sortedNames = names.sort()

for (let name of sortedNames){
	console.log(name)
	acronym = acronym + name[0]
}

console.log(acronym)


