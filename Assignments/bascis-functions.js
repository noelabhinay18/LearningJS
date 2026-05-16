// Function to generate email
function generateEmail(firstName, lastName) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@test.com`;
}

// Function to generate username
function generateUsername(firstName, lastName) {
    return firstName.toLowerCase() + lastName.toLowerCase();
}

// Function to generate password
function generatePassword(prefix) {
    return prefix + "@123";
}

// Test the functions
let email = generateEmail("John", "Doe");
let username = generateUsername("John", "Doe");
let password = generatePassword("Test");

console.log("Email :" + email);
console.log("UserName :" +username);
console.log("Password :" +password);