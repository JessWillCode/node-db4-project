
exports.seed = function(knex, Promise) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {ingredient_name: 'Potatoes'},
        {ingredient_name: 'Evaporated Milk'},
        {ingredient_name: 'Salt'},
        {ingredient_name: 'Pepper'},
        {ingredient_name: 'Shredded Cheese'},
        {ingredient_name: 'Green Onions'},
        {ingredient_name: 'Bacon'},
        {ingredient_name: 'Sliced Cheese'},
        {ingredient_name: 'Bread'},
        {ingredient_name: 'Butter'},
        {ingredient_name: 'Frozen Pizza'},
        {ingredient_name: 'Water'}
      ]);
    });
};
