// Part 1;
//
// 2 == "2";
// Answer: true;
// 2 === 2;
// Answer: true;
// 10 % 3;
// Answer: 1;
// 10 % 3 === 1;
// Answer: true;
// true && false;
// Answer: false;
// false || true;
// true;
// true || false;
// true;
//
// Part 2;
//
//let isLearning = true;
//if(isLearning){
//  console.log("Keep it up!");
//} else {
//  console.log("Pretty sure you are learning....");
//}
// What should the above code console.log?
// Answer: "Keep it up!"
// Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?
// We marked isLearning as true. Because if it is "true" it goes with first, if false it is else...
//
//let firstVariable;
//let secondVariable = "";
//let thirdVariable = 1;
//let secretMessage = "Shh!";

//if(firstVariable){
//  console.log("first");
//} else if(firstVariable || secondVariable){
//  console.log("second");
//} else if(firstVariable || thirdVariable){
//  console.log("third");
//} else {
//  console.log("fourth");
//}
// What should the above code console.log? Why?;
// Answer: third. Because this is first true value;
// What is the value of firstVariable when it is initialized?
// Answer: Depends on value, but positive will be true.
// Is the value of firstVariable a “truthy” value? Why?
// Answer: No. Because no any value.
// Is the value of secondVariable a “truthy” value? Why?
// Answer: No. because it is "" empty value.
// Is the value of thirdVariable a “truthy” value? Why?
// Answer: Yes. Because it is positive.
//
// Part 3;
//
//alert("It's working");
let random = Math.random();
console.log(`Random value = ${random}`);
random > 0.5 ? console.log("Over 0.5") : console.log("Under 0.5");
//
// What is a falsey value? List all the falsey values in JavaScript.
// Answer: "false", "undefine", "NaN", "", "0".