
exports.seed = function(knex, Promise) {
  return knex('steps_ingredients').del()
    .then(function () {
      return knex('steps_ingredients').insert([
        {recipe_id: 1, step_id: 1, ingredient_id: 1, quantity: 5},
        {recipe_id: 1, step_id: 2, ingredient_id: 2, quantity: 3},
        {recipe_id: 1, step_id: 2, ingredient_id: 3, quantity: 0.13},
        {recipe_id: 1, step_id: 2, ingredient_id: 4, quantity: 0.13},
        {recipe_id: 1, step_id: 3, ingredient_id: 5, quantity: 2},
        {recipe_id: 1, step_id: 3, ingredient_id: 6, quantity: 3},
        {recipe_id: 1, step_id: 3, ingredient_id: 7, quantity: 1},
        {recipe_id: 2, step_id: 5, ingredient_id: 8, quantity: 2},
        {recipe_id: 2, step_id: 5, ingredient_id: 9, quantity: 2},
        {recipe_id: 2, step_id: 4, ingredient_id: 10, quantity: 2},
        {recipe_id: 1, step_id: 2, ingredient_id: 12, quantity: 5},
        {recipe_id: 3, step_id: 7, ingredient_id: 11, quantity: 1},
        {recipe_id: 3, step_id: 8, ingredient_id: null, quantity: null},
        {recipe_id: 3, step_id: 9, ingredient_id: null, quantity: null}
      ]);
    });
};
