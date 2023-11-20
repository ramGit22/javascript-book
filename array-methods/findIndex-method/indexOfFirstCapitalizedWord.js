// // Sample data: An array of words
// const words = ['apple', 'Banana', 'cherry', 'Date']

// // Function to find the index of the first capitalized word in an array
// function findIndexOfFirstCapitalizedWord(words) {
//   // Use findIndex() to check for the first word starting with an uppercase letter
//   return words.findIndex(
//     (word) => word.charAt(0) === word.charAt(0).toUpperCase()
//   )
// }

// // Call the 'findIndexOfFirstCapitalizedWord' function with 'words' as an argument and
// // store the result in a new constant named 'indexOfCapitalizedWord'
// const indexOfCapitalizedWord = findIndexOfFirstCapitalizedWord(words)

// // Output the 'indexOfCapitalizedWord' to the console
// console.log(indexOfCapitalizedWord) // Expected Output: 1
// Sample data: An array of words
const words = ['apple', 'Banana', 'cherry', 'Date']

// Function to find the index of the first capitalized word in an array using a loop
function findIndexOfFirstCapitalizedWord(words) {
  // Iterate through each word in the array
  for (let i = 0; i < words.length; i++) {
    // Check if the first character of the word is uppercase
    if (words[i].charAt(0) === words[i].charAt(0).toUpperCase()) {
      return i // Return the index of the first capitalized word found
    }
  }
  return -1 // Return -1 if no capitalized word is found
}

// Call the 'findIndexOfFirstCapitalizedWord' function with 'words' as an argument and
// store the result in a new constant named 'indexOfCapitalizedWord'
const indexOfCapitalizedWord = findIndexOfFirstCapitalizedWord(words)

// Output the 'indexOfCapitalizedWord' to the console
console.log(indexOfCapitalizedWord) // Expected Output: 1
