User Authorization with Roles
===

## Description

Continue on your auth lab from yesterday

## Details

### Create `ensureRole('role')` Middleware

Check the `payload.roles` and if includes role passed in (should be `admin`) call `next`, otherwise should be error with appropriate `statusCode` and `error` message.

**Needs to be used downstream from `ensureAuth` so that user payload is on `req`**

### Adding and Removing Roles

1. Create a bootstrap script that uses the user model to directly add (`$addToSet`) the admin role to a given user id.
1. Make sure that on sign-up you do not save `roles` property that may have been included with request!
1. Add a new routes to `auth.js` router:
    1. A User must be an admin to call these routes
    1. Full urls:
        - `PUT /api/auth/users/:id/roles/:role`
            - Add role to user of `:id`
        - `DELETE /api/auth/users/:id/roles/:role`
            - Remove role from user of `:id`
        - `GET /api/auth/users`
            - Return `_id` and `email` of all users
    1. Disallow a user from removing their own `admin` role.
    1. STRETCH: Use a sub-router!

### Models

Add a new model to your project:
1. Can be cats, pirates, or whatever you want
1. This model can be accessed:
    1. `GET`'s can be done by any authorized user
    1. `POST`, `PUT` and `DELETE` can *only* be done by a user with `admin` permissions
    1. Do **not** track `owner` on this model

## Rubric:

* Bootstrap Script: 2pts
* Ensure Role Middleware: 2pts
* Admin Routes: 3pts
* Admin Protected Model, with Open Get: 3pts