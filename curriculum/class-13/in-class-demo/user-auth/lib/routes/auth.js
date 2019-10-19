const router = require('express').Router();
const User = require('../models/user');
const tokenService = require('../token-service');
const ensureAuth = require('../middleware/ensure-auth');

const getCredentials = body => {
  const { email, password } = body;
  delete body.password;
  return { email, password };
};

router
  .get('/verify', ensureAuth(), (req, res) => {
    res.json({ verified: true });
  })

  .post('/signup', ({ body }, res, next) => {
    const { email, password } = getCredentials(body);

    User.exists({ email })
      .then(exists => {
        if(exists) {
          throw {
            statusCode: 400,
            error: 'Email already in use'
          };
        }

        const user = new User(body);
        user.generateHash(password);
        return user.save();
      })
      .then(user => tokenService.sign(user))
      .then(token => res.json({ token }))
      .catch(next);

  })

  .post('/signin', ({ body }, res, next) => {
    const { email, password } = getCredentials(body);

    User.findOne({ email })
      .then(user => {
        if(!user || !user.comparePassword(password)) {
          throw {
            statusCode: 401,
            error: 'Invalid email or password'
          };
        }

        return tokenService.sign(user);

      })
      .then(token => res.json({ token }))
      .catch(next);
  });

module.exports = router;
