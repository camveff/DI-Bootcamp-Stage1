let button = getButton()
button.addEventListener("click", buttonClick)



function getButton(){
	return document.getElementById("lib-button")
}

function buttonClick(e){
	e.preventDefault()
	let noun = document.getElementById("noun")
    let adjective = document.getElementById("adjective")
    let person = document.getElementById("person")
    let verb = document.getElementById("verb")
    let place = document.getElementById("place")

    if (noun == "" ||  verb == "" ||  adjective == "" || person == "" || place == "") return

	console.log("all fields filled in")

    let story = writeStory(noun, adjective, verb, person, place)
    console.log("story:", story)

    appendStory(story)
}

function appendStory(story){
	let paragraph = document.getElementById("story")
	let span = document.createElement("span")
	span.innerText = story
	paragraph.appendChild(span)
}


function writeStory(noun, adjective, verb, person, place) {
	return `when i ${verb} down the ${noun}  there where ${adjective} many ${person} at the ${place}`

}