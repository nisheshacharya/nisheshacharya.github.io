

"use strict";

function scotland(){

let aberdeen = { 
    origin: true, 
    expression: function (){ 
        console.log(this);
    }
};

let innerFn = aberdeen.expression;
innerFn();
aberdeen.expression();
}
scotland();

"use strict";

let timerId = setTimeout(() => console.log("never happens"), 1000);
console.log(timerId); // timer identifier

clearTimeout(timerId);
console.log(timerId); // same identifier (doesn't become null after canceling)