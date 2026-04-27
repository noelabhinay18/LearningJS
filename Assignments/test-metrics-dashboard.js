/*
let design="=============================";
console.log(design);
let profile="Test Metrics Dashbaord"
console.log(profile);
design="=============================";
console.log(design);
let testSuite="Regression Testing";
console.log("TestSuite : " + testSuite);
let totalTests=50;
console.log("Total Tests :" +totalTests);
let passedTests=50;
console.log("Passed Tests :" +passedTests);
let passrate=10.06;
console.log("Pass Rate :" +passrate);
let Alltestspassed=false;
console.log("All Test Passed :" +Alltestspassed);

*/

/*
**Use these data types:**
- Total tests (number)
- Passed tests (number)
- Failed tests (number)
- Pass rate (number with decimal)
- Test suite name (string)
- All tests passed? (boolean)
*/

let testSuite = "Test Execution Results";
let totalTest = 50;
let passedTests = 25;
let failedTests = 21
let passRate = 50.1;


console.log(testSuite);
console.log("          ");
let failedcount=(totalTest-passedTests);
console.log("failedcount :" +failedcount);

let passedCount=(totalTest-failedTests);
console.log("passedCount :" +passedCount);

let passrate=(passedTests/totalTest)*100;
console.log("passrate :" + passrate + "%");


/*

let isTestPassed = true;
let isActive = true;
let hasErrors = false;
*/