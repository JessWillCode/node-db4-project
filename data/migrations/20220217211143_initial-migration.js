
exports.up = function(knex) {
  return knex.schema
.createTable('recipes', tbl => {
    tbl.increments('recipe_id')
    tbl.string('recipe_name', 128).notNullable().unique()
})
.createTable('ingredients', tbl => {
    tbl.increments('ingredient_id')
    tbl.string('ingredient_name').notNullable().unique()
})
.createTable('steps', tbl => {
    tbl.increments('step_id')
    tbl.string('step_instructions').notNullable()
    tbl.integer('step_number').notNullable().unsigned()
    tbl.integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('recipe_id')
    .inTable('recipes')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
})
.createTable('steps_ingredients', tbl => {
    tbl.increments('step_ingredient_id')
    tbl.float('quantity')
    tbl.integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('recipe_id')
    .inTable('recipes')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    tbl.integer('step_id')
    .unsigned()
    .notNullable()
    .references('step_id')
    .inTable('steps')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    tbl.integer('ingredient_id')
    .unsigned()
    .references('ingredient_id')
    .inTable('ingredients')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
return knex.schema
.dropTableIfExists('steps_ingredients')  
.dropTableIfExists('steps')    
.dropTableIfExists('ingredients')
.dropTableIfExists('recipes')
};
