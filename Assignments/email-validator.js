
console.log("=======================================");
console.log("### Part 3: Test Validator Function");
console.log("=======================================");
console.log(   );
function validateEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        return "VALID";
    } else {
        return "INVALID";
    }
}

// Test it
console.log(validateEmail("test@example.com"));  // VALID
console.log(validateEmail("notanemail")); 