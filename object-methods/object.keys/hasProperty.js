// // Sample data: An object
// const user = {
//   name: 'John',
//   age: 25,
// }

// // Function to check if a property key exists in an object
// function hasProperty(obj, key) {
//   // Get an array of the object's keys and check if 'key' is included
//   return Object.keys(obj).includes(key)
// }

// // Call the 'hasProperty' function with 'user' and 'age' as arguments and
// // store the result in a new constant named 'hasAgeProperty'
// const hasAgeProperty = hasProperty(user, 'age')

// // Output the 'hasAgeProperty' to the console
// console.log(hasAgeProperty) // Expected Output: true
// Sample data: An object
const user = {
  name: 'John',
  age: 25,
}

// Function to check if a property key exists in an object using a loop
function hasProperty(obj, key) {
  // Iterate over the object's keys using a for...in loop
  for (let k in obj) {
    // Check if the current key matches the provided key
    if (k === key) {
      return true // The key exists in the object
    }
  }
  return false // The key was not found in the object
}

// Call the 'hasProperty' function with 'user' and 'age' as arguments and
// store the result in a new constant named 'hasAgeProperty'
const hasAgeProperty = hasProperty(user, 'age')

// Output the 'hasAgeProperty' to the console
console.log(hasAgeProperty) // Expected Output: true
