function playTheGame(){
	let response = confirm("would you like to play the game")
	

	if (!response) {
		alert("No problem, Goodbye.")
        return
	
	} 

 

	let answer = prompt("Enter a number")
	if (!isOnlyNumbers(Number(answer))) {
	alert("sorry not a number")
	return
	
	}
	 
	let computerNumber = generateRandomNumber()
	console.log("computerNumber:", computerNumber)
	console.log("you are playing")
}


function isOnlyNumbers(str) {
	   let regex = new RegExp(/^[0-9]*$/)
	   return regex.test(str)
	}


function isBetween(number){
	return number >= 0 && number <= 10
}

function generateRandomNumber(){
	return Math.floor(Math.random() * 11)
}


let numberOfTries = 0
let userNumber
function compareNumbers(userNumber, computerNumber){
	if (userNumber === computerNumber) {
		alert("winner")
		return
    }
    
	if (userNumber > computerNumber) {
        alert("number is bigger guess again")
		return

	}

	if (userNumber < computerNumber) {
		alert("number is smaller guess again")
		return
	}
    
    numberOfTries = numberOfTries + 1
	if (numberOfTries === 3) {
		alert("sorry too many tries")
		return
    }
}