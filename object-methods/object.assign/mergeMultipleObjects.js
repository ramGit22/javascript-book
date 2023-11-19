// // Sample data: Three objects
// const obj1 = { a: 1, b: 2 }
// const obj2 = { b: 3, c: 4 }
// const obj3 = { c: 5, d: 6 }

// // Function to merge obj1, obj2, and obj3
// function mergeMultipleObjects(obj1, obj2, obj3) {
//   // Merging obj1, obj2, and obj3 into a new object
//   return Object.assign({}, obj1, obj2, obj3)
// }

// // Merge the objects
// const mergedObject = mergeMultipleObjects(obj1, obj2, obj3)
// console.log(mergedObject) // Expected Output: { a: 1, b: 3, c: 5, d: 6 }

// Sample data: Three objects
const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }
const obj3 = { c: 5, d: 6 }

// Function to merge obj1, obj2, and obj3 manually
function mergeMultipleObjects(obj1, obj2, obj3) {
  let mergedObject = {} // Initialize an empty object for the merged result

  // Function to copy properties from one object to another
  function copyProperties(source, target) {
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = source[key]
      }
    }
  }

  // Copy properties from each object to the mergedObject
  copyProperties(obj1, mergedObject)
  copyProperties(obj2, mergedObject)
  copyProperties(obj3, mergedObject)

  return mergedObject
}

// Merge the objects
const mergedObject = mergeMultipleObjects(obj1, obj2, obj3)
console.log(mergedObject) // Expected Output: { a: 1, b: 3, c: 5, d: 6 }
