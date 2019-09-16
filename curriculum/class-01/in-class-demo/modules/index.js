const http = require('http');
const greeting = require('./lib/greeting');
const hello = greeting[0];

console.log('javascript running in node.js');
console.log(hello('simple'));
console.log(greeting.goodbye('Pooh'));
