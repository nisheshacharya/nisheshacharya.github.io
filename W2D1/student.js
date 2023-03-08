const student1={             //is a object
    studentId: "s101",
    quizAns: [1,1,2,4],
};
const student2={                //is a object
    studentId: "s102",
    quizAns:  [2, 1, 2,2],
};

const student3={                //is a object
    studentId: "s103",
    quizAns:  [3, 1, 3,4],
};

//const quizAns = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]];  //Array of answers


let quiz = [student1, student2, student3];                          


const correctAns = [3,1,2,4] //Array of correct answer

/**
 * 
 * @param {Array} quiz  array of students.
 * @param {Array} correctAns array of correct ans.
 * @returns{Arryay} array with student if and score.
 */
function gradeQuiz(quiz, correctAns){

   let newOb={}
    for(let stu of quiz){
        newOb[stu.studentId] =  scoreQuiz(correctAns,stu.quizAns );
    }
    return newOb;

}



/**
 * 
 * @param {Array} quizAns arraya of correct answers
 * @param {Array} stuAns student's answer
 * @returns {Number} score. 
 */
function scoreQuiz(quizAns, stuAns){
    let score = 0;
    for(let i = 0; i<quizAns["length"] ; i++){
        if(quizAns[i]===stuAns[i]){
            score++;
        }
    }
    return score;
}

export function test(){
    const finalObj = gradeQuiz(quiz, correctAns);

  console.log(finalObj);
    }