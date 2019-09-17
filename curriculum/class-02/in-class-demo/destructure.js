
const person = {
  name: 'Chris',
  color: 'blue',
  favoriteNumber: 11
};

const { name, color, favoriteNumber } = person;
console.log(name, color, favoriteNumber);

const array = [42, 3];
const [one, two] = array;
const obj = { one, two };

console.log(obj);
