// // Sample data: An array of numbers
// const numbers = [3, 5, 8, 6]

// // Function to insert 10 and 15 at the second position in an array
// function insertNumbers(numbers) {
//   // Use splice() to insert 10 and 15 at the second position
//   numbers.splice(1, 0, 10, 15)
//   return numbers
// }

// // Call the 'insertNumbers' function with 'numbers' as an argument and
// // store the result in a new constant named 'newNumbers'
// const newNumbers = insertNumbers(numbers)

// // Output the 'newNumbers' to the console
// console.log(newNumbers) // Expected Output: [3, 10, 15, 5, 8, 6]
// Sample data: An array of numbers
const numbers = [3, 5, 8, 6]

// Function to insert 10 and 15 at the second position in an array
function insertNumbers(numbers) {
  let newNumbers = [] // Initialize a new array

  // Iterate through the original array and construct the new array
  for (let i = 0; i < numbers.length; i++) {
    if (i === 1) {
      // Insert 10 and 15 at the second position
      newNumbers.push(10, 15)
    }
    // Add the current element from the original array
    newNumbers.push(numbers[i])
  }

  return newNumbers // Return the new array with the inserted numbers
}

// Call the 'insertNumbers' function with 'numbers' as an argument and
// store the result in a new constant named 'newNumbers'
const newNumbers = insertNumbers(numbers)

// Output the 'newNumbers' to the console
console.log(newNumbers) // Expected Output: [3, 10, 15, 5, 8, 6]
