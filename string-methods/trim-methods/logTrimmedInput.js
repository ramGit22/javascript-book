// Define a string representing user input, which has leading and trailing spaces.
const userInput = '   User input with spaces   '

// Define a function to trim leading and trailing whitespace from a given input.
function logTrimmedInput(input) {
  // The trim() method returns a new string with both leading and trailing whitespace removed.
  // It doesn't modify the original string. However, the function is currently always returning the
  // trimmed version of the `userInput` variable regardless of its `input` parameter.
  return input.trim()
}

// Call the logTrimmedInput function with the userInput string and store the result.
const trimmedInput = logTrimmedInput(userInput)

// Display the trimmed userInput string in the console.
console.log(trimmedInput)

// // Define a string representing user input, which has leading and trailing spaces.
// const userInput = '   User input with spaces   '

// // Define a function to trim leading and trailing whitespace from a given input.
// function logTrimmedInput(input) {
//   // Initialize startIndex at the beginning of the userInput string.
//   let startIndex = 0

//   // Initialize endIndex at the end of the userInput string.
//   let endIndex = userInput.length - 1

//   // Increment startIndex as long as the character at the current index of userInput is a space.
//   // This loop will stop when it finds the first non-space character or reaches the end of the string.
//   while (userInput[startIndex] === ' ') {
//     startIndex++
//   }

//   // Decrement endIndex as long as the character at the current index of userInput is a space.
//   // This loop will stop when it finds the last non-space character or reaches the beginning of the string.
//   while (userInput[endIndex] === ' ') {
//     endIndex--
//   }

//   // Extract the substring from startIndex to endIndex using the slice method.
//   // Since slice does not include the character at the endIndex, we add 1 to include it.
//   const trimmedInput = userInput.slice(startIndex, endIndex + 1)

//   // Return the trimmed userInput string.
//   return trimmedInput
// }

// // Call the logTrimmedInput function with the userInput string and store the result.
// const trimmedInput = logTrimmedInput(userInput)

// // Display the trimmed userInput string in the console.
// console.log(trimmedInput)
