/* eslint-disable new-cap */

const str = 'hello';
const emptyStr = '';
const number = 42;
const bool = true;
const obj = {};
const date = new Date();

function testCasting(Caster) {
  console.log('***', Caster.name);
  console.log('str', Caster(str));
  console.log('emptyStr', Caster(emptyStr));
  console.log('number', Caster(number));
  console.log('bool', Caster(bool));
  console.log('obj', Caster(obj));
  console.log('date', Caster(date));
}

testCasting(String);
testCasting(Number);
testCasting(Boolean);
testCasting(Date);

console.log(Date.parse(str));
