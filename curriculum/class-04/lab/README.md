# LAB: Model and Database

Build the final pieces of your Model validation and persistence!

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.
s

## Requirements

1. Install `mkdirp` as a runtime dependency.

Updated `files` and `Database` (and tests) we did in class are in `starter-code`.

### Model Class

Starter code contains a module called `model.js` that exports a `Model` class.

It will need use (`require`) `Database` and `Schema`.

See starter code for pseudo-code implementation details.

### Manual Integration Testing

In `index.js`, create a schemaConfig and `Model` instance

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
