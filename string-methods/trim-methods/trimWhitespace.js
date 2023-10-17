// Define a sample string with leading and trailing spaces.
const string = '   JavaScript is fun   '

// Define a function to trim leading and trailing whitespace from a given string.
function trimWhitespace(string) {
  // The trim() method returns a new string with both leading and trailing whitespace removed.
  // It doesn't modify the original string.
  return string.trim()
}

// Call the trimWhitespace function with the sample string and store the result.
const trimmedString = trimWhitespace(string)

// Display the trimmed string in the console.
console.log(trimmedString)

// // Define a sample string with leading and trailing spaces.
// const string = '   Javascript is fun   '

// // Define a function to trim leading and trailing whitespace from a given string.
// function trimWhitespace(string) {
//   // Initialize startIndex at the beginning of the string.
//   let startIndex = 0

//   // Initialize endIndex at the end of the string.
//   let endIndex = string.length - 1

//   // Increment startIndex as long as the character at the current startIndex is a space.
//   // This loop will stop when it finds the first non-space character or reaches the end of the string.
//   while (string[startIndex] === ' ') {
//     startIndex++
//   }

//   // Decrement endIndex as long as the character at the current endIndex is a space.
//   // This loop will stop when it finds the last non-space character or reaches the beginning of the string.
//   while (string[endIndex] === ' ') {
//     endIndex--
//   }

//   // Extract the substring from startIndex to endIndex using the slice method.
//   // Since slice does not include the character at the endIndex, we add 1 to include it.
//   const finalString = string.slice(startIndex, endIndex + 1)

//   // Return the trimmed string.
//   return finalString
// }

// // Call the trimWhitespace function with the sample string and store the result.
// const trimmedString = trimWhitespace(string)

// // Display the trimmed string in the console.
// console.log(trimmedString)
