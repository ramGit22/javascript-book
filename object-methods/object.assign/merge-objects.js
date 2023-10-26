// Define an object named obj1 with properties name and age
const obj1 = {
  name: 'John',
  age: 25,
}

// Define another object named obj2 with properties age and city
const obj2 = {
  age: 30,
  city: 'New York',
}

// Define a function named mergeObjects that takes two objects (obj1 and obj2) as arguments
function mergeObjects(obj1, obj2) {
  // Use Object.assign to merge obj1 and obj2, with properties from obj2 overwriting those in obj1 if they have the same name
  // The merged result is directly assigned to obj1, so obj1 is modified and also returned by Object.assign
  return Object.assign(obj1, obj2)
}

// Call mergeObjects, passing obj1 and obj2 as arguments, and store the returned (and now merged) obj1 in a constant named mergedObj
const mergedObj = mergeObjects(obj1, obj2)

// Output the merged object to the console to verify the function's behavior
console.log(mergedObj) // Output: { name: 'John', age: 30, city: 'New York' }

// // Define two objects, obj1 and obj2, each with some properties
// const obj1 = {
//   name: 'John',
//   age: 25,
// }

// const obj2 = {
//   age: 30,
//   city: 'New York',
// }
// // Define a function named mergeObjects that takes two objects (obj1 and obj2) as arguments
// function mergeObjects(obj1, obj2) {
//   // Create a new empty object named mergedObj that will hold the merged properties of obj1 and obj2
//   let mergedObj = {}

//   // Use a for...in loop to iterate through all properties (keys) of obj1
//   for (let key in obj1) {
//     // For each property of obj1, copy the property and its value to mergedObj
//     mergedObj[key] = obj1[key]
//   }

//   // Use another for...in loop to iterate through all properties (keys) of obj2
//   for (let key in obj2) {
//     // For each property of obj2, copy the property and its value to mergedObj
//     // If a property of the same name already exists in mergedObj (from obj1), it will be overwritten by the property from obj2
//     mergedObj[key] = obj2[key]
//   }

//   // Return the merged object, which now contains all properties of obj1 and obj2, with obj2's properties overwriting obj1's where they have the same name
//   return mergedObj
// }

// // Call mergeObjects, passing obj1 and obj2 as arguments, and store the returned merged object in a constant named mergedObj
// const mergedObj = mergeObjects(obj1, obj2)

// // Output the merged object to the console to verify the function's behavior
// console.log(mergedObj) // Output: { name: "John", age: 30, city: "New York" }

// const obj1 = {
//   name: 'John',
//   age: 25,
// }

// const obj2 = {
//   age: 30,
//   city: 'New York',
// }
// function mergeObjects(obj1, obj2) {
//   mergedObj = {}
//   obj1Keys = Object.keys(obj1)
//   obj2Keys = Object.keys(obj2)
//   for (let i = 0; i < obj1Keys.length; i++) {
//     let key = obj1Keys[i]
//     mergedObj[key] = obj1[key]
//   }
//   for (let i = 0; i < obj2Keys.length; i++) {
//     let key = obj2Keys[i]
//     mergedObj[key] = obj2[key]
//   }
//   return mergedObj
// }

// console.log(mergeObjects(obj1, obj2))
