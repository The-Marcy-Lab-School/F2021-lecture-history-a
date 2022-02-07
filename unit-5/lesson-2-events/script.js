//As a user, when I click on "Click Me" => logging "Pushing P" to the console


const teachers = [
  {
    firstName: "Ann", 
    lastName: "Duong", 
    email: "ann@gmail.com"
  },
  {
    firstName: "Reuben", 
    lastName: "Ogbonna", 
    email: "reuben@gmail.com"
  },
  {
    firstName: "Erwins", 
    lastName: "Saget", 
    email: "erwins@gmail.com"
  },
]

//Listen for when the DOM is Loaded => running our console
// document.addEventListener("DOMContentLoaded", () => {
  //Iterate through teachers, and for each add the instructor to the DOM
  teachers.forEach(t => addInstructor(t.firstName, t.lastName, t.email))

  const headerEl = document.querySelector("h1")
  headerEl.addEventListener("click", (event) => {
    console.log(event.target)
  })
// })

//Create new elements and add it to the body
function addInstructor(firstName, lastName, email){
  //Create a tableRow element and three tableData element 
  const rowEl = document.createElement("tr")
  const firstNameEl = document.createElement("td")
  const lastNameEl = document.createElement("td")
  const emailEl = document.createElement("td")

  //add an eventListener to my email elements
  emailEl.addEventListener("click", (e) => {
    //e.target is the element that was clicked on
    e.target.style.color = "pink"
  })

  //Set the text inside each tableData
  firstNameEl.innerText = firstName
  lastNameEl.innerText = lastName
  emailEl.innerText = email

  //Add elements to the DOM
  document.querySelector("tbody").appendChild(rowEl)
  rowEl.append(firstNameEl, lastNameEl, emailEl)
}

