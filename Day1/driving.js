const prompt = require("prompt-sync")();
const age = prompt ("Enter age: ");
if(age<=0 && age>=140){
    console.log("Enter a valid age");
}else if(age<=16){
    console.log("You cannot drive.");
}else if(age<=18){
    console.log("You can drive under supervision.");
}else {
    console.log("You can drive.");
}