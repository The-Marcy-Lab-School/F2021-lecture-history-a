# Lesson 4: AJAX Patterns, Async/Await

## Key Terms
* `fetch`
* JSON (JavaScript Object Notation)
* .json() vs .text()

- GET: getting/receiving data
- POST: sending/giving data 


# Optimistic Rendering  (positive)
* When I make a fetch (I'm very sure I'll get a response)
* update your DOM before you get the response
* faster DOM updates => happy user
* Simulate a working app 
* Gaming 

# Pessimistic Rendering (doubtful)
* When I make a fetch call (I'm not sure I'll get a response)
* update your DOM after the response is given to you
* What to make SURE the reponse was succesful so that we don't lie to our users  



## Essential Questions
* How does asynchronously programming and the ability to make AJAX requests impact our applications?
* How can we structure our code to make our applications easy to read and maintain?

### APIs
- [Reqres.in](https://reqres.in/)
- [Github API](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api)