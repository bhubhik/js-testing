const { forEach } = require('./index');

let sum = 0;
forEach([1, 2, 3], (value) => {
  sum += value;
});

console.log(`Expected = 6, recieved = ${sum}`);

sum !== 6
  ? console.log('forEach function not working')
  : console.log('Foreach function working');
