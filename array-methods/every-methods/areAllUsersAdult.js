// // Sample data: Array of users
// const users = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 20 },
//   { name: 'Doe', age: 19 },
// ]

// // Function to check if all users are adults (above 18)
// function areAllUsersAdult(users) {
//   // Using every() to check if every user's age is greater than 18
//   return users.every((user) => user.age > 18)
// }

// // Check if all users are adults
// const allAdults = areAllUsersAdult(users)
// console.log(allAdults) // Output: true
// Sample data: Array of users (same as above)
const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 20 },
  { name: 'Doe', age: 19 },
]

// Function to check if all users are adults using a loop
function areAllUsersAdult(users) {
  // Loop through each user in the users array
  for (let i = 0; i < users.length; i++) {
    // Check if the user's age is not greater than 18
    if (users[i].age <= 18) {
      return false // A user is not an adult
    }
  }
  return true // All users are adults
}

// Check if all users are adults using a loop
const allAdults = areAllUsersAdult(users)
console.log(allAdults) // Output: true
