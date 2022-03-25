
exports.seed = function(knex, Promise) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        { recipe_name: 'Potato Soup'},
        { recipe_name: 'Grilled Cheese'},
        { recipe_name: 'Frozen Pizza'}
      ]);
    });
};
