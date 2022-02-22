//When the form is submitted => POST fetch to the server => update my DOM

document.querySelector("#my-form").addEventListener("submit", handleSubmit)

function handleSubmit(event){
  event.preventDefault() //stop page refresh
  postUser()             //POST to our API
}

//POST request requires arg of URL, optionsObject

function postUser(){
  let data = {
    name: document.querySelector("#username").value, 
    job: document.querySelector("#job").value 
  }
  
  let optionsObject = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data) //needs to be a string
  };
  
  fetch("https://reqres.in/api/users", optionsObject)
    .then(response => response.json())
    .then(result => {
      document.querySelector("#whatsup").innerText = `
      ${result.name} was created with job ${result.job} and id ${result.id}
      `
      console.log(result)
      console.log(result.id)
    })
}


























//When the form is submitted => fetch to some interpolated URL => DOM
// let username = "damiankohut"

//When the DOM loads => fetch => put it on the DOM
// fetch("https://api.github.com/zen")
//   .then( response => response.text() )
//   .then( (string) => { updateHelloDiv(string) })

// fetch(`https://api.github.com/users/${username}`)
//   .then( res => res.json() )
//   .then( (userObj) => { 

//     console.log(userObj.login)
//     console.log(userObj.public_repos)
//     document.querySelector("#heythere").innerText = `
//       ${userObj.login} has ${userObj.public_repos} public repos
//     `
//   } )

// function updateHelloDiv(message){
//   document.getElementById("hello").innerText = message
// }


//fetch(all pokemon)
//.then(response => res.json())
//.then(pokemonObject => {pokemonObj.pokemon.forEach(pokemon => putOnDOM(pokemon))})

//function putOnDOM(pokemon)
// create an li
// set the innertext of the li to pokemon.name 
// li.addEventListener('click', fetchOnePokemon)

/*
function fetchOnePokemon(event) {
  event.target //The HTML element
  event.target.id ???
  event.target.innerText ??? name?

  fetch https://pokemonapi.com/pokemon/
}
*/