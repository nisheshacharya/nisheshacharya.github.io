/**
 * 
 * @param {Number} number Input type is number.
 * @returns {undefined}
 */
export const getSum = function (number){
    let sum = 0;
    let product = 1;
    while(number%10!=0){
        sum = sum + (number%10);
        number = Math.floor(number/10);
    }return sum;
}
/** @param {Number} number Input type is number.
* @returns {undefined}
*/
export const getProduct = function (number){
    let sum = 0;
    let product = 1;
    while(number%10!=0){
        sum = sum + (number%10);
        product = product*(number%10);
        number = Math.floor(number/10);
    }

    return product;
}
exports.getProduct;
exports.getSum;