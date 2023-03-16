
function bar(arg1, arg2, arg3, arg4) { //COMPLETE IMPLEMENTATION OF THIS FUNCTION

    if (arg1 == true) {
        return arg3(arg2);

    } else {
        return arg4(arg2);

    }
}


function foo2() {
    console.log(bar(true, 1, fn1, fn2)); //101 
    console.log(bar(false, 2, fn1, fn2)); //20 
    function fn1(num) {
        return num + 100
    }
    function fn2(num) {
        return num * 10;
    }
}

//================================

const n = "623 324 4320";
const na = n.split(" ");
console.log(na);
na.sort((a, b) => comare(Number(a), Number(b)));
console.log(na);

const rs = na.join(" ");
console.log(rs);

function comare(a, b) {
    if (a > b) {
        return 1;
    } if (a == b) {
        return 0;
    } else {
        return -1;
    }
}


//Sort according to forth digit. 
function comareLast(a, b) {
    a = a[3];
    b = b[3];
    if (a > b) {
        return 1;
    } if (a == b) {
        return 0;
    } else {
        return -1;
    }
}

//====================================================

let bob = [{ fName: "bob", age: 16, ph: "12322" }];
let nob = { fName: "nob", age: 26, ph: "12322" };

function abc() {
    let arr = [];
    for (const element of bob) {
        arr.push(element);
    }
    return arr;
}
console.log(abc());


//=========================================

/*
"use strict";

function foo() {
console.log(this); //
this.y= this.y + 1; //
console.log(this.y);
} 
const abcd = {x: 1, y:100, z:foo};

console.log(abcd.z()); //.


//"use strict";

function fool(){}
console.log(this); 

//this.y=this.y+ 1; //

//console.log(this.y);

const abcde = {x: 1, y:100, z: foo()}; 
//console.log(abcde =0); //,
//==============================
"use strict";

function fooo() { 
    console.log(this); //
    this.x-this.y+ 1; //
    console.log(this.y) 
}

    const abcdef = {x: 1, y: 100, z: fooo()};

    fooo();

*/
//=========================================================

const donation1 = { funderld: 1, amount: 100 };
const donation2 = { funderld: 2, amount: 10 };
const donation3 = { funderld: 3, amount: 1 };
const donation4 = { funderld: 4, amount: 5 };
const donation5 = { funderld: 5, amount: 15 };

const day1 = { donations: [donation1, donation2], date: "01/10/2022", };
const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022", };

const dailyRecord = [day1, day2];

function dailyTotal(day) {
    let amt = 0;
    for (let don of day.donations) {
        amt += don.amount;
    }
    return amt;
}
console.log(dailyTotal(day2));

//reduce

function dailyTotalReduce(donations) {
    let totalDonation = donations.reduce((a, c) => a + c.amount, 0);
    return totalDonation
}

console.log(dailyTotalReduce(day1.donations));
console.log(dailyTotalReduce(day2.donations));

//for Loop

function dailyTotalByFor(dailyRecord){
    let totalD = 0;
    for(let i = 0; i<dailyRecord.length; i++){
        totalD = totalD+ dailyTotal(dailyRecord[i]);
    }
        return totalD;
}
console.log("Total: ", dailyTotalByFor(dailyRecord,n));

/*
function findBigDonations(dailyRecord, amount){
    let theArr = [];
    for(let day of dailyRecord){
        for(let donation of day.donations){
            if(donation.amount> n){
                let date= donation.date;
                let amt = donation.amount;
                theArr.push({day:date, amount:amt})
            }
        }
    }
    return theArr;
}
*/
/*
function totalDonationsReduce(dailyRecord){
    const reducedTotal = dailyRecord.reduce((ac, cur)=>(ac+cur.dailyTotalRecuce(), 0));
    return reducedTotal;         //Since the reducedTotal is array and required output is number
    }

    console.log("last one",totalDonationsReduce( dailyRecord));
    */
    
    function findBigDonations(dailyRecord, maxAmount) {
        const bigDonations = [];
        for (let i = 0; i < dailyRecord.length; i++) {
          const donations = dailyRecord[i].donations;
          
          for (let j = 0; j < donations.length; j++) {
            const donation = donations[j];
            if (donation.amount > maxAmount) {
                bigDonations.push({date: dailyRecord[i].date, amount: donation.amount});
            }
        }
    }
    return bigDonations;
}
        
      
      
    console.log(findBigDonations(dailyRecord, 0));


    function totalDonationsReduce(dailyRecord) {
        return dailyRecord.reduce((acc, curr) => {
          const donations = curr.donations;
          const total = curr.donations.reduce((sum, donation) => {
            return sum + donation.amount;
          }, 0);
          return acc + total;
        }, 0);
      }