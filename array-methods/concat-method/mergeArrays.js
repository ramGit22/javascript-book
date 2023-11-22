// // Sample data: Two arrays of numbers
// const array1 = [3, 5, 8]
// const array2 = [7, 9, 2]

// // Function to merge two arrays into one
// function mergeArrays(arr1, arr2) {
//   // Use concat() to merge arr1 and arr2 into a new array
//   return arr1.concat(arr2)
// }

// // Call the 'mergeArrays' function with 'array1' and 'array2' as arguments and
// // store the result in a new constant named 'mergedArray'
// const mergedArray = mergeArrays(array1, array2)

// // Output the 'mergedArray' to the console
// console.log(mergedArray) // Expected Output: [3, 5, 8, 7, 9, 2]
// Sample data: Two arrays of numbers
const array1 = [3, 5, 8]
const array2 = [7, 9, 2]

// Function to manually merge two arrays
function mergeArrays(arr1, arr2) {
  let mergedArray = []

  // Add all elements of arr1 to mergedArray
  for (let i = 0; i < arr1.length; i++) {
    mergedArray.push(arr1[i])
  }

  // Add all elements of arr2 to mergedArray
  for (let i = 0; i < arr2.length; i++) {
    mergedArray.push(arr2[i])
  }

  return mergedArray
}

// Call the 'mergeArrays' function with 'array1' and 'array2' as arguments and
// store the result in a new constant named 'mergedArray'
const mergedArray = mergeArrays(array1, array2)

// Output the 'mergedArray' to the console
console.log(mergedArray) // Expected Output: [3, 5, 8, 7, 9, 2]
