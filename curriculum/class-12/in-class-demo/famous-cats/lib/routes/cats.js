/* eslint-disable new-cap */
const router = require('express').Router();
const Cat = require('../models/cat');
const VetVisit = require('../models/vet-visit');

router
  .post('/', (req, res, next) => {
    Cat.create(req.body)
      .then(cat => res.json(cat))
      .catch(next);
  })
  
  .get('/:id', (req, res, next) => {
    Promise.all([
      Cat.findById(req.params.id)
        .lean(),
      VetVisit.find({ cat: req.params.id })
        .select('date')
        .lean()
    ])
      .then(([cat, visits]) => {
        cat.visits = visits;
        res.json(cat);
      })
      .catch(next);
  })

  .get('/', ({ query }, res, next) => {
    const findQuery = {};
    if(query.name) findQuery.name = query.name;
    if(query.lives) findQuery.lives = { $gte: query.lives };
    
    Cat.find(findQuery)
      .select('name type year url')
      .lean()
      .then(cats => {
        res.json(cats);
      })
      .catch(next);
  })

  .put('/:id', ({ params, body }, res, next) => {
    Cat.updateById(params.id, body)
      .then(cat => res.json(cat))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Cat.findByIdAndRemove(req.params.id)
      .then(cat => res.json(cat))
      .catch(next);
  });

module.exports = router;