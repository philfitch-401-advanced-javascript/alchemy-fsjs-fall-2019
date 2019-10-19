// eslint-disable-next-line new-cap
const router = require('express').Router();
const VetVisit = require('../models/vet-visit');

router
  .post('/', (req, res, next) => {
    VetVisit.create(req.body)
      .then(visit => res.json(visit))
      .catch(next);
  });
  

module.exports = router;