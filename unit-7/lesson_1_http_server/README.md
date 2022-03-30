# Essential Questions
* How can we use JavaScript on the server to create dynamic web applications?
* What is the purpose of HTTP Status Codes? Why is this important?
* How does Node handle routes and routing for us in our web applications?  

# Walkthrough creating our first server

## What is localhost? You all have used it before!
- You can run multiple servers on your computer by using different ports

## Let's build a simple server that...
- Will get requests and give responses
- Will respond with text or data
- Will be able to parse the URL path
- Will be able to parse query parameters

### Initialize a Node Project
- `npm init`
- Inspect the `package.json`
- `npm start`
- `nodemon`

### Use the http module to create a basic server
```js
const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200); //status code
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);
```

### Status Codes
- 2XX
- 3XX
- 4XX
- 5XX

### Refactor our server to only handle specific paths(routes)
- `/` should return "Hello World!" with a status code of 200
- `/marcylabschool` should return "Welcome to campus!" with a status code of 200
- `/fellows` shoudl return some JSON data with a status code of 200
- Anything other route will return a status code of 404

```js
const url = require('url');
```


### Query Parameter Practice
- `/?name=Reuben` should return "Hello Reuben!" with a status code of 200