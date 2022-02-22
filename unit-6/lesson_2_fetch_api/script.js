//When the button is click => fetch a joke => see the joke on the DOM
//When some event happens => fetch => add that data to the DOM

window.addEventListener("DOMContentLoaded", () => {
  //Event
  document.querySelector("button").addEventListener("click", fetchJoke)
})

//fetch 
function fetchJoke(){
  fetch("https://ann-waiting-app.herokuapp.com/joke?wait=1")
  .then( response => response.json() )
  .then( data => { addJokeToPage(data) })
}

//DOM manipulation
function addJokeToPage(obj){
  document.querySelector("#paragraph").innerText = obj.joke
}