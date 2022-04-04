# Lesson 9: Models, Controllers, Router

## Our Current Project
* A User Has Many Pets
* A Pet Belongs To A User

### API Endpoints
* `GET  /`                   Responds with `'Hello World'`.

* `GET  /users`              Responds with all users.
* `GET  /users/:id`          Responds with a single user.
* `GET  /users/:id/pets`     Responds with all the pets that belong to a user.

* `GET  /pets`               Responds with all pets.
* `GET  /pets/:id`           Responds with a single pet.
* `POST /pets`               Creates a new pet. Requires `name`, `species`, and `owner_id` is the request body.




## Problem Statement
Our Express API has 7 routes, all in the `index.js`. Many APIs have more routes, and it's not scalable to continue putting everything into a main file. We need to learn a better way to organize our code. One popular pattern in MVC.

## Key Terms
* MVC Pattern (Models, Views, Controllers)
* Views (UI)
* Models (Data or Database)
* Controllers (Logic to handle req/res cycle)
* Express Router

## Essential Questions
* What is the MVC Pattern?
* How can we write modular Express code?
* What are best practices when organizing our server-side code?