# Unit 3 - Lesson 0
## List Processing and Functional Abstractions in JavaScript

### Essential Questions
* Explain what it means that functions are _first-class citizens_ in JavaScript.
* What are _higher-order functions_ and how does this result from the concept of first-class citizens?


* Why would you ever want to pass data to a function?
    * dynamic inputs => transform into outputs 
* Why would you ever want to pass functions to a function?
    * dynamic process => transform into outputs   



* Abstractions hides details => code at a higher level


* Thus far, how have we abstracted over _data_? How have we abstracted over _actions_ (particularly, actions performed on data)?

* How do JavaScript's higher-order array methods allow us to further leverage abstraction?
* What is functional programming and what are its benefits?

### Vocabulary
* abstraction
* first-class functions
* higher-order functions
* callback function
* functional programming
* programming _paradigm_ 
* pure function
* side effects
* composability  
* (im)mutability

### Key Methods (Array iterator methods)
* `Array.prototype.forEach()` 
// for each element, do something
// return `undefined`

* `Array.prototype.map()` 
// for each element, map (transform) it to a new element in a new array 
// return a new array

* `Array.prototype.filter()`
// for each element, keep it if it meets the condition  
// return a new array 

* `Array.prototype.reduce()`
// for each element, calculate the next value and keep going until the end
// return a single reduced value

* `Array.prototype.sort()`
* `Array.prototype.some()`
* `Array.prototype.every()`
