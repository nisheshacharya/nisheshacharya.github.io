const prompt = require("prompt-sync")();
const tempInCelsius=prompt("Enter value in celsius: ");
const tempInFahrenheit = 9/5 * Number(tempInCelsius ) + 32;
console.log(tempInFahrenheit);