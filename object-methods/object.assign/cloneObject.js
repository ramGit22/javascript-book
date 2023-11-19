// // Sample data: An object
// const user = {
//   name: 'John',
//   age: 25,
// }

// // Function to clone an object using Object.assign()
// function cloneObject(obj) {
//   // Creating a new object and copying properties from obj to the new object
//   return Object.assign({}, obj)
// }

// // Clone the user object
// const clonedUser = cloneObject(user)
// console.log(clonedUser) // Expected Output: { name: "John", age: 25 }

// Sample data: An object
const user = {
  name: 'John',
  age: 25,
}

// Function to manually clone an object
function cloneObject(obj) {
  let clone = {} // Initialize an empty object for the clone

  // Loop through each property in the original object
  for (let key in obj) {
    // Ensure the property belongs to the object, not its prototype
    if (obj.hasOwnProperty(key)) {
      // Copy each property to the clone
      clone[key] = obj[key]
    }
  }

  return clone // Return the cloned object
}

// Clone the user object using the manual method
const clonedUser = cloneObject(user)
console.log(clonedUser) // Expected Output: { name: "John", age: 25 }
