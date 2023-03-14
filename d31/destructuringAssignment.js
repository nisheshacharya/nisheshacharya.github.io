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

function topSalary(salaries) {

    let topSalary = 0;
    let name = null;

    for (let [topName, salary] of Object.entries(salaries)) {
        if (topSalary < salary) {
            topSalary = salary;
            name = topName;
        }
    }

    return name;
}

