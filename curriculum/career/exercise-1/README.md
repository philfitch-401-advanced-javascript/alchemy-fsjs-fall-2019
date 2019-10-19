# Exercise 1: Date adder

Create a function `add` that takes a `date` and `diff` and returns
a new date with `diff` added to the original `date`.

* `date` is a `Date` object.
* `diff` is a string representing the amount of time to add to `date`
  * `diff` is a number followed by an operator
  * e.g. `10d` would add ten days

operator | definition
-------- | ----------
`s`      | seconds
`m`      | minutes
`h`      | hours
`d`      | days
`w`      | weeks
`M`      | months
`y`      | years
