exports.up = function(knex) {
  return knex.schema.createTable('pets', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('species').notNullable();
    table.integer('owner_id').notNullable();
    table.foreign('owner_id').references('id').inTable('users');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('pets');
};