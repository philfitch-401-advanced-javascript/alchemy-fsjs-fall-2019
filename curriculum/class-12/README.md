Class 12: Advanced Middleware and Routes
===

## Functional Middlewares

* Okay for middleware not to handle response, just do additional work
* Sometimes this is what people mean by middleware
* body-parser, authentication, authorization

## What's `next()`?

Use the `next()` function to:

* Selectively apply common app logic like authentication and authorization
* Introduce custom properties on the request object
* Setup common error handling and 404
* Control flow
    * decline to handle
    * work supplemental to response
    * can be Async!

### using `next()`

* No arguments - on to next in list
* `route` - jump to next `app.use()`
* Any other argument - jump to error handler

### Special routes

* `( err, req, res, next ) => { ... }`
    * must have all four parameters defined, even if not using
    * Make sure last in `app.js`

* last `app.use()` is defacto 404 handler

* Built-in express:
	* "404"
	* Error 


## Middleware Error Handling

Route all errors to this handler for consistency and to have a single place errors flow through

### Types of errors

* Expected
    * Mongoose Validation errors
    * 404 (not found)
    * 400 bad request
    * 401 not authentication
    * could be more...
* Unexpected (500)

### Sources

* Explicitly thrown
    * We need 400 level code
        * 404 on id
        * 400 on Bad Request
    * Mongoose Validation errors
        * "Massage" to be relevent
* Unhandled Promise rejections
    * 500

## Mongo(ose) Partial Updates

* Commands prefixed with `$`
* Mongoose methods are doing a `$set` (`$unset`)
    * (separate `replace` method)
* Array manipulation
    * `$push`
    * `$addToSet`
    * `$pull`

## Better `jest`

* Look at rest of `expect` matchers for deep equal
* Use object spread

## Promise Chaining

Core issue:
1. Sequential work should not be nested
1. But what happens when we need access to a value from a prior step?

How does `async`/`await` help here?