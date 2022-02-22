let token = "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"

// when some event happens => fetch => manipulate the DOM

document.addEventListener("DOMContentLoaded", () => {
  //query from the DOM 
  document.getElementById("get-form").addEventListener("submit", handleGet)
  document.getElementById("post-form").addEventListener("submit", handlePost)
})

// when the #get-form is submitted
function handleGet(event){
  event.preventDefault()
  let username = document.getElementById("get-input").value
  getFetch(username)
}

// => GET fetch
function getFetch(username){
  // const options = {
  //   method: "GET",
  //   headers: {
  //     'Authorization' : `token ${token}`
  //   }
  // }

  // fetch(`https://api.github.com/user/repos`, options)
  fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(userData => {
      userToDOM(userData)
    })
}

//manipulate #get-div
function userToDOM(userData){
  document.getElementById("get-div").innerText = `${userData.login} has ${userData.public_repos} public repos`
}

//When the post-form is submitted 
function handlePost(e){
  e.preventDefault()
  let repoName = document.getElementById("post-input").value
  postFetch(repoName)
}

//POST fetch to Ann's account 
function postFetch(repoName){

  let data = {
    name: repoName,
    description: "blah blah blah"
  }
  
  let optionsObject = {
    method: "POST",
    headers: { 
      'Content-Type' : 'application/json',
      'Authorization': `token ${token}`
    },
    body: JSON.stringify(data)
  }
  
  fetch("https://api.github.com/user/repos", optionsObject)
    .then(response => response.json())
    .then(data => {
      addRepoToDOM(data)
    })
}

//showing the new repo's name
function addRepoToDOM(data){
  document.getElementById("post-div").innerText = `${data.name} was successfully created`
}

/* POST fetch

let data = {
  name: "Ann"
}

let optionsObject = {
  method: "POST",
  headers: { 'Content-Type' : 'application/json' },
  body: JSON.stringify(data)
}

fetch(url, optionsObject)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })

*/