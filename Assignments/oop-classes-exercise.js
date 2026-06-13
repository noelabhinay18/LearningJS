/*

class TestSuite {
  // Public field
  tests = [];

  // Private field
  #executionCount = 0;

  // Constructor
  constructor(name) {
    this.name = name;
  }

  // Add a test
  addTest(testName) {
    this.tests.push(testName);
    this.#executionCount++;
    console.log(`  Added: ${testName}`);
  }

  // Run the suite
  run() {
    console.log("\nRunning suite...");
    this.tests.forEach((test, index) => {
      console.log(`  Running test ${index + 1}/${this.tests.length}: ${test}`);
    });
  }

  // Get execution count
  getExecutionCount() {
    return this.#executionCount;
  }
}

// Create an instance
console.log("=== EXERCISE 1: ES6 Classes ===\n");

const suite = new TestSuite("Regression Tests");

console.log(`Test Suite: ${suite.name}\n`);
console.log("Adding tests...");
suite.addTest("Login Test");
suite.addTest("Logout Test");
suite.addTest("Search Test");
suite.addTest("Checkout Test");
suite.addTest("Payment Test");

// Run the suite
suite.run();

// Display execution count
console.log(`\nTotal tests executed: ${suite.getExecutionCount()}`);

*/

/*

// === Exercise 2: Inheritance ===

// Base Test class
class Test {
  constructor(name) {
    this.name = name;
    this.status = "PENDING";
    this.duration = 0;
  }

  start() {
    console.log(`  Starting: ${this.name}`);
    this.status = "RUNNING";
  }

  finish(passed) {
    this.status = passed ? "PASSED" : "FAILED";
    const symbol = passed ? "✓" : "✗";
    console.log(`  ${symbol} ${this.name} ${this.status}`);
  }
}

// UITest class extending Test
class UITest extends Test {
  constructor(name, url, selector) {
    super(name);
    this.url = url;
    this.selector = selector;
  }

  navigate() {
    console.log(`  Navigating to: ${this.url}`);
    console.log(`  Clicking selector: ${this.selector}`);
  }

  start() {
    super.start();
    this.navigate();
  }
}

// APITest class extending Test
class APITest extends Test {
  constructor(name, endpoint, method) {
    super(name);
    this.endpoint = endpoint;
    this.method = method;
  }

  sendRequest() {
    console.log(`  Sending: ${this.method} ${this.endpoint}`);
  }

  start() {
    super.start();
    this.sendRequest();
  }
}

// === Demo ===
console.log("=== Exercise 2: Inheritance ===\n");

// Run UI Test
console.log("Running UI Test:");
const uiTest = new UITest("Login UI Test", "https://app.com/login", "#loginBtn");
uiTest.start();
uiTest.finish(true);

// Run API Test
console.log("\nRunning API Test:");
const apiTest = new APITest("Get Users API Test", "/api/users", "GET");
apiTest.start();
apiTest.finish(true);

// Inheritance check
console.log("\nInheritance check:");
console.log(`  uiTest instanceof UITest: ${uiTest instanceof UITest}`);
console.log(`  uiTest instanceof Test: ${uiTest instanceof Test}`);
console.log(`  apiTest instanceof APITest: ${apiTest instanceof APITest}`);
console.log(`  apiTest instanceof Test: ${apiTest instanceof Test}`);
*/

/*

console.log("=== Exercise 3: Getters and Setters ===\n");

class TestConfig {
    #timeout = 30000;
    #retries = 2;
    #baseUrl = "";

    // Add getter for timeout
    get timeout() {
         return this.#timeout;
    }

    // Add setter for timeout with validation
    set timeout(value) {
        // Your code here
        // Validate: must be between 1000 and 300000

         if (value < 1000) {
      console.log("  ❌ Timeout too short! Setting to minimum: 1000ms");
      this.#timeout = 1000;
    } else if (value > 300000) {
      console.log("  ❌ Timeout too long! Setting to maximum: 300000ms");
      this.#timeout = 300000;
    } else {
      this.#timeout = value;
      console.log(`  ✓ Setting timeout to: ${value}ms`);
    }
    }

    // Add computed property: timeoutInSeconds
    get timeoutInSeconds() {
         return this.#timeout / 1000;
    }

    // Add read-only property: maxRetries
    get maxRetries() {
         return this.#retries;
    }

    // Add getter/setter for baseUrl
    get baseUrl() {
        return this.#baseUrl;
    }

    set baseUrl(url) {
        if (!url || url.trim() === "") {
      console.log("  ❌ Base URL cannot be empty!");
    } else {
      this.#baseUrl = url.trim();
      console.log(`  ✓ Base URL set to: ${this.#baseUrl}`);
    }
  }
}

console.log("Creating test configuration...\n");
let config = new TestConfig();

console.log("Setting timeout:");
config.timeout = 45000;

console.log("\nGetting values:");
console.log(`  Current timeout: ${config.timeout}ms`);
console.log(`  Timeout in seconds: ${config.timeoutInSeconds}s`);
console.log(`  Max retries: ${config.maxRetries}`);

console.log("\nTesting validation:");
config.timeout = 500;  // Too short
console.log(`  Current timeout: ${config.timeout}ms`);

config.timeout = 500000;  // Too long
console.log(`  Current timeout: ${config.timeout}ms`);

console.log("\nSetting base URL:");
config.baseUrl = "  https://app.test.com  ";
console.log(`  Current base URL: ${config.baseUrl}`);

console.log("\nTesting read-only property:");
console.log(`  Max retries is read-only: ${config.maxRetries}`);
*/
 

/*


console.log("=== Exercise 4: Static Properties and Methods ===\n");

class Test {
    static totalTests = 0;
    static passedTests = 0;
    static failedTests = 0;

    constructor(name) {
        this.name = name;
        this.status = "PENDING";
    }

    run(shouldPass) {
         Test.totalTests++;
        if (shouldPass) {
            Test.passedTests++;
            this.status = "PASSED";
            console.log(`  ✓ ${this.name} ${this.status}`);
        } else {
            Test.failedTests++;
            this.status = "FAILED";
            console.log(`  ✗ ${this.name} ${this.status}`);
        }
    }

    static getStats() {
        let successRate = Test.totalTests === 0 
            ? 0 
            : ((Test.passedTests / Test.totalTests) * 100).toFixed(1);
        return {
            total: Test.totalTests,
            passed: Test.passedTests,
            failed: Test.failedTests,
            successRate: successRate
        };
    }

    static reset() {
        Test.totalTests = 0;
        Test.passedTests = 0;
        Test.failedTests = 0;
    
    }

    static createSmokeTest(name) {
        return new Test(`[SMOKE] ${name}`);
    }
}

console.log("Running tests...");
let test1 = new Test("Login Test");
test1.run(true);

let test2 = new Test("Search Test");
test2.run(true);

let test3 = new Test("Checkout Test");
test3.run(false);

let test4 = new Test("Dashboard Test");
test4.run(true);

console.log("\nStatistics after 4 tests:");
let stats = Test.getStats();
console.log(`  Total: ${stats.total}`);
console.log(`  Passed: ${stats.passed}`);
console.log(`  Failed: ${stats.failed}`);
console.log(`  Success Rate: ${stats.successRate}%`);

console.log("\nCreating smoke test with factory method:");
let smokeTest = Test.createSmokeTest("Quick Login");
smokeTest.run(true);

console.log("\nFinal Statistics:");
stats = Test.getStats();
console.log(`  Total: ${stats.total}`);
console.log(`  Passed: ${stats.passed}`);
console.log(`  Failed: ${stats.failed}`);
console.log(`  Success Rate: ${stats.successRate}%`);

console.log("\nResetting counters...");
Test.reset();

console.log("Statistics after reset:");
stats = Test.getStats();
console.log(`  Total: ${stats.total}`);
console.log(`  Passed: ${stats.passed}`);
console.log(`  Failed: ${stats.failed}`);
console.log(`  Success Rate: ${stats.successRate}%`);

*/

