// Finding maximum of three numbers.
/**
 * 
 * @param {Number}  firstNum is first number,  
 * @param {Number} secondNum  second number.
 * @param {Number}thirdNum is third number.
 * @returns {Number} largest number.
 */
export function maxOfThree(firstNum, secondNum, thirdNum) {
    let largestNum = firstNum;

    if (secondNum > largestNum) {
        largestNum = secondNum;
    }
    if (thirdNum > largestNum) {
        largestNum = thirdNum;
    }

    return largestNum;
}

//
/**
 * 
 * @param {Array} arr is array of numbers. 
 * @returns {Number} is sum. 
 */
export function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
/**
 * 
 * @param {Array} arr is array of numbers. 
 * @returns {Number} is product. 
 */
export function multiply(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product = product * arr[i];
    }
    return product;
}


//Write a function findLongestWord() that takes 
//an array of words and returns the length of the longest one.  


/**
 * 
 * @param {Array} arr String array.
 * @returns {String} longest word. 
 */
export function findLongestWord(arr) {
    let longestWord = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (longestWord.length < arr[i].length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}
/**
 * 
 * @param {Array} arr any array.
 * @returns {Array} reversed array.
 */
export function reverseArray(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp[i] = arr[arr.length - 1 - i];
    }
    return temp;
}

/**
 * 
 * @param {Array} arr any array. 
 * @returns {Array} reversed array.
 */
export function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[(arr.length - 1) - i];
        arr[(arr.length - 1) - i] = temp;
    }
    return arr;
}

/**
 * 
 * @param {Array} arrayStuAnswers Array of answers from students.
 * @param {Array} arrayCorrectAnswers Array of correct answers. 
 * @returns {Array} returns scores in array form.
 */
export function scoreExams(arrayStuAnswers, arrayCorrectAnswers) {
    let scores = [];
    for (let x = 0; x < arrayStuAnswers.length; x++) {
        scores[x] = 0;
    }
    for (let i = 0; i < arrayStuAnswers.length; i++) {
        for (let j = 0; j < arrayCorrectAnswers.length; j++) {
            if (arrayStuAnswers[i][j] === arrayCorrectAnswers[j]) {
                scores[i]++;
            }
        }
    }
    return scores;
}
/**
 * 
 * @param {Number} rows number of rows.
 * @param {Number} cols number of coloumns.
 * @returns {Array} returns array.
 */
export function generateArray(rows, cols) {
    let arr = [];
    let count = 1;

    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(count++);
        }
        arr.push(row);
    }

    return arr;
}