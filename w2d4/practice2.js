/*
Assume you have the following data structure for daily donations. Write a function, funderTotals, as shown in the examples below. Your function should work for an expanded database of donations.
First write JSDoc that constitutes a defining table--i.e., params, returns, steps.
You may write this in VSCode and then paste your answer into Sakai.
This must be your own work, do not share or collaborate with anyone else.
*/
const donation1 = { funderId: 1, amount: 100 };
const donation2 = { funderId: 2, amount: 10 };
const donation3 = { funderId: 3, amount: 1 };
const donation4 = { funderId: 2, amount: 5 };
const donation5 = { funderId: 1, amount: 15 };
const day1 = { donations: [donation1, donation2], date: "01/10/2022",};
const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022",};

const dailyRecord = [day1, day2];
/**
*
* @param
* @param
* @returns
* Steps:

*/
function funderTotals(dailyRecord, funderId){
    let total = 0; 
    for(let day of dailyRecord){
        for(let i = 0; i<day.donations.length; i++){
            if(day.donations[i].funderId ===funderId){
                total = total+day.donations[i].amount;
            }
        }

    }return total; 

}

console.log(`expect [{date: "01/10/2022", amount: 100}, {date: "01/11/2022", amount: 15}] : `, funderTotals(dailyRecord, 1) );
console.log(`expect [{date: "01/10/2022", amount: 1}] : `, funderTotals(dailyRecord, 3) );
console.log(`expect [{date: "01/10/2022", amount: 10}, {date: "01/11/2022", amount: 5}] : `, funderTotals(dailyRecord, 2) );

