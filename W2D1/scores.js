import { scoreExams } from "../Day4/Array.js";

const student1=  {
    studentId: "101",
    qyizAnswer: [1,1,2,4]
};

const student2=  {
    studentId: "102",
    qyizAnswer: [1,1,3,4]
};

const student3=  {
    studentId: "102",
    qyizAnswer: [2,2,3,4]
};

const quiz = [student1, student2, student3];

const correctAns = [1,2,3,4]; 

/**
 * 
 * @param {Array} studentAns answer by students. 
 * @param {Array} correctAns  array of correct answers.
 * @return {Array} array  of scores.
 */
function getScores(studentAns, correctAns){
    const scores = [];
    for(let ans of studentAns){
        scores.push(scoreExams(ans.qyizAnswer, correctAns))
    }
    return scores;

}
console.log(getScores(quiz, correctAns));

