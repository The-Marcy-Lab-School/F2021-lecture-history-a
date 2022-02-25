const token = "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"

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fun-fact-button").addEventListener("click", getFact)
  document.getElementById("dog-button").addEventListener("click", getDog)
  document.getElementById("post-form").addEventListener("submit", postRepo)
})

async function getFact(){
  let response = await fetch("http://numbersapi.com/10") //returns a promise to get a response
  let string = await response.text()

  const funFactDiv = document.getElementById("fun-fact-div");
  funFactDiv.innerText = string;

  // fetch("http://numbersapi.com/10")    
  // .then(res => res.text())                            
  // .then(string => {
  //   const funFactDiv = document.getElementById("fun-fact-div");
  //   funFactDiv.innerText = string;
  // })
}

async function getDog(){
  let response = await fetch("https://dog.ceo/api/breeds/image/random")
  let obj = await response.json()

  const dogDiv = document.getElementById("dog-div");
  dogDiv.innerHTML = `<img src="${obj.message}" style="width: 300px;"/>`;

  // fetch("https://dog.ceo/api/breeds/image/random")    
  // .then(res => res.json())                            
  // .then(data => {
  //   const dogDiv = document.getElementById("dog-div");
  //   dogDiv.innerHTML = `<img src="${data.message}" style="width: 300px;"/>`;
  // })
}

function postRepo(e){
  e.preventDefault();
  const repoName = document.getElementById("post-input").value
  
  let optionsObject = {
    method: "POST",
    headers: { 
      'Content-Type' : 'application/json',
      'Authorization': `token ${token}`
    },
    body: JSON.stringify({
      name: repoName,
      description: "blah blah blah"
    })
  }
  
  const newRepoDiv = document.getElementById("post-div");
  newRepoDiv.innerText = "Loading..."

  fetch("https://api.github.com/user/repos", optionsObject)
    .then(response => response.json())
    .then(data => {
      if(!data.name){
        throw new Error()
      }
      newRepoDiv.innerText = `${data.name} was successfully created`;
    }).catch(err => {
      alert("Cound not create repo")
    })
}
