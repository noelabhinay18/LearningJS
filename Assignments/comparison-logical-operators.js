
/*

## Exercise 1: Age Range Validation
*/

let age=25;
if (age >=18 && age <=65)
{
    console.log("✅ Valid age range (18-65)");

} 
else

{
      console.log("❌ Age must be between 18 and 65" );
    
}
      

/*
let age=18;
PS C:\Users\Noel Abhinay\OneDrive\learningjavascript\Assignments> node comparison-logical-operators.js
✅ Valid age range (18-65)

let age=17;
PS C:\Users\Noel Abhinay\OneDrive\learningjavascript\Assignments> node comparison-logical-operators.js
❌ Age must be between 18 and 65

let age=25;
PS C:\Users\Noel Abhinay\OneDrive\learningjavascript\Assignments> node comparison-logical-operators.js
✅ Valid age range (18-65)


let age=65;

PS C:\Users\Noel Abhinay\OneDrive\learningjavascript\Assignments> node comparison-logical-operators.js
✅ Valid age range (18-65)

let age=66;
PS C:\Users\Noel Abhinay\OneDrive\learningjavascript\Assignments> node comparison-logical-operators.js
❌ Age must be between 18 and 65

let age=64;

PS C:\Users\Noel Abhinay\OneDrive\learningjavascript\Assignments> node comparison-logical-operators.js
✅ Valid age range (18-65)

*/

////## Exercise 2: Login Credentials Validato////


let userName ="Arianna";
console.log("userName :" + userName);
let password="Pearl@2020";
console.log("password :" + password);
let email ="abhinay.noel@gmail.com";
console.log("email :" + email);
console.log("Checking Credentials");

if((userName !=="" &&  password !=="") || email !=="")
{
    console.log("✅ Sufficient login credentials");

}
else{

    console.log("❌ Insufficient credentials - provide username+password OR email");
}


///// ## Exercise 3: Test Status Validator /////


let status="SKIPPED";
console.log("Test Status :" + status);
let errorCount=0;
console.log("errorCount :" +errorCount);
console.log("  ");
if((status ==="PASSED" || status === "SKIPPED") && errorCount === 0)
{

    console.log("Validation:")
    console.log("Status is acceptable: true")
    console.log("No errors: true")
    console.log("  ")
    console.log("✅ Test completed successfully")
    
}
else{

    console.log("❌ Test has issues");
}


/////// ## Exercise 4: Response Time Validator ///////


let summary="Response Time Test";
console.log(summary);
console.log("Threshold : 3 seconds")
let responseTime =2.99;
console.log("Actual Time : " +responseTime + " seconds");
console.log("  ");

if(responseTime <3)
{
    
    console.log("✅ Performance test PASSED (response time: X seconds)")
}
else{
    console.log("❌ Performance test FAILED (response time: X seconds, threshold: 3 seconds)")
}
