// // Sample data: A string
// const string = 'JavaScript'

// // Function to extract the last 3 characters of a string
// function getLast3Chars(string) {
//   // Use slice() with a negative index to get the last 3 characters
//   return string.slice(-3)
// }

// // Call the 'getLast3Chars' function with 'string' as an argument and
// // store the result in a new constant named 'last3Chars'
// const last3Chars = getLast3Chars(string)

// // Output the 'last3Chars' to the console
// console.log(last3Chars) // Expected Output: ipt
// Sample data: A string
const string = 'JavaScript'

// Function to manually extract the last 3 characters of a string using a loop
function getLast3Chars(str) {
  let last3Chars = ''

  // Start looping from the length of the string minus 3
  for (let i = str.length - 3; i < str.length; i++) {
    // Append each of the last three characters to 'last3Chars'
    last3Chars += str[i]
  }

  return last3Chars
}

// Call the 'getLast3Chars' function with 'string' as an argument and
// store the result in a new constant named 'last3Chars'
const last3Chars = getLast3Chars(string)

// Output the 'last3Chars' to the console
console.log(last3Chars) // Expected Output: ipt
