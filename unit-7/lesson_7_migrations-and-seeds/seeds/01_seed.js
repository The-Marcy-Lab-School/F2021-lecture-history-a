/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pets').del()
  await knex('users').del()

  await knex('users').insert([
    {id: 1, username: 'ilikemusic', gender: 'male'},
    {id: 2, username: 'ihatemusic', gender: 'non-binary'},
    {id: 3, username: 'musicisok', gender: 'female'},
  ]);

  await knex('pets').insert([
    {id: 1, species: 'dog', nose_color: 'brown', weight: 4.9, owner_id: 1},
    {id: 2, species: 'dog', nose_color: 'pink', weight: 6.9, owner_id: 2},
    {id: 3, species: 'cat', nose_color: 'black', weight: 4.1, owner_id: 3},
    {id: 4, species: 'cat', nose_color: 'pink', weight: 4.8, owner_id: 1}
  ]);
};
