const numbers = { one: 1, two: 22, three: 333, four: 444 }; 

const pOrder = ["one", "four", "three","two"]; 
//write a for loop to print out the values of the propertyOrder two", ];

for(let i = 0; i<pOrder.length; i++){
    let pName  = pOrder[i];
    let pProp = numbers[pName];
    console.log(pProp);
}



  let student1 = {id: "s101", ans:[1, 1, 2,4]};
  let student2 = {id: "s102", ans:[2, 1, 2,2]};
  let student3 = {id: "s102", ans:[3, 1, 3,4]};

  const students = [student1,student2, student3];
  
  function collectAns(qNo){
    let asnNo = [];
    for(let stu of students){
            asnNo.push(stu.ans[qNo-1]);
        
    }
    return asnNo;
  }
  console.log(collectAns(1));





  //"use strict";
/* eslint-disable */

const manager = {
    name: "John",
    age: 27,
    job: "Software Engineer",
    sayHi: sayHowdy
  };
  const intern= {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern",
    sayHi: sayHowdy
  };
  
  /**
   * @returns {undefined} 
   */
  function sayHowdy() {
     //IMPLEMENT THIS
     console.log("Hello, my name is ", this.name);
  }
  
  
  manager.sayHi(); // Hello, my name is John. I am 27.  My job is Software Engineer.'
  intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'

  console.log(intern.sayHi);
