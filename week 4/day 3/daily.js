let planets = ["Earth", "Jupiter", "Saturn", "Neptune"]

for (let planet of planets) {
	let div = document.createElement("div")
	div.classList.add("planet")
	div.classList.add(planet.toLowerCase())
	

	let section = document.querySelector(".listPlanets")
	section.appendChild(div)

}