# Data Modeling

## Learning Objectives
* Model real world data
* Create models with constraints, type checking, validity
* Create an extensible interface and an implementation for a data model

## Outline

### JavaScript Data Modeling

JavaScript has a limited number of built-in data types.  This includes objects, arrays, strings, numbers, and booleans. Data modeling in JavaScript is the process of taking a real world or conceptual idea and encoding it into JavaScript's built in data types. Technically, there isn't a right or wrong way to model data in software development because it has been proven that any idea can be represented using any data structure. However, it is important to follow several practices to boost software readability and maintainability. Boolean values should be used when the data can have only two states. Numbers should be used when the data could support arithmetic operations. Strings should be used when the data is representing a natural language. Arrays should be used to bundle multiple pieces of like data. Objects should be used to bundle multiple pieces of different data.

### Modeling behaviors

#### CRUD - Basic Data Operations
* **CREATE** - Add a record to a data store
* **READ** - Retrieve a record from a data store
* **UPDATE** - Update a record within a data store
* **DELETE**  - Remove a record from a data store

#### Interface
A modeling technique providing common access points in an API (i.e. the CRUD methods) that is agnostic to the storage medium and techniques

#### Implementation

The specific means by which a data model interacts with a persistence layer (file, mongo, postgres, etc)

#### Normalization and Validation

Sanity checking data to ensure that it conforms to the modeling rules, integrity checks, etc prior to doing any operations with it.
