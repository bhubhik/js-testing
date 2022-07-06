const { forEach } = require('./index');

let sum = 0;
forEach([1, 2, 3], (value) => {
  sum += value;
});

console.log(`Expected = 6, recieved = ${sum}`);

sum !== 6
  ? console.log('forEach function not working')
  : console.log('Foreach function working');

// For Map fucntion
const { map } = require('./index');

const result = map([2, 4, 3], (value) => {
  return value * 2;
});

result[0] !== 4 || result[1] !== 8 || result[2] !== 6
  ? console.log(`Array should be [4, 8, 6] - recieved [${result}]`)
  : console.log('Array is matching the expected array [4 ,8, 6]');
