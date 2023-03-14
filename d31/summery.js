//DESTRUCTURINGASSIGNMENTS AND JSON

//Destructuring 
const arr = [1,2,3,4,5];
let [a,b,c,d,e] = arr;

console.log(a);        //1
console.log(b);       //2

let[x,y,,,z] = arr;
console.log(z);
   
//Assigining to object

let president = {};
[president.fName, president.lName] = "Joe Biden".split(" ");
console.log(president);

//Use of rest
const longName = "Prabhakarna Sripalawardhana Atapattu Jayasuriya Laxmansriramkrishna Shivavenkata Rajasekara Sriniwasana Trichipalli Yekya Parampeel Parambatur Chinnaswami Muthuswami Venugopal Iyer";
const [name1, name2,...rest] = longName.split(" ");
console.log("name1: ", name1);
console.log("name2: ", name2);
console.log("rest1:", rest[1]);
console.log("rest2:", rest[2]);
console.log("rest3:", rest[3]);
console.log("rest4:", rest[4]);

//Missing values will give undefined. Does not give error.

let [a1,b1,c1]= [1,2];
console.log("b1: ",b1);
console.log("c1: ",c1);

const [a2, b2, c2] =[1,2,3,4] ;
console.log(c2);

//providing default value

let [price1 = 0.0, quantity = 0] = [20.0,5];
console.log (price1);               //20.0
console.log(quantity);              //undefined (since no value assigned)

[price1 = 0.0, quantity = 0] = [20.0,5];
console.log (price1);               //
console.log(quantity);              // 5 (value is assigned now)


const team = ["Bob","Fred" ,"Jim"];
const [Bob,Fred, Jim] = team; 
console.log(Bob);

//Destructuring objects

const profile = {
    sex: "F",
    age: "19",
    grades: "A"
}
let {sex, age, grades} = profile; 
console.log("sex : ",sex);

let{sex:s, age:ag, grades:g}= profile; 
console.log(s);

//Wrapping with ()

/*
let talab, barsha;
{talab , barsha}={talab: 100000, barsha: 32}; // this throws error as there's no let
console.log(barsha);

let talab, barsha;
let {talab , barsha}={talab: 100000, barsha: 32};  //this throws error as talab can not be accessed because of {}
console.log(barsha);
*/

let talab, barsha;
({talab , barsha}={talab: 100000, barsha: 32}); //wrap with (). too easy!
console.log(barsha);


