// // Sample data: Array of users
// const users = [
//   { name: 'John', country: 'USA' },
//   { name: 'Jane', country: 'Canada' },
//   { name: 'Doe', country: 'USA' },
// ]

// // Function to get all users from "USA"
// function getUsersFromUSA(users) {
//   // Using filter() to return only those users whose country is "USA"
//   return users.filter((user) => user.country === 'USA')
// }

// // Testing the function
// const usaUsers = getUsersFromUSA(users)
// console.log(usaUsers)
// Sample data: Array of users
const users = [
  { name: 'John', country: 'USA' },
  { name: 'Jane', country: 'Canada' },
  { name: 'Doe', country: 'USA' },
]

// Function to get all users from "USA" using a loop
function getUsersFromUSA(users) {
  // Initialize an array to hold users from the USA
  let usaUsers = []

  // Loop through each user in the users array
  for (let i = 0; i < users.length; i++) {
    // If the user's country is "USA", add them to the usaUsers array
    if (users[i].country === 'USA') {
      usaUsers.push(users[i])
    }
  }

  // Return the array of users from the USA
  return usaUsers
}

// Testing the function
const usaUsers = getUsersFromUSA(users)
console.log(usaUsers)
