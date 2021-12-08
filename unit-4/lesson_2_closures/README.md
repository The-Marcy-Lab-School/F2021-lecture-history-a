# Unit 4 Lesson 2: Closures

## Key Terms
* Closure
* First-class function
* Lexical scope
* High-order function => take in a func as an argument OR return a function
* Nested functions

## Let's create a counter
`let counter = 0`
`const addToCounter = function(){ /*add 1 and print it out*/ }`

## Essential Questions
* What is a _closure_?
* How do the concepts of _lexical scope_ and _first-class functions_ relate to closures in JavaScript?
* How can we use closures to create private data?

### Review of `this`
*  `this` is the execution context
*  In the global scope, it is `window` in the browser, `global` in Node.
*  You can add variable properties to the `window` object two ways:
    *  In the global scope with `var`
    *  Without using a keyword to declared
* The value of `this` in a function depends on how you called the function!
    * `hello()` vs `ann.hello()`
* However, the value of `this` doesn't work for ARROW FUNCTIONS 