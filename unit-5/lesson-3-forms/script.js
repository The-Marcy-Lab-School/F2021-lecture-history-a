//Feature: (event listener) "submit" the form => (event handler) add the new instructor to our table
//Step 1: listen for the form submit => log to console

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

document.addEventListener("DOMContentLoaded", () => {
  teachers.forEach(t => addInstructor(t.firstName, t.lastName, t.email))

  const headerEl = document.querySelector("h1")
  headerEl.addEventListener("click", (event) => {
    console.log(event.target)
    //change the color of the h1 to a random color
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.color = "#" + randomColor;
  })

  const formEl = document.querySelector("#my-form")
  formEl.addEventListener('submit', handleSubmit)
})

function handleSubmit(event){
  event.preventDefault() //prevent the page from refreshing
  console.log("This form was submitted")

  //We need to get the strings from the form inputs
  const firstName = document.querySelector("#first-name-input").value
  const lastName = document.querySelector("#last-name-input").value
  const email = document.querySelector("#email-input").value

  if(/[@]/.test(email)){
    addInstructor(firstName, lastName, email)//we are missing our arguments
    event.target.reset()
  } else {
    alert("Error, please enter valid email")
  }
}

//add an instructor to the table (update the DOM)
function addInstructor(firstName, lastName, email){
  const rowEl = document.createElement("tr")
  const firstNameEl = document.createElement("td")
  const lastNameEl = document.createElement("td")
  const emailEl = document.createElement("td")

  emailEl.addEventListener("click", (e) => {
    console.log(e.target)
    e.target.style.color = "pink"
  })

  firstNameEl.innerText = firstName
  lastNameEl.innerText = lastName
  emailEl.innerText = email

  document.querySelector("tbody").appendChild(rowEl)
  rowEl.append(firstNameEl, lastNameEl, emailEl)
}

