const scores= [10,20,30,40,50];
/**
 * 
 * @param {Number} scores is the scores in array.
 * @returns {Number} returns averagre.
 */
function findAverage(scores){
    let sum =0;
    for(let i = 0; i<scores.length; i++){
        sum = sum+scores[i];
    }
    return sum/scores.length;
}
const average = findAverage(scores);
console.log("Average is: "+ average);


//Creating array no. 2 
const nums = [1,2,3,4,5,6,7,8,9];
const averageOfNums = findAverage(nums);