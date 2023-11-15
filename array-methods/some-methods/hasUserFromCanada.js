// // Sample data: Array of users
// const users = [
//   { name: 'John', country: 'USA' },
//   { name: 'Jane', country: 'Canada' },
//   { name: 'Doe', country: 'UK' },
// ]

// // Function to check if there's at least one user from "Canada"
// function hasUserFromCanada(users) {
//   // Using some() to check for at least one user from "Canada"
//   return users.some((user) => user.country === 'Canada')
// }

// // Check if there's a user from Canada
// const hasCanadian = hasUserFromCanada(users)
// console.log(hasCanadian) // Output: true

// Sample data: Array of users
const users = [
  { name: 'John', country: 'USA' },
  { name: 'Jane', country: 'Canada' },
  { name: 'Doe', country: 'UK' },
]

// Function to check if there's at least one user from "Canada" using a loop
function hasUserFromCanada(users) {
  // Loop through each user in the users array
  for (let i = 0; i < users.length; i++) {
    // Check if the user's country is "Canada"
    if (users[i].country === 'Canada') {
      // Return true if a user from Canada is found
      return true
    }
  }
  // Return false if no users from Canada are found
  return false
}

// Check if there's a user from Canada using a loop
const hasCanadian = hasUserFromCanada(users)
console.log(hasCanadian) // Output: true
