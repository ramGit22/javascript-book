// // Sample data: A string
// const string = 'JavaScript is fun'

// // Function to replace all spaces with dashes
// function replaceSpaces(string) {
//   // Using replace() with a regular expression to match all spaces
//   // The '/ /g' is a regular expression where:
//   // ' ' (space) is the pattern to match
//   // 'g' is the global modifier to match all occurrences of the pattern
//   return string.replace(/ /g, '-')
// }

// // Replace spaces with dashes
// const dashedString = replaceSpaces(string)
// console.log(dashedString) // Expected Output: JavaScript-is-fun
// Sample data: A string
const string = 'JavaScript is fun'

// Function to replace all spaces with dashes using a loop
function replaceSpaces(string) {
  let result = '' // Initialize an empty string to build the result

  // Loop through each character in the string
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      // If the current character is a space, append a dash to the result
      result += '-'
    } else {
      // Otherwise, append the current character to the result
      result += string[i]
    }
  }

  return result // Return the final string with spaces replaced by dashes
}

// Replace spaces with dashes
const dashedString = replaceSpaces(string)
console.log(dashedString) // Expected Output: JavaScript-is-fun
