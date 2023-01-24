//function infoAboutMe(){
	//console.log("my name is Cameron")
//}

//infoAboutMe()


//infoAboutPerson("David", 45, "blue")
//infoAboutPerson("Josh", 12, "yellow")

//function infoAboutPerson(personName, personAge, personFavoriteColor){
	//console.log("your name is", personName)
	//console.log("you are ", personAge, "years old")
	//console.log("your favourite color is", personFavoriteColor)
//}




//exercise 2

//function calculateTip(){
	//let amountOfBill = Number(prompt("what is the amount of the bill"))
    //let TipPercent
    //if (amountOfBill < 50) TipPercent = 0.2
    //if (amountOfBill > 50 && amountOfBill < 200) TipPercent = 0.15
   // if (amountOfBill > 200) TipPercent = 0.1
    
    //let tip = amountOfBill  * (1+TipPercent)

	//console.log("bill:", amountOfBill)
    //console.log("total bill with tip:", tip)

//}

//calculateTip()





//exercise 3

//function isDivisible(){
	//let sum = 0
	//for (let i = 0; i<500; i++) {
		//if (i % 23 === 0){
        // console.log(i)
		// sum = sum + i
		//}

	//}
 //console.log("the sum of numbers divisible by 23 is:", sum)
//}

//isDivisible()






//exercise 4

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shoppingList = ["banana", "orange", "apple"];

// function myBill(){

//  for (let item of shoppingList){
//  	let qauntityInStock = stock[item]

//  	if (qauntityInStock > 0) {

//  	const price = prices[item]
//  	console.log("the price of ", item "is", price)
//  	console.log("and we have this many in stock:", stock[item])
//  	stock[item] = stock[item] - 1
//  	console.log("the new quantity of of this stock is:", stock[item])

//  	} else {
//  		console.log("there is no ", item "in stock")
//  	}


//  }


// }

// myBill()

//exercise 5

// function changeEnough(itemPrice, amountOfChange) {
// 	console.log("the item price is", itemPrice)

// 	let sum = calculateSum(amountOfChange)

// 	if (sum > itemPrice) {
// 		console.log("you can afford it")
// 		return true
// 	} else {
// 		console.log("you cannot afford it")
// 		return false
// 	}

// }



// function calculateSum(arr){
// 	let sum = 0

// 	for (let i = 0;i < arr.length;i++){
// 		let coinValue

// 		let numberOfCoins = arr[i]

// 	    if (i === 0) { coinValue = 0.25 }
// 	    if (i === 1) { coinValue = 0.10 }
// 	    if (i === 2) { coinValue = 0.05 }
// 	    if (i === 3) { coinValue = 0.01 }

// 	    console.log("we have ", numberOfCoins, "coins that have a value of", coinValue)

// 	    sum = sum + numberOfCoins * coinValue

// 	}
// 	console.log("the total sum is", sum)

// 	return sum 
// }

//    changeEnough(4.25, [25, 20, 5, 0])



//exercise 6



// function hotelCost(numberOfNights){

// 	let answer
// 	let isOnlyNumbers

// 	//while (isOnlyNumbers(answer)){
// 		answer = prompt("how many nightswould you like to stay?")
// 	//}

// 	let costPerNight = 140
// 	let totalPrice = numberOfNights * costPerNight
// 	return totalPrice
// }

// function isOnlyNumbers(str) {
// 	let regex = new RegExp(/^[0-9]*$/)
// 	return regex.test(str)
// }

// function includesNumbers(str) {
// 	let regex = new RegExp(/\d/)
// 	return regex.test(str)
// }




// function planeRideCost(destination){
// 	if (destination === "London") return 183
// 	if (destination === "paris") return 220
// 	return 300
// }





// function rentalCarCost(carAnswer) {
// 	let dailyPrice = 40
// 	let numberOfDays = Number(carAnswer)


// 	let discount = 0
// 	if (numberOfDays >= 10) discount = 0.05

// 	let totalPrice = dailyPrice * numberOfDays * (1 - discount)
//     return totalPrice
// }


// function totalVacationCost() {
// 	let hotelAnswer
// 	let carAnswer
// 	let destination = ""

//     while (isOnlyNumbers(hotelAnswer)) {
//     	hotelAnswer = prompt("how many nights would you like to stay?")
//     }

//     while (isOnlyNumbers(carAnswer)) {
//     	carAnswer = prompt("how many days would you like to rent?")
//     }

//     while (destination == "" || includesNumbers(destination)) {
//     	destination = prompt("where are you going?")
//     }

//     let carPrice = rentalCarCost(carAnswer)
//     let hotelPrice = hotelCost(hotelAnswer)
//     let planePrice = planeRideCost(destination)

//     console.log("hotelPrice:", hotelPrice)
//     console.log("carPrice:", carPrice)
//     console.log("planePrice:", planePrice)

//     let totalPrice = carPrice + hotelPrice + planePrice
//     console.log("total Price:", totalPrice)
// }
//    totalVacationCost()