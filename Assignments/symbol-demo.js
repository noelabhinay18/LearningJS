
/*

let A= Symbol("testId");
let B= Symbol("testId");

console.log(A=B);
console.log(typeof A);
console.log(A.description);

Symbol(testId)
symbol
testId


let A= Symbol("testId");
let B= Symbol("testId");

console.log(A==B);
console.log(typeof A);
console.log(A.description);

false
symbol
testId





let A= Symbol("testId");
let B= Symbol("testId");

console.log(A===B);
console.log(typeof A);
console.log(A.description);

false
symbol
testId
*/



let testConfig = new Map();

testConfig.set(1, "First Test");
testConfig.set(2, "Second Test");
testConfig.set(3, "Third Test");
testConfig.set(true, "enabled");
testConfig.set(false, "disabled");

console.log(testConfig);