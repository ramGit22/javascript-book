// // Given array of users with 'name' and 'isActive' properties
// const users = [
//   { name: 'John', isActive: true },
//   { name: 'Jane', isActive: false },
//   { name: 'Doe', isActive: true },
// ]

// function getActiveUsers(users) {
//   // The filter() method creates a new array with all elements
//   // that pass the test implemented by the provided function.
//   // Here, we're using an arrow function to check the 'isActive'
//   // property of each user. If 'isActive' is true, the user object
//   // will be included in the new array, otherwise, it will be omitted.
//   return users.filter((user) => user.isActive)
// }

// // Calling the function and storing the result in the 'activeUsers' constant
// const activeUsers = getActiveUsers(users)

// // Printing the result to the console
// console.log(activeUsers)

// Given array of users with 'name' and 'isActive' properties
const users = [
  { name: 'John', isActive: true },
  { name: 'Jane', isActive: false },
  { name: 'Doe', isActive: true },
]

function getActiveUsers(users) {
  // Initialize an empty array to store the active users
  let activeUsers = []

  // Use a for loop to iterate over each user in the users array
  for (let i = 0; i < users.length; i++) {
    // If the user's 'isActive' property is true,
    // push the user object to the 'activeUsers' array
    if (users[i].isActive) {
      activeUsers.push(users[i])
    }
  }

  // Return the filtered 'activeUsers' array
  return activeUsers
}

// Calling the function and storing the result in the 'resultingActiveUsers' constant
const resultingActiveUsers = getActiveUsers(users)

// Printing the result to the console
console.log(resultingActiveUsers)
