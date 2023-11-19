// // Sample data: An object
// const user = {
//   name: 'John',
//   age: 25,
//   city: 'New York',
// }

// // Function to count the properties of an object
// function countProperties(obj) {
//   // Using Object.entries() to get an array of the object's property pairs
//   // The length of this array represents the count of properties
//   return Object.entries(obj).length
// }

// // Count the properties of the object
// const propertyCount = countProperties(user)
// console.log(propertyCount) // Expected Output: 3
// Sample data: An object
const user = {
  name: 'John',
  age: 25,
  city: 'New York',
}

// Function to count the properties of an object using a loop
function countProperties(obj) {
  let count = 0 // Initialize a counter for the properties

  // Loop through each property in the object
  for (let key in obj) {
    // Ensure the property is directly on the object, not its prototype
    if (obj.hasOwnProperty(key)) {
      count++ // Increment the count for each property
    }
  }

  return count // Return the total count of properties
}

// Count the properties of the object
const propertyCount = countProperties(user)
console.log(propertyCount) // Expected Output: 3
