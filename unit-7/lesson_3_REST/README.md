# REST API and Restful Convention
- Building servers! with Node and Express
- Building an API!
- Node: JS outside the browser
- Express: build API quickly 

- Routing: https://website.com/damian/profile/settings/notifications 

## Key Terms
+ Routing
+ REST
+ JSON
+ `app.use(cors())`
+ `app.use(express.json())`

## Essential Questions
* What is REST? 
  - architectural style for API
  - is naming convention for URL paths
* What is a Restful API? 
  - follows REST convention/rules

### GET /resource => JSON list of that resources
GET /pokemon     => JSON for list of all pokemon 
GET /berry       => list of berries
GET /games       => list of all games 
GET /trainers    => list of all pokemon trainers  

### GET /resource/{id} => JSON object that matches the ID
GET /berry/2    => JSON object of the berry with ID 2
GET /pokemon/5  => pokemon with ID of 5
GET /book/104   => book with ID of 104 

### POST /resource => Create a new item 
POST /berry     => Create a new berry send back the created berry 
POST /book      => create a book send back the create book 

### PUT or PATCH /resource/{id} => Update an existing resource
- send back the update resources

### DELETE /resources/id => Destroy an exisitng resource
- send back the delete resource
- Send a 204 status code (no content)


GET    /book    => list of all books
POST   /book    => create a new book
GET    /book/3  => a single book 
PUT    /book/3  => update the book with ID of 3
DELETE /book/3  => delete the book with ID 3

## Example of RESTful routes

![Books](https://raw.githubusercontent.com/abpframework/abp/rel-4.4/docs/en/images/bookstore-apis.png)
![Employees](https://www.pragimtech.com/blog/contribute/article_images/1220210623193527/rest-api-with-.net-5.jpg)
![Dogs](https://miro.medium.com/max/1135/1*E4WwbdA-NSJJimYZA9r6Cg.png)
![Blogs](https://miro.medium.com/max/1400/1*M0hdLsgbzelOFuq-1BVH-g.png)
![Movies](https://uploads.sitepoint.com/wp-content/uploads/2014/07/1405379671IMG01.png)



## Build out of a REST Express API
- Domain: Marcy Lab Fellows

### Step 0: Set up your Node Project
- Initialize a Node project
- Install dependencies
- Create a basic server file
- Start that basic server

### Step 1: Build and test our your routes
GET /students         => a list of students (JSON)
GET /students/:id     => a single student
POST /students        => create a new student, send back the created student
PUT /students/:id     => update the student at that ID, send back that student 
DELETE /students/:id  => delete that student at that ID, send a 204 

### Step 2:
- Use middleware
- `app.use(cors())`
- `app.use(express.json())`