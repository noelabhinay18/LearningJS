/*

console.log("Test Case Details");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

let testCase=

{

id: "TC-001",
    name: "Login with valid credentials",
    priority: "High",
    status: "Passed",
   duration: 2.5,
   browser: "Chrome",
   tester : "Joe"
};

///console.log(testCase);
///console.log(testCase.id);
console.log("id : "+ testCase.id);
console.log("name : "+ testCase.name);
console.log("priority : "+ testCase.priority);
console.log("status : "+ testCase.status);
console.log("duration : "+ testCase.duration);
console.log("browser : "+ testCase.browser);
console.log("   ");
console.log("Adding tester...");
console.log("Changing status...");

let UpdatedtestCase=

{

id: "TC-001",
    name: "Login with valid credentials",
    priority: "High",
    status: "Failed",
   duration: 2.5,
   browser: "Chrome",
   tester : "Joe"
};
console.log(UpdatedtestCase);

*/


///## Exercise 2: Test User Objects

/*


console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("## Exercise 2: Test User Objects");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");



let User1=

{    Username: "Arianna Nelcy",
    password: "Pearl@2020",
    email: "Arianna.necly@gmail.com",
   role: "Admin",

};

console.log("   ");
console.log("User1 :");
console.log("   ");
console.log("Username: " + User1.Username);
console.log("password: " + User1.password);
console.log("email: " + User1.email);
console.log("role: " + User1.role);
console.log("   ");


let User2=

{    Username: "Adrian Wilbert",
    password: "Adu@2020",
    email: "Adrianwilbert@gmail.com",
   role: "Admin",

};

console.log("User2 :");
console.log("   ");
console.log("Username: " + User2.Username);
console.log("password: " + User2.password);
console.log("email: " + User2.email);
console.log("role: " + User2.role);
console.log("   ");

let User3=

{    Username: " Noel Abhinay ",
    password: "abhinay@2020",
    email: "Abhinay.noel@gmail.com",
   role: "User",

};


console.log("User3 :");
console.log("   ");
console.log("Username: " + User3.Username);
console.log("password: " + User3.password);
console.log("email: " + User3.email);
console.log("role: " + User3.role);
console.log("   ");


let testUsers = [User1,User2,User3];
let AdminCount=0;
let userCount=0;

console.log(testUsers);
console.log("  ");
console.log("Summary.....");
console.log("Total Users :" + testUsers.length);

for (let i = 0; i < testUsers.length; i++) 
    {
    if (testUsers[i].role=== "Admin") {
        AdminCount++;

    }
    else{

        userCount++;
    }
    }

    console.log(AdminCount);
    console.log(userCount);

console.log("User3 :");
console.log("   ");
console.log("Username: " + User3.Username);
console.log("password: " + User3.password);
console.log("email: " + User3.email);
console.log("role: " + User3.role);
console.log("   ");


*/

/*

2. Store all 3 users in an array called `testUsers`

3. Loop through the array and print each user's details -- dint understand(for loop)

4. Count how many users have role "admin" vs "user ---- let admincount=0; for loop;

## Exercise 3: Test Results Array - same as above 
*/

/*

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("## Exercise 3: Test Results Array");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");




let Login=

{    testName : "Login Test",
    result : "PASSED",
     duration : 1,
}
 
console.log("1.Login Test");
console.log("  ");
console.log("testName: " + Login.testName);
console.log("result: " + Login.result);
console.log("duration: " + Login.duration);
console.log("  ");

let Logout=

{    testName : "Logout Test",
    result : "PASSED",
    duration : 1.5,
}

console.log("2.Logout Test");
console.log(" ");
console.log("testName: " + Logout.testName);
console.log("result: " + Logout.result);
console.log("duration: " + Logout.duration);
console.log("  ");

let Search=

{    testName : "Search Test",
    result : "FAILED",
    duration : 2.0,
}

console.log("3.Search Test");
console.log(" ");
console.log("testName: " + Search.testName);
console.log("result: " + Search.result);
console.log("duration: " + Search.duration);
console.log("  ");


let Checkout=

{    testName : "Checkout Test",
    result : "SKIPPED",
    duration : 3.0,
}

console.log("4.Checkout Test");
console.log(" ");
console.log("testName: " + Checkout.testName);
console.log("result: " + Checkout.result);
console.log("duration: " + Checkout.duration);
console.log("  ");


let Payment=

{    testName : "Checkout Test",
     result : "SKIPPED",
    duration :0.5,
}

console.log("5.Checkout Test");
console.log(" ");
console.log("testName: " + Payment.testName);
console.log("result: " + Payment.result);
console.log("duration: " + Payment.duration);
console.log("  ");

let testResults = [Login, Logout,Search, Checkout, Payment];
let PassedCount =0;
let FailedCount=0;
let SkippedCount =0;

console.log("  ");
console.log("Summary.....");
console.log("   ");
console.log("Total Users :" + testResults.length);

for (let i = 0; i < testResults.length; i++) 
    {
    if (testResults[i].result==="PASSED")
         {
        PassedCount++;
    }
else if (testResults[i].result==="FAILED")
         {
        FailedCount++;
         }

    else{

        SkippedCount++;
    }
}
let total =0;
for (let i = 0; i < testResults.length; i++) {
    total += testResults[i].duration;
}

console.log("Total Passed :" +PassedCount,"(",PassedCount/testResults.length*100,"%",")");
console.log("Total Failed :" +FailedCount, "(",FailedCount/testResults.length*100,"%",")");
console.log("Total Skipped :" +SkippedCount, "(",SkippedCount/testResults.length*100,"%",")");
console.log("  ");
console.log("Total Duration :" +total);
console.log("Average Duration :" +total/testResults.length);
*/

/*

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("## Exercise 4: Object Methods and 'this' Keyword");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");


let testRunner=

{      
name: "Login Suite",
   totalTests: 5,
    passedTests: 0,
   failedTests: 0,
 start () 
 {
    console.log("Running test suite: " + this.name);
    console.log("Total tests: " + this.totalTests);
 },
pass () 
 {
    ///console.log("Running test suite: " + this.name);
    this.passedTests++;
    console.log("Total Passed: " + this.passedTests);
 },
fail()
{
    console.log("Total Failed: " + this.failedTests); 
},
 getReport()
 {
console.log("Summary: " , testRunner); 
 }

}
 testRunner.start();
 testRunner.pass();
 testRunner.fail();
 testRunner.getReport();

*/


/*
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("## Exercise 5: Deleting Properties");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");


let testData = {

    username: "testuser@example.com",
    password: "Test@123",
   sessionToken: "abc123xyz",
    firstName: "John",
   lastName: "Doe",
}
console.log(testData),
console.log("  ")

let testData1 = {

    username: "testuser@example.com",
    password: "Test@123",
   sessionToken: "abc123xyz",
    firstName: "John",
   lastName: "Doe",
}

delete testData1.password
delete testData1.sessionToken

console.log(testData1),
console.log("  "),
console.log("After cleanup"),
console.log(testData1);
console.log("password" in testData1);
console.log("username" in testData1);
console.log(" ");

console.log("✓ Sensitive data removed successfully!");

*/

/***## Exercise 6: Complete Test Tracker */

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("## Exercise 6: Complete Test Tracke");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

let testTracker = {
   suiteName: "Login Module",
    environment: "Staging",
    browser: "Chrome"
}


console.log("Suite Information:");
console.log("  ")
console.log("Name :" + testTracker.suiteName);
console.log("Environment :" +testTracker.environment);
console.log("browser :" + testTracker.browser);
    
let Login=

{    testName : "Login Test",
    result : "PASSED",
     duration : 1,
}
 
console.log("1.Login Test");
console.log("  ");
console.log("testName: " + Login.testName);
console.log("result: " + Login.result);
console.log("duration: " + Login.duration);
console.log("  ");

let Logout=

{    testName : "Logout Test",
    result : "PASSED",
    duration : 1.5,
}

console.log("2.Logout Test");
console.log(" ");
console.log("testName: " + Logout.testName);
console.log("result: " + Logout.result);
console.log("duration: " + Logout.duration);
console.log("  ");

let Search=

{    testName : "Search Test",
    result : "FAILED",
    duration : 2.0,
}

console.log("3.Search Test");
console.log(" ");
console.log("testName: " + Search.testName);
console.log("result: " + Search.result);
console.log("duration: " + Search.duration);
console.log("  ");


let Checkout=

{    testName : "Checkout Test",
    result : "SKIPPED",
    duration : 3.0,
}

console.log("4.Checkout Test");
console.log(" ");
console.log("testName: " + Checkout.testName);
console.log("result: " + Checkout.result);
console.log("duration: " + Checkout.duration);
console.log("  ");


let Payment=

{    testName : "Checkout Test",
     result : "SKIPPED",
    duration :0.5,
}

console.log("5.Checkout Test");
console.log(" ");
console.log("testName: " + Payment.testName);
console.log("result: " + Payment.result);
console.log("duration: " + Payment.duration);
console.log("  ");

let testResults = [Login, Logout,Search, Checkout, Payment];
let PassedCount =0;
let FailedCount=0;
let SkippedCount =0;

console.log("  ");
console.log("Summary.....");
console.log("   ");
console.log("Total Users :" + testResults.length);

for (let i=0;i<testResults.length;i++)
{
    if(testResults[i].result==="PASSED")
    {
    PassedCount++;

}
else if(testResults[i].result==="FAILED")
    {
     FailedCount++; 
}
else{
    SkippedCount;;
}
}
console.log("Total Passed :" +PassedCount);
console.log("Total Failed :" +FailedCount);

let total =0;
for (let i=0;i<testResults.length;i++)
    {
        total +=testResults[i].duration;
    } 
    console.log("Total Duartion:" +total);
    console.log("Average Duration :" + total/testResults.length);