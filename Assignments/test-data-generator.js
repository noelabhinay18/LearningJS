
/*
let design="=============================";
console.log(design);
let profile="### Part 2: Test Data Generator"
console.log(profile);
design="=============================";
console.log(design);
*/

function generateEmail(firstName, lastName) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@test.com`;
}

function generateUsername(firstName, lastName) {
    return firstName.toLowerCase() + lastName.toLowerCase();
}

function generateTestUser(firstName, lastName) {
    return {
        name: `${firstName} ${lastName}`,
        email: generateEmail(firstName, lastName),
        username: generateUsername(firstName, lastName),
        password: "Test@123",
        userId: 1000,
        isActive: true
    };
}

let email = generateEmail("Arianna","Nelcy");
let username = generateUsername("Adrian","Wilbert");
let user1 = generateTestUser("John", "Doe");
let user2 = generateTestUser("Jane", "Smith");

console.log(user1);
console.log(user2);

////// email and username not getting populated in UI