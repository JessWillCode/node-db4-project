
exports.seed = function(knex, Promise) {
  return knex('steps').del()
    .then(function () {
      return knex('steps').insert([
        { recipe_id: 1, step_number: 1, step_instructions: 'Prep Potato Soup'},
        { recipe_id: 1, step_number: 2, step_instructions: 'Make Potato Soup'},
        { recipe_id: 1, step_number: 3, step_instructions: 'Serve Potato Soup'},
        { recipe_id: 2, step_number: 1, step_instructions: 'Prep Grilled Cheese'},
        { recipe_id: 2, step_number: 2, step_instructions: 'Make Grilled Cheese'},
        { recipe_id: 2, step_number: 3, step_instructions: 'Serve Grilled Cheese'},
        { recipe_id: 3, step_number: 1, step_instructions: 'Open Frozen Pizza'},
        { recipe_id: 3, step_number: 2, step_instructions: 'Cook Frozen Pizza'},
        { recipe_id: 3, step_number: 3, step_instructions: 'Serve Frozen Pizza'}
      ]);
    });
};
