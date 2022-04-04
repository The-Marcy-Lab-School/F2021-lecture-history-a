exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
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