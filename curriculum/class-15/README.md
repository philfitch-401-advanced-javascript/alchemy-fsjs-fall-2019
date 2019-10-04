Class 15: DS&A and User Authorization
===

## Authentication vs Authorization

* Authentication - are you who you say you are?
* Authorization - are you allowed to do operation?

## The First Admin

**Q:** If only admin users can make other users admins, how do you make the first admin?

**A:** Has to be done outside the normal system

```js
// file: make-admin.js
require('dotenv').config();
const connect = require('../lib/connect');
require('../lib/models/register-plugins');
const User = require('../lib/models/user');
const mongoose = require('mongoose');

connect(process.env.MONGODB_URI);

// node filename.js <user-id>
const userId = process.argv[2];

// or maybe you have a User.addRole ...?
User.updateById(
  userId,
  { 
    $addToSet: { 
      roles: 'admin'
    }
  }
)
  .then(console.log)
  .catch(console.log)
  .finally(() => mongoose.connection.close());

```

## Sub Routers

You can add routers to routers
* Url paths are cumulative
* If you need to preserver params, [use `mergeParams` option](https://expressjs.com/en/api.html#express.router)

