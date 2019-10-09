# LAB: Socket.io

Create an event driven application that "distributes" the responsibility for reading,
writing, and capitalizing a file to a **separate applications** via Socket.io.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

* `reader.js`
  * Accepts a filename as a command line parameter
  * Reads the file from the file system
* `capitalizer.js`
  * Converts it's contents to upper case
* `writer.js`
  * Writes it back to the file system

## Requirements

Refactor the provided application (`app.js`) using best practices for modularization, asynchronous file access, and test-ability.

Connect the application (app.js) to a `socker.io` server and emit messages related to file access.  Connect a new application (`logger`) to the server and log all file activity.

### Assignment

* The application must accept a filename as a command line parameter
  * Read the file from the file system
  * Convert it's contents to upper case
  * Write it back to the file system
* Following the write operation, report back to the user (console.log) the status
* Any and all errors must be thrown

#### Server

* Create a socket.io server in a new folder called `server`
* Setup listeners for `file-read`, `file-write`, `file-saved`, and `file-error` events
* When they occur, broadcast the appropriate event and payload to clients

#### Reader

* Create a file `reader.js`
* Connect your reader to the socket.io server
* read the file passed as an argument
  * make a module to read the file (in a seperate file)
* emit the `file-read` event with the files content and the path
* Rather than throwing errors and console.log() inline, fire `file-error`.

#### Capitalizer

* Create a file `capitalizer.js`
* Connect your capitalizer to the socket.io server
* subscribe to the `file-read` event
  * take the data and capitalize it.
* emit the `file-write` event with the capitalized data and file path

#### Writer

* Create a file `writer.js`
* Connect your writer to the socket.io server
* subscribe to the `file-write` event
  * take the content and save it at the path provided
* emit the `file-saved` event.
* Rather than throwing errors and console.log() inline, fire `file-error`.

### Operations

* Start your server on port 3000
* In a separate terminal window, start your writer (it should connect to the server)
* In a separate terminal window, start your capitalizer (it should connect to the server)
* In a separate terminal window, run the reader from the CLI to alter the file
* You should observe the event stream in the client and errors on the server

### Testing

* app - Write tests around all of your units
  * File Read, File Save, Uppercase
  * Mock the fs module methods so that your tests don't use actual files

### Assignemnt Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations

* Your server need not be deployed to Heroku for this lab
