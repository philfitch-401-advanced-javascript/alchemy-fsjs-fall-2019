const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.headers);
  console.log(req.url);
  console.log(req.method);

  if(req.url.startsWith('/api')) {
    const json = JSON.stringify({
      greeting: 'hello',
      name: 'world'
    });

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Length', json.length);
    res.write(json);
    res.end();
  }
  else {
    const html = '<h1>hello world</h1>';
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', html.length);
    res.write(html);
    res.end();
  }

});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(
    'http server listening on port', 
    PORT
  );
});
