// // Sample data: An array of numbers
// const numbers = [3, 5, -2, 8, -7, 6]

// // Function to sort the numbers in descending order
// function sortDescending(numbers) {
//   // Using sort() with a comparison function for descending order
//   return numbers.sort((a, b) => b - a)
// }

// // Call the 'sortDescending' function with 'numbers' as an argument and
// // store the result in a new constant named 'sortedNumbers'
// const sortedNumbers = sortDescending(numbers)

// // Output the 'sortedNumbers' to the console
// console.log(sortedNumbers) // Expected Output: [8, 6, 5, 3, -2, -7]

// Sample data: An array of numbers
const numbers = [3, 5, -2, 8, -7, 6]

// Function to sort the numbers in descending order using bubble sort
function sortDescending(numbers) {
  let len = numbers.length
  let swapped

  do {
    swapped = false
    for (let i = 0; i < len - 1; i++) {
      // Compare adjacent elements and swap if in wrong order
      if (numbers[i] < numbers[i + 1]) {
        // Swap elements
        let temp = numbers[i]
        numbers[i] = numbers[i + 1]
        numbers[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)

  return numbers
}

// Call the 'sortDescending' function with 'numbers' as an argument and
// store the result in a new constant named 'sortedNumbers'
const sortedNumbers = sortDescending(numbers)

// Output the 'sortedNumbers' to the console
console.log(sortedNumbers) // Expected Output: [8, 6, 5, 3, -2, -7]
