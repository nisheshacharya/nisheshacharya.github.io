const prompt = require("prompt-sync")();
const radius = prompt("Enter the radius of the circle.");
console.log("The volume of circle with radius "+ radius + "is: "+ (3/4)*(3.14*radius*radius*radius))