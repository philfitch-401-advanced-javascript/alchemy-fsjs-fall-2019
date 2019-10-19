# Working with Mongoose Models

## Learning Objectives

* Use param middleware in express
* Create related data models based on data usage patterns using mongoose schema options.
* Control json using mongoose `select()`, `populate()`, and `lean()`
* Consolidate business logic in models using static and instance mongoose model methods

## Mongoose Models

Modifiers:
* `select`
* `lean` (update too)
* `where`
* `count`
* `.limit()` and `.skip()`

## Data Relationships

* one to one
* one to many
    * Intra-document
    * Separate document
* many to many

## Relating Mongo(ose) Models

Use "keys" (id's) to point to another document:

* Primary Key
    * Unique identifier for an entity
    * `_id` in mongo land
* Foreign Key
    * Another documents identifier stored as data in a field
    * Mongoose as `Types.ObjectId`
    * Mongoose wants a `ref: 'Model'` attribute to define which 
    model the id refers to.
* NoSQL has multiple ways 
    * Prefer children referencing parent ids
    * How will the child data will be used outside of the parent (if at all)?
        * Put in parent if close, non-seperable relationship
    * Generally handle many-to-many with child array in one of the documents

## Populate

Using mongoose `.select` and `.populate`

## Mongoose Schemas

More Schema Options:
* timestamp
* custom methods