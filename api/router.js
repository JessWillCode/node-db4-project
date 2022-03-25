const express = require('express');
const Recipes = require('./model');

const router = express.Router();

router.get('/:id', (req, res, next) => {
    Recipes.getRecipeById(req.params.id)
    .then(recipe => {
        res.json(recipe);
    })
    .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      sageAdvice: 'Finding the real error is 90% of the bug fix',
      message: err.message,
      stack: err.stack,
    })
  })

  module.exports = router;