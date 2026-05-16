
/*
## Exercise 1: Convert to Arrow Functions

Convert the following traditional functions to arrow functions:

```javascript
// Exercise 1a: Convert this function
function greet(name) {
    return "Hello, " + name;
*/
/*
const greet = (name) => "Hello" + name;

console.log(greet("Pearl"));
*/

/*
// Exercise 1b: Convert this function
function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
    */
  /*
   const isAdult = (age) => age >= 18;
   console.log(isAdult(10));
   console.log(isAdult(19));

   */
/*
   // Exercise 1c: Convert this function
function calculateTotal(price, quantity) {
    let total = price * quantity;
    let tax = total * 0.1;
    return total + tax;
    */
/*
    const calculateTotal = (price, quantity) => {
        let total = price * quantity;
    let tax = total * 0.1;
    return total + tax;
    }
    console.log(calculateTotal(100,3));
    */

    /*## Exercise 5: Rest Parameters - Validation Function*/
    /*

const validateAll = (...conditions)=>conditions.every(cond=>cond);

let bankaccount={
name : "ICICI bank",
branch : "Somajiguda",
email : "icici@gmail.com",
pincode : 8106935803,
branchopen : true
};

let Bvalidation = validateAll(
  bankaccount.name.length >= 7,
  bankaccount.branch.length >= 5,
  bankaccount.email.includes("@"),
  bankaccount.pincode >= 7,
  bankaccount.branchopen === true

);

console.log(Bvalidation);

let Bvalidation1 = validateAll(
  bankaccount.name.length >= 50,
  bankaccount.branch.length >= 100,
  bankaccount.email.includes(","),
  bankaccount.pincode <=4 ,
  bankaccount.branchopen === false
)
console.log(Bvalidation1);

let Bvalidation2 = validateAll();
console.log(Bvalidation2); 

*/
/* ## Exercise 2: Array Methods with Arrow Functions */

console.log("## Exercise 2: Array Methods with Arrow Functions");

let testResults = [
    { name: "Login Test", score: 85, status: "PASSED" },
    { name: "Logout Test", score: 72, status: "FAILED" },
    { name: "Search Test", score: 95, status: "PASSED" },
    { name: "Checkout Test", score: 88, status: "PASSED" },
    { name: "Payment Test", score: 65, status: "FAILED" }]
/*
 const passed =(test) => test.status==="PASSED" 
 let passedTests=testResults.filter(passed);
console.log(passedTests);
*.
/* 2b: Get array of just the test names
let testNames = // YOUR CODE HERE
*/
 /*We need to use map method to get the test names */
/*
 let testNames= testResults.map(test=> test.score);
 let testNames1 = testResults.map(test => test.status);
 let testNames2 = testResults.map(test => test.name);
 console.log(testNames,testNames1,testNames2);
 */


// 2c: Get array of scores that are above 80
///let highScores = // YOUR CODE HERE


 let highScores= testResults
 .filter(test=>test.score>80)
 .map(test=>test.score)
 console.log(highScores);

 ////// 2d: Find the first failed test
////let firstFailed = // YOUR CODE HERE///

//// FIND method is used to find the first or last "failed/passed" data.

let firstFailed = testResults.find((test) => test.status==="FAILED" )
console.log(firstFailed);

// 2e: Check if ALL tests passed (every)
///let allPassed = // YOUR CODE HERE
////Here every method is been used/////
let allPassed = testResults.every((test) => test.status==="PASSED" )
console.log(allPassed);

// 2f: Check if ANY test failed (some)
////let anyFailed = // YOUR CODE HERE

/////////// here some method is used to check the function

let anyFailed = testResults.some((test) => test.status==="FAILED" )
console.log(anyFailed);