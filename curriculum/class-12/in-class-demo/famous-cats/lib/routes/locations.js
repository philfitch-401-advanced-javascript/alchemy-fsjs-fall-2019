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
  })

  .post('/:id/shows', (req, res, next) => {
    Location.updateById(
      req.params.id,
      {
        $push: {
          shows: req.body
        }
      }
    )
      .then(location => {
        res.json(location.shows[location.shows.length - 1]);
      })
      .catch(next);
  })

  .delete('/:id/shows/:showId', (req, res, next) => {
    Location.updateById(
      req.params.id,
      {
        $pull: {
          shows: { _id: req.params.showId }
        }
      }
    )
      .then(location => {
        res.json(location.shows);
      })
      .catch(next);
  })

  .put('/:id/shows/:showId/name', (req, res, next) => {
    Location.updateOne(
      { _id: req.params.id, 'shows._id': req.params.showId },
      {
        $set: {
          'shows.$.name': req.body.name
        }
      }
    )
      .then(location => {
        res.json(location.shows);
      })
      .catch(next);
  });

module.exports = router;