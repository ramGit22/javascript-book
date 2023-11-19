// // Sample data: An object
// const user = {
//   name: 'John',
//   age: 25,
// }

// // Function to get all property values of an object
// function getPropertyValues(obj) {
//   // Use Object.keys() to get the keys, and map them to their values
//   return Object.keys(obj).map((key) => obj[key])
// }

// // Call the 'getPropertyValues' function with 'user' as an argument and
// // store the result in a new constant named 'propertyValues'
// const propertyValues = getPropertyValues(user)

// // Output the 'propertyValues' to the console
// console.log(propertyValues) // Expected Output: ["John", 25]
// Sample data: An object
const user = {
  name: 'John',
  age: 25,
}

// Function to get all property values of an object using a loop
function getPropertyValues(obj) {
  let values = [] // Initialize an array to store the property values

  // Iterate over the object's keys using a for...in loop
  for (let key in obj) {
    // Ensure the key belongs to the object itself, not its prototype
    if (obj.hasOwnProperty(key)) {
      // Add the value corresponding to the key to the values array
      values.push(obj[key])
    }
  }

  return values // Return the array of values
}

// Call the 'getPropertyValues' function with 'user' as an argument and
// store the result in a new constant named 'propertyValues'
const propertyValues = getPropertyValues(user)

// Output the 'propertyValues' to the console
console.log(propertyValues) // Expected Output: ["John", 25]
