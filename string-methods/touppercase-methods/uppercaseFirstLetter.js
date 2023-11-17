// // Sample data: A string
// const string = 'javascript'

// // Function to uppercase the first letter of the string
// function uppercaseFirstLetter(string) {
//   // Check if the string is not empty
//   if (string) {
//     // Convert the first letter to uppercase and concatenate with the rest of the string
//     return string.charAt(0).toUpperCase() + string.slice(1)
//   }
//   return string
// }

// // Convert the first letter to uppercase
// const capitalizedString = uppercaseFirstLetter(string)
// console.log(capitalizedString) // Expected Output: Javascript

// Sample data: A string
const string = 'javascript'

// Function to uppercase the first letter of the string using a loop
function uppercaseFirstLetter(string) {
  let result = ''

  // Loop through each character in the string
  for (let i = 0; i < string.length; i++) {
    // Check if it's the first character
    if (i === 0) {
      // Convert the first character to uppercase
      result += string[i].toUpperCase()
    } else {
      // Add the rest of the characters as they are
      result += string[i]
    }
  }

  return result
}

// Convert the first letter to uppercase
const capitalizedString = uppercaseFirstLetter(string)
console.log(capitalizedString) // Expected Output: Javascript
