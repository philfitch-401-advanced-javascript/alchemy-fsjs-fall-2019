# LAB: Classes, Errors, Type Coercion


## Requirements

---

### Caster

This is a modified repeat of Lab 01. You can start by copying your existing code and tests.
We are going to add new methods that, instead of returning `true`/`false` as to whether an input is of a type,'
the function should coerce the type (if that makes sense), or throw an error if that type doesn't make sense.

- Use TDD to drive the code development
- Use a custom `CastError` to report what type was expected, and what value failed
- You will need to assert that a thrown Error happened!

Functions:

- `castToString`
- `castToNumber`
- `castToBoolean`
- `castToObject`
- `castToArray`
- `castToDate` (new)

### Schema Reader

Create a `Schema` class that takes in a schema and exposes a `validate` method that takes a `model`
and uses Object inspection methods to "read" the schema, the call the correct caster for each field of the schema,
and store the returned values onto a new object. Store the object on `this.record`;

Create the schema implied by the model in `./data/data.json` for your tests

### OPTIONAL: Refactor Vehicles to Classes

* Refactor the existing Vehicle constructor function to be ES Classes
* All existing tests should pass!

 **Software Engineering Note!** *This is the heart of a refactor -- re-implement the same functionality, the same signature, while changing the underlying implementation*

---

## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
