/*
Top Salary

et salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
*/
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}
/**
 * 
 * @param {Object} salaries is object object.
 * @returns {String} is name. 
 */
function topSalary(salaries) {

    let topSalary = 0;
    let topName = null;

    for (let [name, salary] of Object.entries(salaries)) {
        if (topSalary < salary) {
            topSalary = salary;
            topName = name;
        }
    }

    return topName;
}

