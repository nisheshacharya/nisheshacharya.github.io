const prompt = require("prompt-sync")();
//console.log(6.555.toFixed(2));         // 6.55
//console.log(6.355.toFixed(2));         // 6.36

function takeInput(num){
    let n=0;
    do{
    let n = prompt("Enter a number");
    }
    while(!isFinite){
        if(n===null || n===""){
            return null;
        }
    }
    return n;
}
takeInput();

let myInt = 555;
myInt = false;

