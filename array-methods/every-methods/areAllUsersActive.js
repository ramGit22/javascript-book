// Sample data with users and their isActive status
const users = [
  { name: 'John', isActive: true },
  { name: 'Jane', isActive: true },
  { name: 'Doe', isActive: true },
]

// Function to check if all users are active
function areAllUsersActive(users) {
  // The every() method checks if all elements in the array satisfy the condition provided by the callback function
  return users.every(function (user) {
    // Return the value of the isActive property for each user
    // If any user is not active (isActive is false), the every() method will return false
    // If all users are active (isActive is true for all), the every() method will return true
    return user.isActive
  })
}

// Call the areAllUsersActive function with the users array as its argument and store the result in allActive
const allActive = areAllUsersActive(users)

// Print the result to the console
console.log(allActive) // Expected: true

// // Sample data with users and their isActive status
// const users = [
//   { name: "John", isActive: true },
//   { name: "Jane", isActive: true },
//   { name: "Doe", isActive: true }
// ];

// // Function to check if all users are active using a loop
// function areAllUsersActive(users) {
//   // Use a traditional for loop to iterate over each user in the array
//   for (let i = 0; i < users.length; i++) {
//     // If the isActive property of the current user is false
//     if (users[i].isActive === false) {
//       // Return false immediately as we found an inactive user
//       return false;
//     }
//   }

//   // If the loop completes without finding an inactive user, return true
//   return true;
// }

// // Call the areAllUsersActive function with the users array as its argument and store the result in allActive
// const allActive = areAllUsersActive(users);

// // Print the result to the console
// console.log(allActive);  // Expected: true
