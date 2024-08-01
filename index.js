// const {generateRandomNumber, celciusToFahrenheit} = require('./utils');

// console.log(`Random number: ${generateRandomNumber()}`);

// console.log(`Fahrenheit : ${celciusToFahrenheit(Math.random() * 100)}`);
const { getPosts } = require('./getPost.js');

console.log(getPosts());
