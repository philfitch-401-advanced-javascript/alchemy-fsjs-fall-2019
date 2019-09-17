# Classes, Inheritance, Functional Programming

## Learning Objectives
* create npm scripts for automating command line tasks
* handle thrown errors through the use of `try` and `catch`
* interpret the different types of errors in Javascript

### Functional Programming
- (No) Side Effects
- Single Purpose
- Examples: map, filter, reduce

### Objects and Inheritance
- Constructor functions with Prototypal Inheritance
- Factory Functions (object composition)
- Classes - syntactic sugar

### Errors

Error messages are super important tools for debugging broken code. Javascript has many built in error messages, but you can also define your own errors in your programs. It is important to not forget that errors will happen in production. Error logs are kept in order to fix bugs in productions. Writing good error messages is critical for finding and fixing bugs in deployed applications.

```js
// creating a smart error
class CustomError extends Error {
  constructor(type, value){
    super(`format the message ${type} ${value}`);
    this.type = type;
    this.value = value;
  }
}

const error = new CustomError({ type: String, cause: 'requires password'})
```

### Handling Thrown Errors
Javascript functions can throw errors. Throwing an `Error` is a great way to force developers to use a function correctly. Un-handled errors will often crash Javascript and stop program execution. This is referred to as *failing fast*. The idea is that the sooner the code fails, the sooner a developer will find bugs and fix them. Though throwing errors is a useful feature of the language itself, programs like servers need a way to continue running in spite of bugs in the code. Javascript has a `try {} catch (error) {}` syntax for handling this.

``` javascript
let userInput = '{'
try {
  const data = JSON.parse(userInput)
  // do something with data
} catch(e) {
  console.error(e)
}
```

### Error Cheat Sheet
| Type |  Reason |
| --- | --- |
| Error | generic error |
| ReferenceError | an attempt was made to access a variable that is not defined |
| SyntaxError | the javascript is not valid |
| TypeError | a provided argument was no the allowable type |
| SystemError | a NodeJS error that occurs when a system error has occurred |

### System Error Cheat Sheet
* `EACCESS` - an attempt to access a file without the right permissions
* `EADDRINUSE` - an attempt to start a server on a PORT that is already in use
* `ECONNREFUSED` - a connection was deliberately refused by the target machine
* `ECONNRESET` - a connection was forcibly closed by a peer
* `EEXIST` - a file exists and the attempted action required that it didn't
* `EISDIR` - an action expected to act on a file but found a directory
* `EMFILE` - too many files were open for your operating system to handle
* `ENOENT` - an action expected a file, but did not find one
* `ENOTDIR` - an action expected a directory, but found something else
* `ENOTEMPTY` - an action expected an empty directory, but found one with data in it
* `EPERM` - an attempt to do something that you currently don't have permissions to do
* `EPIPE` - an attempt to write data to a connection that had been closed
