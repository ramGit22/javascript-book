// Sample data: An array of characters
const characters = ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

// Function to create a dashed string from an array of characters
function createDashedString(characters) {
  // Use join() with a dash as the separator to create the string
  return characters.join('-')
}

// Call the 'createDashedString' function with 'characters' as an argument and
// store the result in a new constant named 'dashedString'
const dashedString = createDashedString(characters)

// Output the 'dashedString' to the console
console.log(dashedString) // Expected Output: J-a-v-a-S-c-r-i-p-t
// // Sample data: An array of characters
// const characters = ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

// // Function to create a dashed string from an array of characters
// function createDashedString(characters) {
//   let dashedString = ''

//   // Iterate through the characters array
//   for (let i = 0; i < characters.length; i++) {
//     // Append each character to the dashedString
//     dashedString += characters[i]

//     // Add a dash after each character except the last one
//     if (i < characters.length - 1) {
//       dashedString += '-'
//     }
//   }

//   return dashedString
// }

// // Call the 'createDashedString' function with 'characters' as an argument and
// // store the result in a new constant named 'dashedString'
// const dashedString = createDashedString(characters)

// // Output the 'dashedString' to the console
// console.log(dashedString) // Expected Output: J-a-v-a-S-c-r-i-p-t
