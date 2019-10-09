# WebSockets

## Resources

[WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)

## Agenda

* Network
  * TCP
  * HTTP
  * WebSockets
* EventEmitter
* Socket.io

## Network

### TCP

Transmission Control Protocol (TCP) allows computers to connect and share information.
Data that is shared between the computers is reliable and ordered. This is accomplished by
sharing synchronization numbers between the two machines. The number is incremented
on each message.

#### Handshake

1. The client sends a SYN message to the server
1. The server responds with a SYN-ACK to the client
1. The client responds with an ACK to the server

##### SYN

The client sends a SYN message to the server along with a random number (A).
This number will be used to synchronize messages from the client to the
server. This allows the server to know if any messages are dropped and
allows the server to keep the messages in order.

This step proves that the server is able to receive information from the
client.

#### SYN-ACK

The server sends a SYN-ACK to the client with the clients SYN number plus
1 (A+1). It also sends its own random number to the client (B). This number
will be used to synchronize messages from the server to the client. This
allows the client to know if any messages are dropped and allows the client
to keep the messages in order.

This step proves that the client is able to receive information from the
server.

#### ACK

The client then sends back A+1 and B+1. This acknowledges that the client
was able to receive messages from the server.

### HTTP

HTTP (Hypertext Transfer Protocol) is an application protocol used to send
information across the web. It follows a standard flow:

1. a client creates a connection to a server
2. the client sends a request to the server

```
GET / HTTP/1.1
Host: example.com
Accept-Language: us-en
```

3. the server sends a response to the client

```
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 25 Jun 2019 15:57:17 GMT
Accept-Ranges: bytes
Content-Length: 269
Content-Type: text/html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>Example</h1>
</body>
</html>
```

4. close the connection

#### HTTP Request parts

```
GET /dog HTTP/1.1
Host: example.com
Accept-Language: us-en
```

* `GET` is the method used. Other common methods:

method  | description
------- | -----------
`POST`  | used to create new information on the server
`GET`   | used to get information from the server
`PUT`   | used to update information on the server
`PATCH` | used to partially update information on the server
`DELETE`| used to delete information on the server

* `/` the path we are requesting. You will see this path in the url
  bar of your browser
* `HTTP/1.1` the protocol and version we are using
* the following lines are all headers
  * `Host: example.com` the host that you are making a request to
  * `Accept-Language: us-en` lets the server know what language you support

#### HTTP Response parts

```
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Accept-Ranges: bytes
Content-Length: 269
Content-Type: application/json

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>Example</h1>
</body>
</html>
```

* `HTTP/1.1` the protocol and version
* `200 OK` the status code and status message. Other common status codes:

code | message               | description
---- | --------------------- | -----------
200  | OK                    | The request succeeded
204  | No Content            | The request succeeded but no content was sent back
301  | Moved Permanently     | The requested resource has moved
304  | Not Modified          | The resource has not changed. Use your cache
400  | Bad Request           | The server could not understand the request
401  | Unauthorized          | The client is not logged in
403  | Forbidden             | The client is logged in but not allowed
404  | Not Found             | The resource is not found
500  | Internal Server Error | There is a server on the server side
503  | Service Unavailable   | The server is down
504  | Gateway Timeout       |  The server took too long to respond

* the following lines are header information
* a single empty line
* the data sent back as a response

### WebSockets

WebSockets are a communication protocol established over HTTP
that provides a full-duplex (read and write) communication channel.

1. a client creates a connection to a server
2. the client sends a request to the server with an Upgrade header

```
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

3. the server responds to the client acknowledging the upgrade to websocket.

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

Now the connection is maintained and information can be send from
server to client or from client to server.

## EventEmitter

```js
const EventEmitter = require('events');

const ee = new EventEmitter();

Router()
  .post('/dogs', (req, res, next) => {
    Dog
      .create({ name: 'spot' })
      .then(dog => {
        ee.emit('new_dog', dog);
        res.send(dog)
      })
      .catch(next);
  })

ee.emit('new_dog', { name: 'spot', });

ee.on('new_dog', dog => {
  // myEvent happened
});

document.getElementById('my-id').addEventListener('keyup', () => {

});
```

## Socket.io

### Server

First our server needs to listen to incoming connections on some port

```js
const io = require('socket.io')(7890);
```

In the above example we start a websocket listening on port `7890`.
`io` is an `EventEmitter` like object. We can wait for incoming
connections by subscribing to the `connection` event.

```js
const io = require('socket.io')(7890);

io.on('connection', socket => {
  // socket is a connected client
});
```

Like `io`, `socket` is also an `EventEmitter` like object. We can
subscribe to events:

```js
const io = require('socket.io')(7890);

io.on('connection', socket => {
  socket.on('myEvent', data => {
    // do stuff
  });
});
```

We can publish events to a socket:

```js
const io = require('socket.io')(7890);

io.on('connection', socket => {
  socket.emit('myEvent', { name: 'spot' })
});
```

We can also broadcast events. Broadcasting sends the event
to every connected socket:

```js
const io = require('socket.io')(7890);

io.on('connection', socket => {
  socket.broadcast.emit('myEvent', { name: 'spot' })
});
```

### Client

A client connects to an existing Socket.io server.

```js
const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
```

Above our client connects to a server listening on port 7890.

Like a server a client can subscribe to events:

```js
const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');

socket.on('myEvent', data => {
  // do stuff
});
```

It can publish events:

```js
const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');

socket.emit('myEvent', { name: 'spot' });
```
