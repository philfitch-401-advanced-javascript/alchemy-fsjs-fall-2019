User Management and Auth
===

## Description

For this assignment you'll create server that allows user sign-up, and enforces
access to routes based on user identity.

## Details

### Models

You need to create two models for this exercise:
1. `User` - represents a user account
    1. Needs to store the `hash` from password 
    1. Needs to have a method to validate correct password
    1. Has a `favorites` property this is an Array of `ObjectId` with a ref to Model #2 below
1. Some entity the user can favorite. Can be cats, pirates, or whatever you want
    1. Include an `owner` property of type `ObjectId` with a ref to `User` model

### Routes

Implement the standard `auth` router. Feel free to add in-class work to your template!
1. `POST /api/auth/signup`
1. `POST /api/auth/signin`
1. `GET /api/auth/verify`

Provide a "me" router:
1. `GET /api/me/favorites`
    1. Populate favorites on user model
    1. Return favorites property as response
1. `PUT /api/me/favorites/<id-to-favorite>`
    1. "Add to Set" id to user favorites
    1. Return new favorites array from user model
1. `DELETE /api/me/favorites/<id-to-delete>`
    1. "Pull" id from user favorites
    1. Return new favorites array from user model

Provide a router for your entity (`cats` in this example)
1. `POST /api/cats`
    1. Add the authenticated user's id as the `owner` property
1. `PUT and DELETE` `/api/cats/:id`
    1. In addition to the `:id`, limit to `owner` who is authenticated user
1. `GET /api/cats`
    1. List of all cats, any authenticated user can access.

## Rubric:

* User Model: 2pts
* Auth Middleware: 2pts
* Auth routes: 2pts
* Favorite routes w/ correct auth: 2pts
* Entity routes w/ correct auth: 2pts