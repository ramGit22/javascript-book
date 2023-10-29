// // Define the person object with properties firstName, lastName, and age
// const person = {
//   firstName: 'Bob',
//   lastName: 'Smith',
//   age: 40,
// }

// // Define a function named getPropertyNames that takes a single argument person
// function getPropertyNames(person) {
//   // Use Object.keys to extract all property names from the person object and return them as an array
//   // Object.keys returns an array containing the names of all the object's own enumerable string-keyed properties
//   return Object.keys(person)
// }

// // Call getPropertyNames, passing the person object as an argument,
// // and store the returned array of property names in a constant named propertyNames
// const propertyNames = getPropertyNames(person)

// // Output the array of property names to the console to verify the function's behavior
// console.log(propertyNames) // Expected Output: ["firstName", "lastName", "age"]

// Define the person object with properties firstName, lastName, and age
const person = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 40,
}

// Define a function named getPropertyNames that takes a single argument person
function getPropertyNames(person) {
  // Initialize an empty array to hold the property names
  let propertyNames = []

  // Use a for...in loop to iterate through each property of the person object
  for (let key in person) {
    // For each property, push the property name (key) into the propertyNames array
    propertyNames.push(key)
  }

  // Return the array of property names
  return propertyNames
}

// Call getPropertyNames, passing the person object as an argument,
// and store the returned array of property names in a constant named propertyNames
const propertyNames = getPropertyNames(person)

// Output the array of property names to the console to verify the function's behavior
console.log(propertyNames) // Expected Output: ["firstName", "lastName", "age"]
