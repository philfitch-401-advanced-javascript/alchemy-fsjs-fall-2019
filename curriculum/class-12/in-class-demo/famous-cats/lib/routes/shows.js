// eslint-disable-next-line new-cap
const router = require('express').Router();
const Show = require('../models/show');

router
  .post('/', (req, res, next) => {
    Show.create(req.body)
      .then(show => res.json(show))
      .catch(next);
  })
  
  .get('/:id', (req, res, next) => {
    Show.findById(req.params.id)
      .populate('cats', 'name type')
      .then(show => res.json(show))
      .catch(next);
  });

module.exports = router;