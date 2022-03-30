//Step 1. use http module
const http = require('http')
const url = require('url');

//Step 2. create our server
const server = http.createServer(requestListener)

//Step 3. start the server
server.listen(8080)
console.log("Server has start on port 8080")

//Step 4. How will our server respond to requests
function requestListener(req, res){
  const path = url.parse(req.url).pathname
  const queryObject = url.parse(req.url, true).query;

  console.log("Path: ", path)
  console.log("Query Params: ", queryObject)

  if(path === '/'){
    res.writeHead(200);
    if(queryObject.name){
      res.end(`hello ${queryObject.name}`)
    } else {
      res.end('hello world')
    }
  }else if(path === "/marcylab"){
    res.writeHead(200);
    res.end('Welcome to campus')
  }else{
    res.writeHead(404);
    res.end("<h1>Not Found</h1>")
  }
}

// const mapping = {
//   '/' : 'helloworld',
//   '/marcylab' : 'Welcome to the new campus'
// }


/**
 * 
 * http://localhost:8080/?firstName=Ann&lastName=Duong
 * 
 * {firstName: "Ann", lastName: "Duong"}
 */

