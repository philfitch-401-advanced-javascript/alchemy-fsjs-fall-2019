// eslint-disable-next-line new-cap
const router = require('express').Router();
const Location = require('../models/location');
const addGeo = require('../middleware/add-geolocation');

router
  .get('/', (req, res, next) => {
    Location.find()
      .lean()
      .then(locations => res.json(locations))
      .catch(next);
  })

  .post('/', addGeo(), (req, res, next) => {
    Location.create(req.body)
      .then(location => res.json(location))
      .catch(next);
  })

  .put('/:id', addGeo(), ({ params, body }, res, next) => {
    Location.updateById(params.id, body)
      .then(location => res.json(location))
      .catch(next);
  })

  .post('/:id/shows', ({ params, body }, res, next) => {
    Location.addShow(params.id, body)
      .then(shows => res.json(shows))
      .catch(next);
  })

  .delete('/:id/shows/:showId', ({ params }, res, next) => {
    Location.removeShow(params.id, params.showId)
      .then(shows => res.json(shows))
      .catch(next);
  })

  .put('/:id/shows/:showId/name', ({ params, body }, res, next) => {
    Location.updateShowName(params.id, params.showId, body.name)
      .then(shows => res.json(shows))
      .catch(next);
  });

module.exports = router;