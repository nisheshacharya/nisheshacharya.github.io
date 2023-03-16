//Filter in between
/**
 * 
 * @param {Number} a is a number. 
 * @param {Number} b is a number.
 * @returns  {Number} numbers.
 */
export function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7,8,9];
  alert( arr.filter(inBetween(3, 6)) );

  //Array in between

  export function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
  }
  
 //Sort by field 
 export function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
  }



  //Army 

 export function makeArmy() {

    let shooters = [];
  
    for(let i = 0; i < 10; i++) {
      let shooter = function() { 
        alert( i ); 
      };
      shooters.push(shooter);
    }
  
    return shooters;
  }
  
  let army = makeArmy();

