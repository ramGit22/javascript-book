// Define an array of users with name and isVIP properties
const users = [
  { name: 'John', isVIP: false },
  { name: 'Jane', isVIP: true },
  { name: 'Doe', isVIP: false },
]

function hasVIPUser(users) {
  // The some() method tests whether at least one element in the array passes
  // the test implemented by the provided function. Here, we're using some()
  // to check if there's at least one user with the isVIP property set to true.
  return users.some((user) => {
    return user.isVIP === true
  })
}

// Call the hasVIPUser function with the users array as its argument and store the result in hasVIP
const hasVIP = hasVIPUser(users)

// Print the result to the console
console.log(hasVIP) // True

// // Define an array of users with name and isVIP properties
// const users = [
//   { name: 'John', isVIP: false },
//   { name: 'Jane', isVIP: true },
//   { name: 'Doe', isVIP: false },
// ]

// function hasVIPUser(users) {
//   // Use a traditional for loop to iterate over each user in the array
//   for (let i = 0; i < users.length; i++) {
//     // If the isVIP property of the current user is true
//     if (users[i].isVIP === true) {
//       // Return true immediately as we found a VIP user
//       return true
//     }
//   }

//   // If the loop completes without finding a VIP user, return false
//   return false
// }

// // Call the hasVIPUser function with the users array as its argument and store the result in hasVIP
// const hasVIP = hasVIPUser(users)

// // Print the result to the console
// console.log(hasVIP) // True
