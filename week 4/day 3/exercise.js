// let container = document.getElementById("container")
// console.log("container:", container)

// document.querySelector(".list").children[1].textContent = "Richard"

// let lists = document.querySelectorAll(".list")
// lists.forEach(list => list.firstElementChild.textContent = "Cameron")

// lists[1].children[1].remove()



//exercise 3

// let navbar = document.getElementById("navBar");
// console.log("navbar:", navbar)

// navbar.setAttribute("id", "socialNetworkNavigation")

// let li = document.createElement("li")

// let Logout = document.createTextNode("Logout")

// li.appendChild(Logout)
// console.log("li:", li)

// let ul = navbar.firstElementChild
// ul.appendChild(li)

// exercise 4

let allBooks = []

let book1 = {

 title: "Da Vinci Code",
 author: "Dan Brown",
 image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRuQdFS2wDCS9I3i2eOBfF42N1yoQwiZPlP43CjTqTTofmYRox-",
 alreadyRead: true

}

let book2 = {

 title: "To Kill A MockingBird",
 author: "Harper Lee",
 image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2qkJLjkVrYGC7JvdfFVZQU-LIVBDggNsIHxmb8SOjLV3HsVnu",
 alreadyRead: false

}

allBooks.push(book1)
allBooks.push(book2)

console.log("allBooks:", allBooks)

let table = document.createElement("table")


table.innerHTML = `
   <thead>
       <tr>
         <th colspan= "3">  My Book List</th>
       </tr>
   </thead>
   <tbody>
      <tr>
        <td class="is-read">${book1.title} written by ${book1.author}</td>
        <td>
          <img src="${book1.image}"/>
        </td>
        <td class="is-read">Already read: ${book1.alreadyRead}</td>
      </tr>
        <tr>
        <td>${book1.title} written by ${book2.author}</td>
        <td>
          <img src="${book2.image}"/>
        </td>
        <td>Already read: ${book2.alreadyRead}</td>
      </tr>
   </tbody
`

let bookListDiv = document.querySelector(".listBooks")
console.log("bookListDiv:", bookListDiv)
bookListDiv?.appendChild(table)





