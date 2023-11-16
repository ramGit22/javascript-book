// // Sample data: A user input string
// const userInput = '      '

// // Function to validate non-empty input after trimming
// function isValidInput(input) {
//   // Using trim() to remove whitespace from both ends of the input
//   // Check if the trimmed input is not an empty string
//   return input.trim() !== ''
// }

// // Validate the user input
// const isValid = isValidInput(userInput)
// console.log(isValid) // Expected Output: false

// Sample data: A user input string
const userInput = '      '

// Function to validate non-empty input without using trim()
function isValidInput(input) {
  // Loop through each character in the input
  for (let i = 0; i < input.length; i++) {
    // Check if the current character is not a whitespace character
    if (
      input[i] !== ' ' &&
      input[i] !== '\n' &&
      input[i] !== '\t' &&
      input[i] !== '\r'
    ) {
      return true // Found a non-whitespace character, so input is valid
    }
  }
  return false // No non-whitespace character found, so input is invalid
}

// Validate the user input
const isValid = isValidInput(userInput)
console.log(isValid) // Expected Output: false
