/* 
create a function compoundInterest with parameters:
initial amount, annual interest rate and number of years to compound
get monthly interest rate by: annual interest rate /12. 
get number of months by: number of years *12
 Use for loop to calculate interest where: 
 let interest =0;
 amount = initial amount; 
 for(let i = 0; i<= number of months; i++){
 interest = amount* 0.01* monthly interest rate; 
 amount = amount + 0.01*interest; 
 }
 return amount; 
 */
/**
 * 
 * @param {Number} initialAmount amount in the begining. 
 * @param {Number} interestRate Interest rate. 
 * @param {Number} numberOfYears The number of years
 * @returns {Number} returns total balance.
 */
function compoundInterest(initialAmount, interestRate, numberOfYears){
    const monthlyInterestRate = interestRate/12; 
    const numberOfMonths= numberOfYears*12;
    let balanceAmount = initialAmount;
    for(let i = 0; i<numberOfMonths; i++){
        let interest = balanceAmount*(0.01*monthlyInterestRate); 
        balanceAmount = balanceAmount + interest;
    }
    return balanceAmount;
}
console.log("expect 110.47", compoundInterest(100, 10, 1)); 
console.log("expect 16470.09", compoundInterest(10000, 5, 10)); 
export default compoundInterest; 