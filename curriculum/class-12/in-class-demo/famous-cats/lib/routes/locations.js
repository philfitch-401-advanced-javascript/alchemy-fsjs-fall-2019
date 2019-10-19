// eslint-disable-next-line new-cap
const router = require('express').Router();
const Location = require('../models/location');
const addGeo = require('../middleware/add-geolocation');
const locationShows = require('./location-shows');

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

  .use('/shows', locationShows);


module.exports = router;