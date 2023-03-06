/*1. Write a function, double, that takes a number and returns 2 times the number. 
*/
/**
 * 
 * @param {Number} num  is any nuber. 
 * @returns {Number} is double of the num.
 */
export function double(num) {
    return 2 * num;
}

/*2. Write a function times100 that takes a number and returns 100 times the number. 
*/
/** 
*@param {Number} num  is any nuber. 
*@returns {Number} is 100 time of the num.
*/
export function times100(num) {
    return (num*100);
}

/*3. Write a function, myMap, that takes an array and a function and returns 
a new array that has the function applied to each element of the input array.  
Use your myMap function with your double and times100 functions.
 */

/**
@param {Array} arr - The array to be mapped
@param {Function} functionF - The function to be applied to each element of the array
@returns {Array} A new array with the function applied to each element of the input array
*/
export function myMap(arr, funcn) {
    let mapArray = [];
    for (let item of arr) {
        mapArray.push(funcn(item));
    }

    return mapArray;
}

//Using myMap function;
const arr = [1, 2, 3, 4, 5];

//with double
myMap(arr, double);                           //[2,4,6,8,10]

//with times100
myMap(arr, times100);                         // [100,200,300,400,500]



/*4. Demonstrate your myMap function with an anonymous function that triples the input value.  
Write this as an anonymous function expression.  Then write it using an arrow expression.
*/

//Using myMap with anonymous function

const newArr = [1, 1, 2, 2, 3, 3];
const resultArray = myMap(newArr, function (num) {
    return num * 3;
});

const finalResult = myMap(arr, num => num*3);
console.log(finalResult);

