// // Sample data: An array of numbers
// const numbers = [3, 5, 8, 6, 7, 9]

// // Function to extract a subarray from index 1 to index 3
// function extractSubarray(numbers) {
//   // Use slice() to extract the subarray from index 1 to 3 (end index is exclusive)
//   return numbers.slice(1, 4)
// }

// // Call the 'extractSubarray' function with 'numbers' as an argument and
// // store the result in a new constant named 'subarray'
// const subarray = extractSubarray(numbers)

// // Output the 'subarray' to the console
// console.log(subarray) // Expected Output: [5, 8, 6]
// Sample data: An array of numbers
const numbers = [3, 5, 8, 6, 7, 9]

// Function to manually extract a subarray from index 1 to index 3
function extractSubarray(numbers) {
  let subarray = [] // Initialize a new array for the subarray

  // Iterate through the original array within the specified range
  for (let i = 1; i <= 3; i++) {
    // Add the elements within the range to the new array
    subarray.push(numbers[i])
  }

  return subarray // Return the new array containing the subarray
}

// Call the 'extractSubarray' function with 'numbers' as an argument and
// store the result in a new constant named 'subarray'
const subarray = extractSubarray(numbers)

// Output the 'subarray' to the console
console.log(subarray) // Expected Output: [5, 8, 6]
