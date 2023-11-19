// // Sample data: A string
// const string = 'JAVASCRIPT'

// // Function to convert the string to lowercase
// function convertToLowercase(string) {
//   // Converting the string to lowercase
//   return string.toLowerCase()
// }

// // Convert the string to lowercase
// const lowercasedString = convertToLowercase(string)
// console.log(lowercasedString) // Expected Output: javascript
// Sample data: A string
const string = 'JAVASCRIPT'

// Function to convert the string to lowercase manually
function convertToLowercase(string) {
  let lowercasedString = ''

  // Loop through each character in the string
  for (let i = 0; i < string.length; i++) {
    // Get the ASCII code of the current character
    const charCode = string.charCodeAt(i)

    // Check if the character is an uppercase letter
    if (charCode >= 65 && charCode <= 90) {
      // Convert to lowercase by adding 32 to the ASCII code
      lowercasedString += String.fromCharCode(charCode + 32)
    } else {
      // If it's not an uppercase letter, add the character as is
      lowercasedString += string[i]
    }
  }

  return lowercasedString
}

// Convert the string to lowercase using the alternative method
const lowercasedString = convertToLowercase(string)
console.log(lowercasedString) // Expected Output: javascript
