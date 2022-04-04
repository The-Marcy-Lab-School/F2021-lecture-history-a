# Lesson 8: `pg` module

## Essential Questions
* What is the purpose of the `knex` module? (create and seed our DB)
* What is the purpose of the `pg` module? (make Database queries)
* What can we configure our Express API to connect to a Postgres Database?
* How can we programmatically execute SQL commands from our Express API?

Create:    INSERT INTO table ...    POST   /pets
Read:      SELECT * FROM table;     GET    /pets      or     GET  /pets/:id   
Update:    ALTER table....          PATCH  /pets/:id  of     PUT  /pets/:id
Delete:    DELETE FROM table....    DELETE /pets/:id

## Goals: 
- Create an REST express API for our users and pets app (a user has many pets)
- Configure the `pg` module to connect express to our DB 
- Build a RESTful Express API
- What our the CRUD operations and the API end points that corresponds with those actions for pets?

## Walkthrough

Step 0. Made a node project, made our migrations and seeds, let’s run them

Step 1. Make basic server 

Step 2. Build out route to get all pets
- Build the skeleton for the express route, 
- But how do we connect to our DB?
- Look up the `pg` documentation
- Write database in `db/config.js` for modular code
- Create a basic Pool to `SELECT * FROM pets;`
- Show console.log then promise

Step 3. Build out GET one pet

Step 4. Build out POST pet 
app.put('/pets:/id' async (req, res) => {
  var x = await pool.query("SELECT").then(x => x.rows)
  console.log(x)
})
