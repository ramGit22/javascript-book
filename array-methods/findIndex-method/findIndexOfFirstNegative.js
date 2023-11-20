// // Sample data: An array of numbers
// const numbers = [3, 5, -2, 8, -7, 6]

// // Function to find the index of the first negative number in an array
// function findIndexOfFirstNegative(numbers) {
//   // Use findIndex() to check for the first negative number
//   return numbers.findIndex((number) => number < 0)
// }

// // Call the 'findIndexOfFirstNegative' function with 'numbers' as an argument and
// // store the result in a new constant named 'indexOfFirstNegative'
// const indexOfFirstNegative = findIndexOfFirstNegative(numbers)

// // Output the 'indexOfFirstNegative' to the console
// console.log(indexOfFirstNegative) // Expected Output: 2
// Sample data: An array of numbers
const numbers = [3, 5, -2, 8, -7, 6]

// Function to find the index of the first negative number in an array using a loop
function findIndexOfFirstNegative(numbers) {
  // Iterate through each number in the array
  for (let i = 0; i < numbers.length; i++) {
    // Check if the current number is negative
    if (numbers[i] < 0) {
      return i // Return the index of the first negative number found
    }
  }
  return -1 // Return -1 if no negative number is found
}

// Call the 'findIndexOfFirstNegative' function with 'numbers' as an argument and
// store the result in a new constant named 'indexOfFirstNegative'
const indexOfFirstNegative = findIndexOfFirstNegative(numbers)

// Output the 'indexOfFirstNegative' to the console
console.log(indexOfFirstNegative) // Expected Output: 2
