# Unit 6 Lesson 2: Making "Fetch" Happen

## Key Terms:
- AJAX
- Promises
- Fetch
- Query strings

## Essential Questions:
- What is AJAX (Asynchronous JavaScript And XML)?
  - It's an umbrella term that deals with: read data and send data to/from a web server from your website

- What is synchronous vs asynchronous code? What's an example?
  - synchronous code runs in a predetermined order from top to bottom 
  - asynchronous code (events, timers, we can't tell for sure when the code will run)

- Why is it valuable that request/response cycles are asynchronous in JavaScript?

## Learning Questions:
- What are three types of AJAX syntax and which ones are worth learning about?
  - XmlHttpRequest (XHR): the old way to do request/response
  - `fetch` API
  - `async/await`


- What are Promises in JavaScript? What is `fetch` and how does it relate to promises?
  - I promise, in the future to give you X (pending)
    - X will happen (fulfilled)
    - X can't happen (rejected)

  - I promise, in the future to give you the home page of reddit (pending)
    - We get the home page of reddit (fullfilled)
    - We can't get the homepage (rejected)

- How can higher order functions be utilized to be more DRY (don't repeat yourself)?

- How do query strings impact AJAX requests?
- How can code be written for the edge cases when APIs don't return the expected data?

## APIs we will use today: 
- [Fake Jokes API](https://ann-waiting-app.herokuapp.com)
- [Pokemon API Docs](https://pokeapi.co/docs/v2)