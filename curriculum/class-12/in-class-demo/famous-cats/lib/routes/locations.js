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

  .put('/:id', addGeo(), (req, res, next) => {
    Location.updateById(
      req.params.id,
      req.body
    )
      .then(location => res.json(location))
      .catch(next);
  });

module.exports = router;