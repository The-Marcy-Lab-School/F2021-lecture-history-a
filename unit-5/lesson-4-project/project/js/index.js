// add our HTML to the .html file 
// brainstorm and create data structures

let word = getRandomWord();
let wordArray = word.split("");
let guessArray = new Array(wordArray.length);
guessArray.fill('-')

console.log(word);
console.log(wordArray);
console.log(guessArray);

// Framework for building features: when some event happens => manipulate the DOM?
// When click on button#start-game-button => reveal RSTLNE on the DOM
// When submit of form#guess-four-letters-form => reveal the four letters that user submitted

//DOM Manipulation
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("word-display").innerText = guessArray.join("")

  //querying for an element to addEventListener
  document.querySelector("#start-game-button").addEventListener("click", startGame)
  document.querySelector("#guess-four-letters-forms").addEventListener("submit", guessLetters)
  document.querySelector("#final-guess-form").addEventListener("submit", guessWord)
})

function guessWord(e){
  e.preventDefault()
  let guess = document.querySelector("#guess-input").value 
  if(guess.toLowerCase() === word) {
    alert("You win!")
  } else {
    alert(`Sorry, the word was ${wordArray.join('')}`)
  }
}

function guessLetters(e){
  e.preventDefault()
  let consonant1 = document.querySelector("#guess-four-letters-forms")[0].value;
  let consonant2 = document.querySelector("#guess-four-letters-forms")[1].value;
  let consonant3 = document.querySelector("#guess-four-letters-forms")[2].value;
  let vowel = document.querySelector("#guess-four-letters-forms")[3].value;
  let regex = /[bcdfghjkmpqvwxyz]/i
  let regexVowels = /[aiou]/i
  if(consonant1.match(regex) && consonant2.match(regex) && consonant3.match(regex) && vowel.match(regexVowels)){
    for(let i = 0; i < wordArray.length; i++){
      let l = wordArray[i]
      if(l === consonant1 || l === consonant2 || l === consonant3 || l === vowel){
        guessArray[i] = l
      }
    }  
    document.querySelector("h1").innerText = guessArray.join('');
    document.querySelector("#guess-four-letters-forms").style.display = "none"
    document.querySelector("#final-guess-form").style.display = "block"
  } else {
    alert("Please enter valid letters")
  }
}

function startGame(){
  //reveal RSTLNE and show them in the h1 element (update the innerText)
  //loop through word and find all instances of l, r, t, n, s, e
  for(let i = 0; i < wordArray.length; i++){
    let letter = wordArray[i]
    if(letter === 'r' || letter === 's' || letter === 't' || letter === 'n' || letter === 'l' || letter === 'e'){
      guessArray[i] = letter
    }
  }  
  document.querySelector("h1").innerText = guessArray.join('');
  document.querySelector("#start-game-button").style.display = "none";
  document.querySelector("#guess-four-letters-forms").style.display = "block";
}