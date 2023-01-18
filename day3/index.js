//excercise 1

let x = 5;
let y = 11;

if (x < y) {
	console.log(`y is bigger`)
} else {
   console.log(`x is bigger`)
}

//excercise 2

let newDog = `Chihuahua`;
console.log("how many letters are in newDog:" , newDog.length)

console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

if (newDog = `Chihuahua`) {
	console.log(`I love Chihuahuas, it’s my favorite dog breed`)
} else{
	console.log(`I dont care, I prefer cats`)
}


//excercise 3

let userNumber = prompt(`enter a number`)

if (Number (userNumber) % 2 === 0) {
	console.log(userNumber + " is an even number " )
} else {
	console.log(userNumber + " is an odd number " )
}


//exercise 4

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (user.length = 0) console.log("no one is online")

if (user.length === 1) console.log( users[0] + "is online")

if (user.length === 2) console.log( users[0] + " and " + users[1] + "are online")

if (user.length > 2) console.log(`${users[0]}, ${users[1]}, and ${users.length - 2} more are online`)
