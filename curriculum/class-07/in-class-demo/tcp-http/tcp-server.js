const net = require('net');

const httpResponse = json => `
HTTP/1.1 200 OK
Date: ${new Date().toUTCString()}
Content-Type: application/json; charset=UTF-8
Content-Encoding: UTF-8
Content-Length: ${json.length}
Last-Modified: Mon, 21 Aug 2017 12:10:38 GMT
Server: Our bad ass simple tcp server
Connection: close

${json}
`;

const server = net.createServer(client => {

  console.log('a client connected\n\n\n');
  client.setEncoding('utf-8');

  client.on('data', data => {
    // console.log(data);
    const html = '<h1>hello world</h1>';
    const json = JSON.stringify({ 
      greeting: 'hello',
      name: 'world'
    });
    client.write(httpResponse(json));
    client.end();
  });

});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(
    'tcp server listening on port', 
    PORT
  );
});