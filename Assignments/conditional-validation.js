
/*

let design="=============================";
console.log(design);
let profile="Exercise 1: Email Validation"
console.log(profile);
design="=============================";
console.log(design);
let email ="testuser@examplecom"
if(email.includes("@") && email.includes("."))
   {
console.log("✅ Valid email format");
 }
 else
 {
    console.log("❌ Invalid email format");
 }

 PS C:\Users\Noel Abhinay\OneDrive\learningjavascript\Assignments> node conditional-validation.js
=============================
Exercise 1: Email Validation
=============================
❌ Invalid email format
PS C:\Users\Noel Abhinay\OneDrive\learningjavascript\Assignments> 

*/


/*
let design="=============================";
console.log(design);
let profile="## Exercise 2: Test Result Categorizer"
console.log(profile);
design="=============================";
console.log(design);
let testResult =""
if (testResult==="PASSED")
{
   console.log("✓ Test passed successfully");
}
else if(testResult==="FAILED")
{
console.log("✗ Test failed - check logs");
}
else if(testResult==="SKIPPED")
{
 console.log("⊘ Test skipped");  
}
else
{
console.log("? Unknown test status");
}

*/
/*

let design="=============================";
console.log(design);
let profile="## Exercise 3: Password Strength Checker"
console.log(profile);
design="=============================";
console.log(design);
let password="tes@9890809800"
console.log("Password: " + password);
console.log("Length: " + password.length + " characters\n");
if (password.length < 6) {
  console.log("Weak password - too short");
} else if (password.length < 10) {
  console.log("Medium password strength");
} else if (password.length > 10)
   {
  console.log("Strong password");
}

*/

/*
let design="=============================";
console.log(design);
let profile="## Exercise 4: Test Score Grading"
console.log(profile);
design="=============================";
console.log(design);
let variable=59;
console.log("Variable : " + variable);
if (variable > 90 ){
console.log("Grade: A (Excellent)");
}
else if (variable >= 80 && variable <= 89){
console.log("Grade: B (Good)");
}
else if (variable >= 70 && variable <= 79){
  console.log("Grade: C (Average)"); 
}
else if (variable >= 60 && variable <= 69){
console.log("Grade: D (Pass)");
}
else{
console.log("Grade: F (Fail)");
}

*/

/*
let design="=============================";
console.log(design);
let profile="## Exercise 6: Switch — Basic Value Matching"
console.log(profile);
design="=============================";
console.log(design);
let testResult ="UKNOWN";
switch (testResult)
{
case ("PASSED"):
console.log("Test Result : " + "✓ Test passed successfully");
break;
case("FAILED"):
console.log("Test Result : " + "✗ Test failed - check logs");
break;
case("SKIPPED"):
 console.log("Test Result : " + "⊘ Test skipped");  
break;
case("PENDING"):
 console.log("Test Result : " + "⏳ Test pending - not yet run"); 
 break;
default:
console.log("Test Result : " +  "? Unknown test status");
}
*/

/*
let design="=============================";
console.log(design);
let profile="## Exercise 7: Switch — Grouping Cases (Multiple Cases, One Outcome)"
console.log(profile);
design="=============================";
let statusCode = 418;

switch (statusCode) {
    case 200:
        console.log("✅ 200 OK — request successful");
        break;
    case 201:
      console.log("✅ 201 Created — resource created");
        break;
    case 400:
    case 401:
    case 403:
      console.log("❌ Client error — check your request");
         break;
    case 404:
        console.log("❌ 404 Not Found — endpoint does not exist");
        break;
    case 500:
    case 502:
    case 503:
        console.log("🔥 Server error — backend issue");
        break;
    default:
        console.log("? Unknown status code: " + statusCode);
}
        */

/*
let design="=============================";
console.log(design);
let profile="### 8a: Switch on a computed value (grade buckets)"
console.log(profile);
design="=============================";
console.log(design);
let score = 55;
switch (Math.floor(score / 10)) {
    case 10:
    case 9:
        console.log("Grade: A (Excellent)");
        break;
    case 8:
        console.log("Grade: B (Good)");
        break;
    case 7:
        console.log("Grade: C (Average)");
        break;
    case 6:
        console.log("Grade: D (Pass)");
        break;
    default:
        console.log("Grade: F (Fail)");
}
        */

/*

let design="=============================";
console.log(design);
let profile="### 8b: Switch on `true` — range matching with expressions"
console.log(profile);
design="=============================";
console.log(design);
let duration = 0.5; 
switch(true)
{
case duration < 1:
        console.log("⚡ Very fast test");
        break;
    case duration < 3:
        console.log("✅ Fast test");
        break;
    case duration < 6:
        console.log("⚠️ Acceptable — consider optimising");
        break;
    default:
        console.log("🐢 Slow test — needs attention");
}


*/

/*

let design="=============================";
console.log(design);
let profile="### 8c: Tricky questions — predict the output before running"
console.log(profile);
design="=============================";
console.log(design);
let priority = "High";

switch (priority) {
    case "High":
        console.log("Urgent");
        break;
    case "high":
        console.log("Also urgent");
        break;
}

*/
/*

let design="=============================";
console.log(design);
let profile="### 8c: Tricky questions — predict the output before running"
console.log(profile);
design="=============================";
console.log(design);
let x = 2;
switch (x) {
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    default:
        console.log("other");
}

*/

function validateTestUser(username, password, email) 
{
    console.log("Validating test user data...\n");
if (username!="")
{
   console.log(" User Name :" + validateTestUser);
}

else if (password!="" && password.length>=8)
{
   console.log(" Password :" + validateTestUser)
}
else if (email.includes("@") && email.includes("."))
{

console.log("Email :" + validateTestUser);
}
let result = validateTestUser("testuser", "Test@123", "test@example.com");
console.log(result);
}



// Test it



///