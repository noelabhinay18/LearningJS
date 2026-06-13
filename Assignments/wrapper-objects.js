
/*
let a = "PASSED";
let b = new String("PASSED");

let c = 42;
let d = new Number(42);

let e = true;
let f = new Boolean(true);

console.log("Expected: string")
console.log(typeof a);  // ?
console.log("Expected: string")
console.log(typeof b);  // ?
console.log("Expected: number")
console.log(typeof c);  // ?
console.log("Expected: number")
console.log(typeof d);  // ?
console.log("Expected: boolean")
console.log(typeof e);  // ?
console.log("Expected: boolean")
console.log(typeof f);  // ?

*/

/*

function assertStatusMatch(expected, actual) {
    if (expected === actual) {
        console.log("✅ Status matches: " + actual);
    } else {
        console.log("❌ Status mismatch! Expected: " + expected + ", Got: " + actual);
    }
}

// Case 1: Both are primitives — works fine
let status1 = "PASSED";
let status2 = "PASSED";
assertStatusMatch(status1, status2);

// Case 2: One is a wrapper object — BREAKS!
let status3 = "PASSED";
let status4 = new String("PASSED");
assertStatusMatch(status3, status4);

// Case 3: Two wrapper objects — ALSO BREAKS!
let status5 = new String("PASSED");
let status6 = new String("PASSED");
assertStatusMatch(status5, status6);

console.log(typeof status3, typeof status4)

*/

function checkFeatureEnabled(flag) {
    if (flag) {
        console.log("Feature is ENABLED");
    } else {
        console.log("Feature is DISABLED");
    }
}

let featureA = true;
let featureB = false;
let featureC = new Boolean(false);   // looks like false...

checkFeatureEnabled(featureA);   // expected: ENABLED
checkFeatureEnabled(featureB);   // expected: DISABLED
checkFeatureEnabled(featureC);   // expected: DISABLED  (but is it?)

console.log("typeof featureC:", typeof featureC)
console.log("Boolean(featureC):", Boolean(featureC))