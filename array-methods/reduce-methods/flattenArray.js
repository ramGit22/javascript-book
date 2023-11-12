// // Sample data: Nested array of numbers
// const nestedArray = [1, [2, 3], [4, [5, 6]]]

// // Function to flatten a nested array
// function flattenArray(nestedArray) {
//   // Using reduce() to iterate and flatten the array
//   return nestedArray.reduce((flattened, element) => {
//     // If the element is an array, recursively flatten it and concatenate
//     // Otherwise, just concatenate the element
//     return Array.isArray(element)
//       ? flattened.concat(flattenArray(element))
//       : flattened.concat(element)
//   }, []) // Start with an empty array
// }

// // Testing the function
// const flattened = flattenArray(nestedArray)
// console.log('Flattened Array:', flattened) // Output: Flattened Array: [1, 2, 3, 4, 5, 6]
// Sample data: Nested array of numbers
const nestedArray = [1, [2, 3], [4, [5, 6]]]

// Recursive function to flatten an array
function flattenArray(arr) {
  let result = []

  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // If the element is an array, recursively flatten it and add the results to the result array
      result = result.concat(flattenArray(arr[i]))
    } else {
      // If the element is not an array, add it directly to the result array
      result.push(arr[i])
    }
  }

  return result
}

// Testing the function
const flattened = flattenArray(nestedArray)
console.log('Flattened Array:', flattened) // Output: Flattened Array: [1, 2, 3, 4, 5, 6]
