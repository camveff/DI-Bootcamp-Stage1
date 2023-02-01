// setTimeout(alertHello, 2000);


// function alertHello(){
// 	alert("Hello world!")
	
// }

// setTimeout(addParagraph, 2000)

// function addParagraph() {
	
//    let paragraph = document.createElement("p")
//    let node = document.createTextNode("hello world")
//    paragraph.appendChild(node);

//    let container = document.getElementById("container")
//    if (container.children.length < 5) {
//    container.appendChild(paragraph);

//    } else {
//      clearParagraph()
//    }

   

// }

// let interval = setInterval(addParagraph, 2000);

// let button = document.getElementById("clear")

// button.addEventListener("click", clearParagraph)

// function clearParagraph(){
// 	clearInterval(interval)

// }

//exercise 2

// let distance = 0

// function myMove() {
//    setInterval(moveSquare, 1)
// }



// function moveSquare() {
// 	if (distance === 350) return
// 	distance = distance + 1
// 	let square = document.getElementById("animate")
// 	square.style.left = distance + "px"
	
	

// }

//exercise 3

let yellowBox = document.getElementById("target")
let redBox = document.getElementById("box")

function dragStart(event) {
   console.log("dragStart:")
}

function allowDrop(event) {
	event.preventDefault()
	console.log("event:", event)



}

function handleDrop() {
	console.log("handleDrop")
	yellowBox.append(box)
}