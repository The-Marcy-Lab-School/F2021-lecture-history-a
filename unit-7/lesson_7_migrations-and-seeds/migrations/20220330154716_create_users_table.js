/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// Where you will write code to make schema changes
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary();
    table.string('username').notNullable();
    table.string('gender').notNullable();
  })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// Where you will write code to undo your schema changes
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
