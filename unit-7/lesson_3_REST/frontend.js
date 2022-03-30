//when the DOMContentLoaded loads, 
//make fetch GET /students, 
//append each student's name to the DOM

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", handleSubmit)


  fetch("http://localhost:8000/students/")
  .then(res => res.json())
  .then(data => {
    //iterate through data array, and for each student, addToDom
    data.forEach(student => addToDom(student))
  })
})

//student is 
function addToDom(student){
  const li = document.createElement('li')
  li.innerText = student.name
  document.querySelector("ul").append(li)
}

function handleSubmit(event){
  event.preventDefault()
  let name = event.target[0].value

  let options = {
    method: "POST",
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({name: name})
  }

  fetch("http://localhost:8000/students/", options)
  .then(res => res.json())
  .then(student => {
    console.log(student)
    addToDom(student)
  })
}