// // Initialize an array named 'numbers' with both positive and negative values.
// const numbers = [3, 5, -2, 8, -7, 6]

// // Define a function named 'findFirstNegative' that takes an array 'numbers' as an argument.
// function findFirstNegative(numbers) {
//   // Use the find() method on the 'numbers' array.
//   // The find() method will iterate through each element in the 'numbers' array and
//   // apply the provided function to check if the element satisfies a condition.
//   return numbers.find(function (number) {
//     // The condition checks if the current 'number' being tested is less than 0, which means it's negative.
//     // If the condition is met, the find() method will immediately return that number and stop further checking.
//     return number < 0
//   })
// }

// // Call the 'findFirstNegative' function with the 'numbers' array as an argument and store the result
// // (which will be the first negative number found, or 'undefined' if no negative number exists)
// // in the 'firstNegative' constant.
// const firstNegative = findFirstNegative(numbers)

// // Output the result to the console.
// console.log(firstNegative) // Expected Output: -2

// Initialize an array named 'numbers' with both positive and negative values.
const numbers = [3, 5, -2, 8, -7, 6]

// Define a function named 'findFirstNegative' that takes an array 'numbers' as an argument.
function findFirstNegative(numbers) {
  // Loop through each element in the 'numbers' array.
  for (let i = 0; i < numbers.length; i++) {
    // Check if the current element is negative (i.e., less than 0).
    if (numbers[i] < 0) {
      // If a negative number is found, return it immediately.
      return numbers[i]
    }
  }
  // If no negative number is found after checking all elements, return 'undefined'.
  // (This is not explicitly required because functions return 'undefined' by default if no value is returned.)
}

// Call the 'findFirstNegative' function with the 'numbers' array as an argument and store the result
// (which will be the first negative number found, or 'undefined' if no negative number exists)
// in the 'firstNegative' constant.
const firstNegative = findFirstNegative(numbers)

// Output the result to the console.
console.log(firstNegative) // Expected Output: -2
