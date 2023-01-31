// let h1 = getFirstElement("h1")
// let h2 = getFirstElement("h2")
// let h3 = getFirstElement("h3")



// h2?.addEventListener("click", changeBackground)
// h3?.addEventListener("click", hideH3)



// let article = document.querySelector("article")
// article.lastElementChild.remove()

// addButton()

// function addButton() {
// 	let button = document.createElement("button")
// 	button.textContent = "turn paragraphs bold"
// 	button.addEventListener("click", bold)
// 	let article = getFirstElement("article")
// 	article.appendChild(button)
// }

// function changeBackground() {
// 	h2.classList.add("red")
// }

// function getFirstH2() {
//    return document.querySelector("article > h2")
// }

// function getFirstH1(){
//    return document.querySelector("article > h1")
// }


// function getFirstElement(selector){
// 	return document.querySelector(selector)
// }

// function hideH3() {
// 	h3.classList.add("hide")
// }

// function bold(){
// 	let paragraphs = document.querySelectorAll("p")
// 	for (let paragraph of paragraphs){
// 		paragraph.classList.add("bold")
// 	}
// }


//exercise 2


// let form = document.querySelector("form");
// console.log("form:", form);

// // let fname = document.getElementById("fname");
// // let lname = document.getElementById("lname");
// // let button = document.getElementById("submit");

// console.log(form, fname, lname);



// function logFormInputs(e) {
// 	e.preventDefault()
// 	let fname = document.querySelector("[name=fname]").value;
//     let lname = document.querySelector("[name=lname]").value;
// 	console.log(fname, lname);
// 	console.log("EVENT", e);
// 	if (fname === "" || lname === "") {
// 		alert("please fill in all fields");
// 	} else {
// 		let ul = document.querySelector(".userAnswer")
// 		let firstli = document.createElement("li")
// 		let secondli = document.createElement("li")
// 		firstli.innertext = fname;
// 		secondli.innertext = lname;
// 		ul.append(firstli, secondli);


// 	}

// }

// form.addEventListener("submit", logFormInputs);


//exercise 3

// let allBoldItems;

// function getBoldItems() {
// 	allBoldItems = document.getElementsByTagName("strong")
// }

// function highlight() {
// 	getBoldItems()
// 	for (let getBoldItem of allBoldItems){
// 		getBoldItem.style.color = "blue";

// 	}
// }

// function returnNormal(){
//     getBoldItems()
//     for (let item of getBoldItems) {
//     	item.style.color = "black";
//     }
// }


// let paragraph = document.querySelector("p")
// paragraph.addEventListener("mouseover", highlight);

//exercise 4

// function volume_sphere()
//  {
//   var volume;
//   var radius = document.getElementById('radius').value;
//   radius = Math.abs(radius);
//   volume = (4/3) * Math.PI * Math.pow(radius, 3);
//   volume = volume.toFixed(4);
//   document.getElementById('volume').value = volume;
//   return false;
//  } 
// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

//exercise 5

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

function myFunction() {
  document.getElementById("demo").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.getElementById("demo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Moused out!<br>";
}

function myFourthFunction() {
  document.getElementById("demo").innerHTML += "double clicked! <br>";
}



var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);
x.addEventListener("dblclick", myFourthFunction);


