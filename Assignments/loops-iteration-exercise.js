/*

let design="=============================";
console.log(design);
let profile="Login Module Test Suite"
console.log(profile);
design="=============================";
console.log(design);
let testCases =["1.Login with valid credentials","2.Login with invalid password","3.Login with empty username","4.Logout functionality","5.Remember me checkbox"]
for (let i = 0; i < testCases.length; i++) 
    {
  console.log(testCases[i]);
  
}

console.log("   ");
console.log("Total Cases : " + testCases.length);
console.log("   ");

*/


/*
let design="=============================";
console.log(design);
let profile="Login Module Test Suite"
console.log(profile);
design="=============================";
console.log(design);
let testCases =["Login with valid credentials","Login with invalid password","Login with empty username","Logout functionality","Remember me checkbox"]
let number = 1;
for (let i = 0; i < testCases.length; i++) {
    console.log((i + 1) + ". " + testCases[i]);
}

console.log("   ");
console.log("Total Cases : " + testCases.length);
console.log("   ");

*/

/*  ------below is incomplete---------------------

let design="=============================";
console.log(design);
let profile="## Exercise 2: Count Test Results"
console.log(profile);
design="=============================";
console.log(design);

let testResults=["PASSED", "PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED", "FAILED", "PASSED"]
console.log(testResults);
for (let i = 0; i < testResults.length; i++) {
  console.log(testResults[i]);
}
console.log("   ");
console.log("Total Cases : ",testResults.length);
console.log("Total Passed : ",testResults[i]= "PASSED" );

*/

/*

let testScores=[85, 92, 78, 95, 88, 73, 90, 87];
let total =0;
///console.log(testScores);
for (let i = 0; i < testScores.length; i++) {
    total += testScores[i];
    ///console.log("Score" + (i+1) + ":" + testScores[i] + "(running total: " + total + ")",
    


}
console.log("Total  : " , total)
console.log("Average : ",` ${total/testScores.length}`);


*/

/*
let design="=============================";
console.log(design);
let profile="## Highest Score"
console.log(profile);
design="=============================";
console.log(design);
let testScores=[85, 92, 78, 95, 88, 73, 90, 87];
let highest = testScores[0];  // Start with first score
for (let i = 1; i < testScores.length; i++) {
    if (testScores[i] > highest) {
        highest = testScores[i];
    }
}
console.log("Highest value :" ,highest);
*/

/*
let design="=============================";
console.log(design);
let profile="## Lowest Score"
console.log(profile);
design="=============================";
console.log(design);
let testScores=[85, 92, 78, 95, 88, 73, 90, 87];
let lowest = testScores[0];
for (let i = 1; i < testScores.length; i++) {
    if (testScores[i] < lowest) {
        lowest = testScores[i];
    }
}
console.log("Lowest value :" ,lowest);

*/
/*

let design="=============================";
console.log(design);
let profile="## Test Score Analysis"
console.log(profile);
design="=============================";
console.log(design);
let testScores=[85, 92, 78, 95, 88, 73, 90, 87];
let highest = testScores[0];
let lowest = testScores[0];
let total =0;  // Start with first score
for (let i = 0; i < testScores.length; i++) {
    total += testScores[i];
}
for (let i = 1; i < testScores.length; i++) {
    if (testScores[i] > highest) {
        highest = testScores[i];
    }
}
for (let i = 1; i < testScores.length; i++) {
    if (testScores[i] < lowest) {
        lowest = testScores[i];
    }
}
console.log("Scores:" ,testScores)
console.log("Total  : ", total);
console.log("Highest value :",highest);
console.log("Lowest value :",lowest);
console.log("Average : ",` ${total/testScores.length}`);
console.log("    ");
*/
/*

let design="=============================";
console.log(design);
let profile="Test Execution Report"
console.log(profile);
design="=============================";
console.log(design);

  let testNames= ["Login", "Logout", "Search", "Checkout", "Payment", "Profile"]
   let testResults =  ["PASSED", "FAILED", "PASSED", "FAILED", "PASSED", "FAILED"]
   let failureCount=0;

  console.log("All Tests:");
for (let i=0;i<testNames.length;i++)
   {
console.log(i+1,testNames[i],":",testResults[i]);

if (testResults[i] === "FAILED") 
{
        failureCount++;
}
   
console.log("\nFailed Tests:");
for (let i = 0; i < testNames.length; i++) {
    if (testResults[i] === "FAILED") {
       console.log(`  - ${testNames[i]}`);
}
   }  
   }
     
console.log(`\nTotal Failures: ${failureCount}`);

*/


let testNames = ["Login Test", "Logout Test", "Search Test", "Checkout Test", "Payment Test", "Profile Test"];
let testResults = ["PASSED", "FAILED", "SKIPPED", "NO RUN", "DEFFERED", "REJECTED"];
let testDurations=[1.0,2.5,1.5,1.8,2.6,2.4,0.3];
let Failedcount = 0;
let Passedcount = 0;
let Skippedcount = 0;
let i = 0;
let total =0;
console.log("Three parallel arrays");
console.log("============================");

console.log("\nTest Details:");
console.log("   ");
for (let i = 0; i < testNames.length; i++) {
    ///let statusIcon = testResults[i] === "PASSED" ? "✓" : "✗";
    console.log((`  ${i + 1}. ${testNames[i]}:`));
    console.log(("Result:" + ` ${testResults[i]}`));
        console.log(("Test Duration: " + `${testDurations[i]}`));
        console.log("   ");

    }
console.log("Summary Statistics:");
console.log("======================");
console.log("Total tests: " ,testNames.length );

for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "PASSED") {
        Passedcount++;

    }
    if  (testResults[i] === "FAILED") {
        Failedcount++;
    
}
if (testResults[i] === "SKIPPED") {
        Skippedcount++;
}
///console.log("Passed count : " +testResults);
   

for (let i = 0; i < testNames.length; i++) {
    if (testResults[i] === "PASSED") {
       
    
}
   }  
}

for (let i = 0; i < testDurations.length; i++) {
    total += testDurations[i];
}
  
console.log(`Total passed: ${Passedcount},(${Passedcount/testResults.length})`);
   console.log(`Total failed: ${Failedcount},(${Failedcount/testResults.length})`);
   console.log(`Total skipped: ${Skippedcount},(${Skippedcount/testResults.length})`);
   console.log("\nDuration :");
   console.log("Total  : ", total);
   console.log("Average :",`${total/testDurations.length}`);
   console.log("\nFailed Tests:");
console.log(`  - ${testNames[i]}`);
console.log("    "); 
console.log("Overall Status: ⚠️  NEEDS ATTENTION");