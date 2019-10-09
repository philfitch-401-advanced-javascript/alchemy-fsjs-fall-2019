# Socket.io exercises

## Exercise 1

* create a socket.io server
  * on a client connecting publish an event `hello`
* create a socket.io client
  * subscribe to the `hello` event.
  * upon getting the `hello` event `console.log` `HI!!`

## Exercise 2

* create a socket.io server
  * subscribe to an event called `log`.
  * on getting the `log` event `console.log` and data received
* create a socket.io client
  * publish a `log` event every 1 second with some string as data
  * BONUS: make the string random by using the
    [chancejs](https://chancejs.com/) library
