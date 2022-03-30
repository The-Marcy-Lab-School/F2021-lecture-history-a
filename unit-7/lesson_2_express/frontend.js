//when the button is clicked
//fetch to http://localhost:4000/marcylab
//add the text to the DOM

document.getElementById("button")
  .addEventListener("click", fetchToServer)

function fetchToServer(){
  fetch('http://localhost:4000/marcylab')
    .then(res => res.json())
    .then(data => {
      data.fellows.forEach(fellow => addFellowToDOM(fellow))
    })
}

function addFellowToDOM(fellow){
  const li = document.createElement("li")
  li.innerText = fellow
  const ul = document.querySelector("ul")
  ul.append(li)
}


