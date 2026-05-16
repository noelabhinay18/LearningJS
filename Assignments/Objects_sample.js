    
    /*
    let employee ={
employeename:"Noel",
//console.log(employee.employeename);
employeelastname:"Abhinay",
employeeid:78797,
salary:90.00
};

  console.log(employee.employeename);

*/

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
   browser: "Chrome"
};

console.log(testCase);
console.log(testCase.id);
console.log(testCase.priority);
console.log(testCase.status);
console.log(testCase.duration);
console.log(testCase.browser);


*/
/*

console.log("### Part 1: Basic Functions");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");


/*
function generateEmail (firstName, lastName)
{
    return '${firstName.tolowerCase()}.${lastName.tolowerCase()}test.com';
}

let email = generateEmail("John", "Doe");
console.log(email);
*/

/*
console.log("====================================================");
console.log("## Exercise 1: Default Parameters - Test Runner");
console.log("====================================================");
function configureTest(testName, browser="Chrome", timeout=30000, environment="staging")
{
 return {
testName:testName,
browser:browser,
timeout:timeout,
environment:environment
 };
}
///let allDefaults=configureTest;
console.log("--------All Defaults--------");
console.log(configureTest("Login Test"));
console.log("-------Custom Browser------");
console.log(configureTest("Login Test","Mozilla",6000,"Prod"))
console.log(configureTest("Login Test","Mozilla"));
console.log(configureTest("Login Test","Safari"));
configureTest("Edge Case", "");     
configureTest("Edge Case", undefined); 
*/
////**Bonus:** After your four calls, add these two lines and observe the output. Why does `""` not use the default but `undefined` does?
//```javascript
///configureTest("Edge Case", "");        // empty string
///configureTest("Edge Case", undefined); // explicit undefined
///``` //// - dint understand

/*

function validateFormNested(username, password, age) {
    if (username !== "") {
        if (password.length >= 8) {
            if (age >= 18) {
                return "✅ Form is valid";
            } else {
                return "❌ Must be 18 or older";
            }
        } else {
            return "❌ Password must be at least 8 characters";
        }
    } else {
        return "❌ Username is required";
    }
}
*/



function validateFormGuard(username, password, age)
{
    if (username !== "") 
        {
            
            console.log("Enter a User Name");
            ///break;
        } 
        if(password.lenght<=7)
        {
            console.log("Password must contain minimum 8 charcs");
            ///break;
        }
        if (age<=10)
            {
                console.log("Age must be between 15 to 26");
                ///break;
            }
        

}
console.log(validateFormGuard("",6,11));
