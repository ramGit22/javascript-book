// // Sample data: An array of numbers
// const numbers = [3, 5, -2, 8, -7, 6]

// // Function to remove all negative numbers from an array
// function removeNegatives(numbers) {
//   // Iterate backwards through the array
//   for (let i = numbers.length - 1; i >= 0; i--) {
//     // Check if the current element is negative
//     if (numbers[i] < 0) {
//       // Remove the negative element with splice()
//       numbers.splice(i, 1)
//     }
//   }
//   return numbers
// }

// // Call the 'removeNegatives' function with 'numbers' as an argument and
// // store the result in a new constant named 'positiveNumbers'
// const positiveNumbers = removeNegatives(numbers)

// // Output the 'positiveNumbers' to the console
// console.log(positiveNumbers) // Expected Output: [3, 5, 8, 6]
// Sample data: An array of numbers
const numbers = [3, 5, -2, 8, -7, 6]

// Function to remove all negative numbers from an array
function removeNegatives(numbers) {
  let positives = [] // Initialize a new array for positive numbers

  // Iterate through the original array
  for (let i = 0; i < numbers.length; i++) {
    // Check if the current element is positive
    if (numbers[i] >= 0) {
      // Add positive elements to the new array
      positives.push(numbers[i])
    }
  }

  return positives // Return the new array containing only positive numbers
}

// Call the 'removeNegatives' function with 'numbers' as an argument and
// store the result in a new constant named 'positiveNumbers'
const positiveNumbers = removeNegatives(numbers)

// Output the 'positiveNumbers' to the console
console.log(positiveNumbers) // Expected Output: [3, 5, 8, 6]
