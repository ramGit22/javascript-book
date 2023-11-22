// // Sample data: Three arrays of numbers
// const array1 = [1, 2, 3]
// const array2 = [4, 5, 6]
// const array3 = [7, 8, 9]

// // Function to concatenate three arrays
// function concatenateMultipleArrays(arr1, arr2, arr3) {
//   // Use concat() to combine arr1, arr2, and arr3 into a new array
//   return arr1.concat(arr2, arr3)
// }

// // Call the 'concatenateMultipleArrays' function with 'array1', 'array2', and 'array3' as arguments and
// // store the result in a new constant named 'concatenatedArray'
// const concatenatedArray = concatenateMultipleArrays(array1, array2, array3)

// // Output the 'concatenatedArray' to the console
// console.log(concatenatedArray) // Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Sample data: Three arrays of numbers
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const array3 = [7, 8, 9]

// Function to manually concatenate three arrays
function concatenateMultipleArrays(arr1, arr2, arr3) {
  let combinedArray = []

  // Add all elements of arr1 to combinedArray
  for (let element of arr1) {
    combinedArray.push(element)
  }

  // Add all elements of arr2 to combinedArray
  for (let element of arr2) {
    combinedArray.push(element)
  }

  // Add all elements of arr3 to combinedArray
  for (let element of arr3) {
    combinedArray.push(element)
  }

  return combinedArray
}

// Call the 'concatenateMultipleArrays' function with 'array1', 'array2', and 'array3' as arguments and
// store the result in a new constant named 'concatenatedArray'
const concatenatedArray = concatenateMultipleArrays(array1, array2, array3)

// Output the 'concatenatedArray' to the console
console.log(concatenatedArray) // Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
