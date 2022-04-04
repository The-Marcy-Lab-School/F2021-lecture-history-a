exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pets').del()
  await knex('users').del()

  await knex('users').insert([
    {first_name: 'Ann', last_name: 'Duong'},
    {first_name: 'Maya', last_name: 'Bhattacharjee'},
    {first_name: 'Reuben', last_name: 'Ogbonna'},
  ]);

  await knex('pets').insert([
    {name: 'Zuko', species: 'dog', owner_id: 1},
    {name: 'Khalo', species: 'dog', owner_id: 2},
    {name: 'Frida', species: 'cat',  owner_id: 2},
    {name: 'Juan Pablo', species: 'dog', owner_id: 3}
  ]);
};
