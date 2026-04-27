/*
console.log("Status before declaration: " + testStatus);
let testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);
*/
/*
PS C:\Users\Noel Abhinay\OneDrive\learningjavascript\assignments> node var-problems.js
Status before declaration: undefined
Status after declaration: PASSED
PS C:\Users\Noel Abhinay\OneDrive\learningjavascript\assignments> 
*/

/*
console.log("Status before declaration: " + testStatus);
let testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);


ReferenceError: Cannot access 'testStatus' before initialization
*/

/*
let testStatus = "PASSED";
console.log("Status before declaration: " + testStatus);
console.log("Status after declaration: " + testStatus);

PS C:\Users\Noel Abhinay\OneDrive\learningjavascript\assignments> node var-problems.js
Status before declaration: PASSED
Status after declaration: PASSED

*/

/*
**Step 2 — `var` leaks out of if-blocks**
*/
/*
if (true) {
    var tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser);
*/

/*
PS C:\Users\Noel Abhinay\OneDrive\learningjavascript\assignments> node var-problems.js
Inside block: admin@test.com
Outside block: admin@test.com

*/

/*
if (true) {
    let tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
/*console.log("Outside block: " + tempUser); */
/*
Node.js v24.15.0
PS C:\Users\Noel Abhinay\OneDrive\learningjavascript\assignments> node var-problems.js
Inside block: admin@test.com
*/

/*
if (true) {
    let tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser); 



ReferenceError: tempUser is not defined

*/


/* **Step 3 — `var` in a for-loop leaks the counter** */

/*

for (var i = 0; i < 3; i++) {
    console.log("Running test step " + i);
}
console.log("After loop, i = " + i); 
PS C:\Users\Noel Abhinay\OneDrive\learningjavascript\assignments> node var-problems.js
Running test step 0
Running test step 1
Running test step 2
After loop, i = 3 */

/*
for (let i = 0; i < 3; i++) {
    console.log("Running test step " + i);
}
console.log("After loop, i = " + i);

ReferenceError: i is not defined
*/
/*
for (let i = 0; i < 3; i++) {
    console.log("Running test step " + i);
}
/* console.log("After loop, i = " + i); */
/*
PS C:\Users\Noel Abhinay\OneDrive\learningjavascript\assignments> node var-problems.js
Running test step 0
Running test step 1
Running test step 2

*/

/* **Step 4 — The fix: always use `let` or `const`** */

/* 1
const testStatus = "PASSED";
console.log("Status before declaration: " + testStatus);

console.log("Status after declaration: " + testStatus);

PS C:\Users\Noel Abhinay\OneDrive\learningjavascript\assignments> node var-problems.js
Status before declaration: PASSED
Status after declaration: PASSED

*/

/*
2.

if (true) {
    const tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser);


ReferenceError: tempUser is not defined

*/

/*

for (let i = 0; i < 3; i++) {
    console.log("Running test step " + i);
}
/*console.log("After loop, i = " + i); */
/* 
TypeError: Assignment to constant variable. */


