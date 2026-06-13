/*

// 1. Create a Set and add environments
let environments = new Set();
environments.add("staging");
environments.add("production");
environments.add("staging");   // duplicate ignored
environments.add("uat");
environments.add("production"); // duplicate ignored
environments.add("dev");

// 2. Print size (should be 4)
console.log(`Size (with duplicates ignored): ${environments.size}`);

// 3. Check membership
console.log(`Has 'staging': ${environments.has("staging")}`);
console.log(`Has 'qa': ${environments.has("qa")}`);


// 4. Delete values
let deletedDev = environments.delete("dev");
console.log(`delete('dev') returned: ${deletedDev}`);

let deletedQa = environments.delete("qa");
console.log(`delete('qa') returned: ${deletedQa}`);


// 5. Print final Set and size
console.log(`Final environments: ${environments}`);
console.log(`Final size: ${environments.size}`);

*/

/*

let smokeTests      = new Set(["login", "logout", "homepage", "search"]);
let regressionTests = new Set(["login", "search", "checkout", "payment", "profile"]);

// 1. Union (all unique tests)
let fullSuite = new Set([...smokeTests, ...regressionTests]);
console.log(`Full suite (union): ${fullSuite}`);
console.log(`Total unique tests: ${fullSuite.size}\n`);



// 2. Intersection (shared tests)
let sharedTests = new Set([...smokeTests].filter(test => regressionTests.has(test)));
console.log(`Shared tests (intersection): ${sharedTests}`);
console.log(`Tests in both suites: ${sharedTests.size}\n`);

// 3. Clear() practice
let tempCopy = new Set(smokeTests);
console.log(`Before clear: ${tempCopy}`);
tempCopy.clear();
console.log(`After clear:  ${tempCopy}`);

*/

/*
// 1. Create Map with initial entries
let testResults = new Map([
  ["Login Test", "PASSED"],
  ["Logout Test", "FAILED"],
  ["Search Test", "PASSED"]
]);

// 2. Add a fourth entry
testResults.set("Cart Test", "PASSED");

// 3. Print result for "Logout Test"
console.log(`Logout Test result: ${testResults.get("Logout Test")}`);

// 4. Update "Logout Test" to PASSED
testResults.set("Logout Test", "PASSED");
console.log(`After rerun: ${testResults.get("Logout Test")}`);

// 5. Check membership
console.log(`Has 'Payment Test': ${testResults.has("Payment Test")}`);


// 6. Delete entries
let deletedCart = testResults.delete("Cart Test");
console.log(`delete('Cart Test') returned: ${deletedCart}`);

let deletedGhost = testResults.delete("Ghost Test");
console.log(`delete('Ghost Test') returned: ${deletedGhost}`);



// 7. Final size and iteration
console.log(`Final size: ${testResults.size}`);
for (let [testName, result] of testResults) {
  console.log(`${testName} → ${result}`);
}

*/

// Method 1 — constructor with pairs
let httpCodes = new Map([
  [200, "OK"],
  [201, "Created"],
  [404, "Not Found"],
  [500, "Internal Server Error"]
]);

console.log(`404 means: ${httpCodes.get(404)}\n`);

// Method 2 — method chaining
let runConfig = new Map()
  .set("browser", "Chrome")
  .set("timeout", 30000)
  .set("headless", true)
  .set("retries", 3);

console.log(`Run config settings: ${runConfig.size}\n`);

// Method 3 — Object.entries()
let stagingConfig = { 
  baseUrl: "https://staging.example.com", 
  timeout: 60000, 
  headless: false 
};

let stagingMap = new Map(Object.entries(stagingConfig));
console.log(`Staging config Map: ${stagingMap}`);