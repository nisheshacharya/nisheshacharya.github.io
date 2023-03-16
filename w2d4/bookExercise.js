/*Write the function camelize(str) that changes dash-separated words like “my-short-string” 
into camel-cased “myShortString”. */

/**
 * 
 * @param str {String} is any string.
 * @returns {String} is string in cammelcase.
 */
function camalize(str) {
    let newAr = str.split("-");
    let st = newAr[0];

    for (let i = 1; i < newAr.length; i++) {
        st = st + capitalizeFirstLetter(newAr[i]);
    }
    return st;
}
/**
 * 
 * @param {String} string any string/
 * @returns {String} first letter capitalized.
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/*--------------------------------------------------------------------------
Write a function filterRange(arr, a, b) that gets an array arr, looks for 
elements with values higher or equal to a and lower or equal to b and 
return a result as an array. The function should not modify the array. 
It should return the new array.
*/
/**
 * 
 * @param {Array} arr is array.
 * @param {Number} a  is a number.
 * @param {Number} b is a number.
 * @returns {Array} is resulting array.
 */
function filterRange(arr, a, b){
    return arr.filter(item=>item>a && item<b);
}
console.log(filterRange([1,2,3,4,5,6,7,8],3,6));


/*
Sort in decreasing order
*/
/**
 * 
 * @param {Array} arr  array to sort.
 * @returns {Array} reverse sorted array.
 */
function reverseSort(arr){
    return arr.sort().reverse();
}


/*
You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and
 fullName, where fullName is generated from name and surname.
*/

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user=>({
    fullName:`${user.name} ${user.surname}`,
    number: user.id
}));

console.log(usersMapped);

/*============================================================
Write the function sortByAge(users) that gets an array of objects 
with the age property and sorts them by age.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
*/
function sortByAge(arr){
    return arr.sort((a, b)=>a.age-b.age);
}



let joh = { name: "John", age: 25 };
let pet = { name: "Pete", age: 30 };
let mar = { name: "Mary", age: 28 };

let arrrr = [ pet, joh, mar ];

(sortByAge(arrrr));
console.log(arrrr)


