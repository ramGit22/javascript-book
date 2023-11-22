// // Sample data: An array of words
// const words = ['apple', 'Banana', 'cherry', 'Date']

// // Function to replace the first word in an array with "Hello"
// function replaceFirstWord(words) {
//   // Use splice() to replace the first word
//   words.splice(0, 1, 'Hello')
//   return words
// }

// // Call the 'replaceFirstWord' function with 'words' as an argument and
// // store the result in a new constant named 'newWords'
// const newWords = replaceFirstWord(words)

// // Output the 'newWords' to the console
// console.log(newWords) // Expected Output: ["Hello", "Banana", "cherry", "Date"]
// Sample data: An array of words
const words = ['apple', 'Banana', 'cherry', 'Date']

// Function to replace the first word in an array with "Hello"
function replaceFirstWord(words) {
  let newWords = ['Hello'] // Start with an array containing "Hello"

  // Iterate through the original array starting from the second element
  for (let i = 1; i < words.length; i++) {
    // Add the rest of the words to the new array
    newWords.push(words[i])
  }

  return newWords // Return the new array with "Hello" as the first word
}

// Call the 'replaceFirstWord' function with 'words' as an argument and
// store the result in a new constant named 'newWords'
const newWords = replaceFirstWord(words)

// Output the 'newWords' to the console
console.log(newWords) // Expected Output: ["Hello", "Banana", "cherry", "Date"]
