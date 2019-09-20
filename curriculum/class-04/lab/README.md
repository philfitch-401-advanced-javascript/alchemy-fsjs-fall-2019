# LAB: Model and Database

Build the final pieces of your Model validation and persistence!

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Requirements

Install `mkdirp` as a runtime dependency.

Updated `files`, `Database` (and tests) we did in class are in `starter-code`.

There is also the `Schema` class as a reference, but should use your own.

### Model Class

Starter code contains a module called `model.js` that exports a `Model` class.

It also contains tests for construction and create.

It is optional to test, but you must implement rest of Model methods

### Manual Integration Testing

In the `models` folder, create a couple of model instances
1. create a schemaConfig and `Model` instance from that
1. export the created instance

In `index.js`, see if you can exercise the model:
1. require `Database` and connect
1. import model instance(s)
1. read and write using `create`, `findById`, and `find`

## Stretch Goals

### Express Server

Create an express server that uses `Database` and a model or two
to expose `api` routes.

### More CRUD

Implement `update` and `delete`

1. `Model` should have methods `updateById(id, model)` and `deleteById(id)`
1. `DocumentCollection` should have `update(id, object)` and
`delete(id)` methods. Refactor part of `save` to new method `write` that both `save` and `update` use.

### Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
