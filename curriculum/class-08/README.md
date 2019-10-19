# Express 

## Learning Objectives

* Understand Express Middleware
* Understand Express Routing
* Properly test an `express` server
* Implement CRUD behavior through HTTP to a REST API

## Main Topics:

* Setup app routing _with ExpressJS_ correctly using 
route matching, parameters, and order of routes
* “Starting” an express app, just _httpServer_, ie .listen() vs http.createServer(app)
* Add middleware and routers with `app.use`
    * Modularize resource routes using `express.Router()`
    * Serve static assets using `express.static`
    * Consume third-party middleware via npm modules like `morgan`
    * Create custom middleware using express middleware functions 
* Correctly handle middleware errors and 404 errors by setting up 
express error handling middleware functions 


## Overview

### Basic Express

* routing
	* method based functions (`app.get`)
	* response.send and response.json
	* regex
	* order
	* parameters (route and query)
		* request
	* `app.use()`
* static files
* project structure
	* don't use one huge app.js file!
	* views, routes, static
	* express generator- food for thought
	* `express.Router()`

### Middleware

* What is it?
  * Loaded term with long history
  * In Express, in the “middle” between request and response
* Middleware “Functions”
* Mounting middleware
* Design best practices
  * Use toward top of file
  * Leaving the res object until the end
* Parameters
* Route handling
  * Regex and efficiency
  * Router object
* Middleware error handling

### `express.Router`
* Extract routes from main app.js
* Leverage mounting path in app.use
* Routers are nestable

### Project Structure
Modularize routes
  * don't use one huge app.js file!
  * express.Router()
Folder/File
  * views, routes, models, public
  * server, app, config
food for thought: look at express generator
  

## Server Testing

* Instead, export your server as a module in a library
* Then, you can use `supertest` to run your tests.
  * This will hit your routes as though your server was running, without actually starting it.
  * That's one less thing to go wrong (eliminate variables when testing!)


#### Test Pyramid

Server Testing crosses boundaries

* Units: Server Internal Functions
  * Mock any integrations (like data fetching)
* Integration: How it connects to other services
  * Really connect to other services (hard dependencies)
* Acceptance
  * The server might be a dependency of some other test
   
