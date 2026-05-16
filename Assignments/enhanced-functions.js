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