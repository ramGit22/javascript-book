// // Sample data: Array of user objects with 'name' and 'age' properties
// const users = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 },
//   { name: 'Doe', age: 35 },
// ]

// // Function to extract names from the users array
// function extractNames(users) {
//   // Using map() to transform each user object into just the user's name
//   return users.map((user) => user.name)
// }

// // Testing the function
// const names = extractNames(users)
// console.log(names) // Output: ["John", "Jane", "Doe"]
// Sample data: Array of user objects with 'name' and 'age' properties
const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Doe', age: 35 },
]

// Function to extract names from the users array using a loop
function extractNames(users) {
  // Initialize an empty array to store the names
  let names = []

  // Loop through each user in the users array
  for (let i = 0; i < users.length; i++) {
    // Add the name of each user to the names array
    names.push(users[i].name)
  }

  // Return the array of names
  return names
}

// Testing the function
const names = extractNames(users)
console.log(names) // Output: ["John", "Jane", "Doe"]
