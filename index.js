const {generateRandomNumber, celciusToFahrenheit} = require('./utils');

console.log(`Random number: ${generateRandomNumber()}`);

console.log(`Fahrenheit : ${celciusToFahrenheit(Math.random() * 100)}`);