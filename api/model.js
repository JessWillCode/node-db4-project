const db = require('../../data/db-config');

// select 
// r.recipe_id,
// r.recipe_name,
// st.step_id,
// st.step_number,
// st.step_instructions,
// sting.ingredient_id,
// ing.ingredient_name,
// sting.quantity
// from steps_ingredients as sting
// left join ingredients as ing
// on sting.ingredient_id = ing.ingredient_id
// left join steps as st
// on sting.step_id = st.step_id
// left join recipes as r
// on sting.recipe_id = r.recipe_id
// where r.recipe_id = r.recipe_id;

async function getRecipeById(recipe_id) {
    const query = await db('steps_ingredients as sting')
    .leftJoin('ingredients as ing', 'sting.ingredient_id', 'ing.ingredient_id')
    .leftJoin('steps as st', 'sting.step_id', 'st.step_id')
    .leftJoin('recipes as r', 'sting.recipe_id', 'r.recipe_id')
    .select('r.recipe_id', 'r.recipe_name', 'st.step_id', 'st.step_number', 'st.step_instructions', 'sting.ingredient_id', 'ing.ingredient_name', 'sting.quantity')
    .where('r.recipe_id', recipe_id);

    return query;
}

module.exports = {
    getRecipeById
}