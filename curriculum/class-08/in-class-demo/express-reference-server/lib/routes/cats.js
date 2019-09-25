/* eslint-disable new-cap */
const router = require('express').Router();
const Cat = require('../models/cat');

router
  .post('/', (req, res, next) => {
    Cat.create(req.body)
      .then(cat => res.json(cat))
      .catch(next);
  })
  
  .get('/:id', (req, res, next) => {
    Cat.findById(req.params.id)
      .then(cat => res.json(cat))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Cat.find()
      .then(cats => res.json(cats))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    Cat.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
      .then(cat => res.json(cat))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Cat.findByIdAndRemove(req.params.id)
      .then(cat => res.json(cat))
      .catch(next);
  });

module.exports = router;