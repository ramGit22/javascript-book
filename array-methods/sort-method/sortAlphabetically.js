// // Sample data: An array of words
// const words = ['apple', 'Banana', 'cherry', 'Date']

// // Function to sort the words alphabetically
// function sortAlphabetically(words) {
//   // Using sort() for a case-sensitive alphabetical sort
//   return words.sort()
// }

// // Call the 'sortAlphabetically' function with 'words' as an argument and
// // store the result in a new constant named 'sortedWords'
// const sortedWords = sortAlphabetically(words)

// // Output the 'sortedWords' to the console
// console.log(sortedWords) // Expected Output: ["Banana", "Date", "apple", "cherry"]
// Sample data: An array of words
const words = ['apple', 'Banana', 'cherry', 'Date']

// Function to sort the words alphabetically using insertion sort
function sortAlphabetically(words) {
  for (let i = 1; i < words.length; i++) {
    let currentWord = words[i]
    let j = i - 1

    // Compare 'currentWord' with the sorted part of the array and insert it in the correct position
    while (j >= 0 && words[j] > currentWord) {
      words[j + 1] = words[j]
      j--
    }
    words[j + 1] = currentWord
  }
  return words
}

// Call the 'sortAlphabetically' function with 'words' as an argument and
// store the result in a new constant named 'sortedWords'
const sortedWords = sortAlphabetically(words)

// Output the 'sortedWords' to the console
console.log(sortedWords) // Expected Output: ["Banana", "Date", "apple", "cherry"]
