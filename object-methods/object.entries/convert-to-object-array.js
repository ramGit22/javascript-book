// // Define the user object with properties name and age
// const user = {
//   name: 'Alice',
//   age: 30,
// }

// // Define a function named convertToObjectArray that takes a single argument user
// function convertToObjectArray(user) {
//   // Use Object.entries to convert the user object to an array of key-value pairs
//   // Object.entries returns an array where each element is an array containing a property key and its corresponding value
//   return Object.entries(user)
// }

// // Call convertToObjectArray, passing the user object as an argument,
// // and store the returned array of key-value pairs in a constant named objectArray
// const objectArray = convertToObjectArray(user)

// // Output the array of key-value pairs to the console to verify the function's behavior
// console.log(objectArray) // Expected Output: [["name", "Alice"], ["age", 30]]

// Define the user object with properties name and age
const user = {
  name: 'Alice',
  age: 30,
}

// Define a function named convertToObjectArray that takes a single argument user
function convertToObjectArray(user) {
  // Initialize an empty array to hold the key-value pairs
  let objectArray = []

  // Use a for...in loop to iterate through each property of the user object
  for (let key in user) {
    // For each property, create an array containing the property key and its value,
    // and push this array into objectArray
    objectArray.push([key, user[key]])
  }

  // Return the array of key-value pairs
  return objectArray
}

// Call convertToObjectArray, passing the user object as an argument,
// and store the returned array of key-value pairs in a constant named objectArray
const objectArray = convertToObjectArray(user)

// Output the array of key-value pairs to the console to verify the function's behavior
console.log(objectArray) // Expected Output: [["name", "Alice"], ["age", 30]]

// const user = {
//   name: 'Alice',
//   age: 30,
// }
// function convertToObjectArray(user) {
//   let userArray = Object.keys(user) //['name','age']
//   let convertedArray = []
//   for (let i = 0; i < userArray.length; i++) {
//     let firstArray = []
//     let key = userArray[i]
//     firstArray.push(userArray[i], user[key])
//     convertedArray.push(firstArray)
//   }
//   return convertedArray
// }
// const objectArray = convertToObjectArray(user)
// console.log(objectArray)
