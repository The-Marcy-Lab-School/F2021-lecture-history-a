# Lions, Tigers, Migrations, and Seeds, Oh My!
This repo talks about what they are and why they're useful.
[Knex Docs](http://knexjs.org)


# Why do we need them?
The main reason you want to use migrations and seeds is for maintanability. Image this: you're working on a team of developers that share a code-base. You all push and pull from the same remote Github repo. Let's say you add a new feature that requires a database, so you create one on your local computer. You finish building out your feature push your new code up! However, if your team members were to pull you code down, they would not get your database or database changes. 

When you work with other devs, they need to be able to reproduce your database structure and starting information. We could have everyone run the SQL query to re-create the entire database manually. However, this does not scale, so in the real world it's much more common for companies to use actual migration files to keep track of their DB structure and seed files to populate their databases.


# What are Migrations?
Migrations are special files that run queries on your DB to perform structural updates, or in some cases, data updates. In node land, one of the more common ways to do this is by using the query builder KNEX. This is a simple library that allows you to create and run migrations files with ease.

## Rough overview of Knex
The docs are very nicely laid out, but do use this project as an example when setting up your own. The first thing you'll need to do is create a node project `npm init -y`. Then, install knex so we can create our migrations and install gp so we can connect our node project to our Postgres database `npm install pg knex`. 

For this tutorial, you'll need to create a Postgres database. Let's call this DB `my-database`.

Next, we can set up a knexfile.js. In the root of your directory, run `knex init` to create a boiler plate `knexfile.js`. Knex needs to manage the connection to you db, and this is where that is done.

```js
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
```

You would have a different object to manage your connections for each environment, and each DB type will have it's own specific format. For this tutorial, replace the developement object the following:

```js
module.exports = {

  development: {
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '',
        database: 'my-database',
    },
  }

};
```
As you can see, we're using the `pg` library to connect and all our settings are configured by our environment. In addition, this tutorial assumes your Postgres is running on 127.0.0.1 (localhost) and port 5432. It also assume your Postgres user is called `postgres` and that that user has no password. If you Postgres is configured differently, you will need to make those changes in your `knexfile.js`.


## Creating New Migrations
Couldn't be easier! Let's say our development team is making an app that keeps track of user data. So we'll need to create a users table! Just run `knex migrate:make create_users_table` and you'll get something like: `20200518022705_create_users_table.js`. That bit at the front is a timecode that the migration uses to track what migrations have been run. You'll want to name your migration file based on what structural changes that migration will be doing. If we look in the file we'll see:

```js
exports.up = function(knex) {

};

exports.down = function(knex) {

};


// older versions will look like:
exports.up = function(knex, Promise) {

};

exports.down = function(knex, Promise) {

};
// use the Promise if you need to, but you likely won't
```
So there's an up and a down. What's that? Well, that's the beauty of migrations, you can move forward and back. When creating, it's the `up` function, when going back it's the `down`. You'll only likely need to use `down` in development. The important thing is that whatever you do in the `up` function must be undone in the `down` function:

```js
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
    return knex.schema.dropTable('users');
};
```
So as we can see, we're creating a simple table in the `up` function, and then just dropping it in the down. When we decide to run our migration file, we will be creating a `users` table that has 4 columns: an `id` primary key, a `name`, `created_at`, and `updated_at`. If we decide to rollback (undo) our migration, we will simply drop the table we created. For more details, check the offical Knex docs, but the syntax is pretty straightforward.  

To run your migrations do: `knex migrate:latest` and to roll back it's just: `knex migrate:rollback`. It's common to put these into your `package.json` just so if you forget you don't need to leave your project.

At this point, if you view your `my-database` database, you'll see it has one table: `users`. 

## What about Relationships Across Tables?

Let's say your development teams wants to add a new feature where a user can have many pets. We'll need to create a new `pets` table which will need a foreign key that references the `users` table. Run `knex migrate:make create_pets_table` to create a new migration. Then in the new migration file, add the code:

```js
 exports.up = (knex) => {
  return knex.schema.createTable('pets', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('species').notNullable();
      table.integer('owner_id').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.foreign('owner_id').references('id').inTable('users');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('pets');
};
```

Notice the line of code `table.foreign('owner_id').references('id').inTable('users');`

This is creating a foreign key reference. We will not be allowed to have a pet unless it has an owner that exists on the `users` table. 

## Why do I need knex for migrations?
Technically you don't. But There's a reason companies use React instead of Vanilla js: there's no point in constantly reinventing the wheel. You *would* need to create a migration system, and it'd be a hell of a lot less battle tested than Knex. So companies will likely use Knex or some other library with migration capabilities like an ORM like Sequelize.

So, if migrations build up our DB, how do we populate it?


# What is a seed file?
A seed file is the easiest way to fill your DB up with starter data. All a seed file really does is: clear db of all existing data and repopulate it with starter data. Again, you guys likely just added in data by hand to start, but there's a better way. Knex is a handy runner for your file becuase it will give you access. It also makes a file for you with `knex seed:make 01_seeds`, which would make `01_seeds.js` in the designated seed file (seeds are usually much fewer, so no timestamp is generated, you have to manually add the order you want things to run). To start, here's what that file would look like:

```js
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
```
Basically, it's just telling you an example, you'll need to delete this. Also, feel free to make it `async` so you can use `await`. However, you don't have to use pure Knex. In the example file that I have provided, you'll notice that I do use `knex` to delete all data, but then I import my own models and use their methods to populate the database. This is a more common pattern.

# KNEX and Objection
So, what's Objection? Well it's an ORM, Object Relational Mapper. It's job is to handle the lower level SQL for you, so you can focus on higher level logic. It's also just plain more convenient, because it allows you to build dynamic queries. With traditional SQL, you can only insert dynamic values by default. If you want to insert dynamic columns or tables, you'll need another library to defend against injections anyway, ORMS do this by default.

It also allows for a more natural flow of programming. It allows you to add generic CRUD methods to a base class. This DRYs out your code in a way that traditional pg simply cant (without another library) becuase of the dynamic queries. It also allows methods to return not just sql, but rather instances of the class so methods can be called on products of return values. With pg, the default is to simply return the query values, so extra code would need to be added to each class in order for similar behavior to be achieved.

In the pure-user file, you can see that just *one* of the Objection methods takes a huge amount of work, and it's far more fragile than it's ORM counterpart. And that's just one small method on a single model, imagine duplicating that for every single one. The work piles up, so companies tend to reach for an ORM that handles these situations far more elegantly.
