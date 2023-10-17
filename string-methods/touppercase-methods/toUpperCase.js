// Declare a constant named 'string' and assign the value 'javascript' to it.
const string = 'javascript'

// Define a function named 'convertToUppercase' that takes a single argument 'string'.
function convertToUppercase(string) {
  // Use the built-in toUpperCase() method to convert the entire input string to uppercase.
  // Return the uppercase version of the string.
  return string.toUpperCase()
}

// Call the 'convertToUppercase' function with the 'string' constant as an argument.
// Store the result, which will be the uppercase version of the string, in the 'uppercasedString' constant.
const uppercasedString = convertToUppercase(string)

// Output the 'uppercasedString' to the console.
console.log(uppercasedString) // Expected Output: JAVASCRIPT

// // Initialize a constant 'string' with the value 'javascript'.
// const string = 'javascript'

// // Define a function named 'convertToUppercase' that takes a single argument 'str'.
// function convertToUppercase(str) {
//   // Create an empty string 'convertedText' to store the converted uppercase characters.
//   let convertedText = ''

//   // Loop through each character of the input string 'str'.
//   for (let i = 0; i < str.length; i++) {
//     // Get the ASCII value of the current character using charCodeAt() method.
//     const charCode = str.charCodeAt(i)

//     // Check if the ASCII value of the current character is within the range of lowercase letters.
//     // ASCII values for 'a' is 97 and for 'z' is 122.
//     if (charCode >= 97 && charCode <= 122) {
//       // If the current character is a lowercase letter, subtract 32 from its ASCII value.
//       // This is because the ASCII difference between uppercase and lowercase letters is 32.
//       // Then convert this new ASCII value back to a character using String.fromCharCode() method.
//       convertedText += String.fromCharCode(charCode - 32)
//     } else {
//       // If the current character is not a lowercase letter, append it as is to 'convertedText'.
//       convertedText += str[i]
//     }
//   }

//   // After processing all characters, return the 'convertedText' string.
//   return convertedText
// }

// // Call the 'convertToUppercase' function with the initial 'string' and store the result in 'uppercasedString'.
// const uppercasedString = convertToUppercase(string)

// // Output the 'uppercasedString' to the console.
// console.log(uppercasedString) // Outputs: JAVASCRIPT
