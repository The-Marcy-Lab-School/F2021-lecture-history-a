# Unit 4 Lesson 1: Function Execution Context

## Key Terms
* `this` => execution context (how are you running this code)
    * the value of `this` is the object off which we are on

* global object / `globalThis`
    * In the global scope, `this` is the window object or the global object 

* function invocation
    * implied reference to the window object

* method invocation
    * this value of `this` equal ______.greet()
    * What object are you claling the method from?

* strict mode
    * prevents developer from accidentally creating global variables
    * the value of `this` in a function is `undefined`
    * the value of `this` in the global scope is still `window`

## Topics
* Global objects in the browser? in Node?
* Global variables and how they are stored in the global object?
* Declaring global variables inside of a local scope

## Essential Questions
* When and how is the binding of `this` determined?
* How is the binding of `this` determined for arrow functions?
* How do we explicitly define what `this` should be when invoking a function?
* What is _strict mode_ and how does it impact the binding of `this`? 
