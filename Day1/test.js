function addMat(arr, arry){
    let res = []; 
    for (let i = 0; i<arr.length; i++){
        let insideAr = [];
        for (let j = 0; j<arr.length; j++){
            insideAr.push((arr[i][j])+arry[i][j]);
        }

        res.push(insideAr);
    }
    return res;
}

const fname = function() {return "something";}

function lname() {
    return "Acharya";
}

const fname2 = lname;

console.log(lname());
console.log(fname2());


