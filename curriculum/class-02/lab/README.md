# LAB: Classes, Errors, Type Coercion

We can continue with same lab. **Make sure to work on new branch**

## Requirements

---

### Caster Methods for Validator

We are going to add new methods to `validator` module that, instead of returning 
`true`/`false` as to whether an input is of a type, the function should coerce the type (if that makes sense), 
or throw an error if that type doesn't make sense.

Make use of your `isType` functions as makes sense.

You only need casters for:

1. String
1. Bool
1. Number
1. Date

You will need a `getCaster` method

- Use TDD to drive the code development
- Use a custom `CastError` to report what type was expected, and what value failed
- You will need to assert that a thrown Error happened!

### Schema Reader

The starter code contains a `Schema` class that takes in a schema and exposes a `validate` method.
`validate` uses Object inspection methods to "read" the schema, and call the correct caster for each 
field of the schema, and store the returned values onto a new object. Return this object

1. Create the schema implied by the model in `./data/data.json` for your tests.
1. They Array and Object fields are STRETCH goals, get everything else working first
1. Your schema should be an object with a `type` and `required`
1. You will need to wrap the calls to the Casters with `try`/`catch`. Accumulate errors _info_ into an error array.
1. Add _info_ for missing properties into errors array.
1. If there are errors after validation, throw a `ModelError`, otherwise return the new object

### OPTIONAL: Refactor Vehicles to Classes

* Refactor the existing Vehicle constructor function to be ES Classes
* All existing tests should pass!

 **Software Engineering Note!** *This is the heart of a refactor -- re-implement the same functionality, the same signature, while changing the underlying implementation*

---

## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
