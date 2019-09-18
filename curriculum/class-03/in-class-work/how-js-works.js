const pg = require('pg');
const client = new pg.Client('postgres://localhost:5432/famous_cats');
client.connect();

// const http = require('http');
console.log('lettuce begin');

setTimeout(() => {
  console.log('time is up!');
  client.end();
}, 2000);

function add(x, y) {
  console.log('adding numbers');
  return x + y;
}

const sum = add(5, 4);

console.log('sum', sum);

// const server = http.createServer((req, res) => {
//   console.log('handling web request');
//   res.end('yo');
// });

// server.listen(3000);
