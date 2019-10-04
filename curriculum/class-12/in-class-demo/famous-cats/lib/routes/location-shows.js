// eslint-disable-next-line new-cap
const router = require('express').Router({ mergeParams: true });
const Location = require('../models/location');

router

  .post('/', ({ params, body }, res, next) => {
    Location.addShow(params.id, body)
      .then(shows => res.json(shows))
      .catch(next);
  })

  .delete('/:showId', ({ params }, res, next) => {
    Location.removeShow(params.id, params.showId)
      .then(shows => res.json(shows))
      .catch(next);
  })

  .put('/:showId/name', ({ params, body }, res, next) => {
    Location.updateShowName(params.id, params.showId, body.name)
      .then(shows => res.json(shows))
      .catch(next);
  });

module.exports = router;