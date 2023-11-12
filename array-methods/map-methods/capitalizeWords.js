// // Sample data: Array of words
// const words = ['apple', 'banana', 'cherry']

// // Function to capitalize the first letter of each word
// function capitalizeWords(words) {
//   // Using map() to transform each word
//   return words.map((word) => {
//     // Capitalizing the first letter and concatenating it with the rest of the word
//     return word.charAt(0).toUpperCase() + word.slice(1)
//   })
// }

// // Testing the function
// const capitalizedWords = capitalizeWords(words)
// console.log(capitalizedWords) // Output: ["Apple", "Banana", "Cherry"]
// Sample data: Array of words
const words = ['apple', 'banana', 'cherry']

// Function to capitalize the first letter of each word using a loop
function capitalizeWords(words) {
  // Initialize an empty array to store the capitalized words
  let capitalizedWords = []

  // Loop through each word in the words array
  for (let i = 0; i < words.length; i++) {
    // Capitalize the first letter and concatenate it with the rest of the word
    const capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1)

    // Add the capitalized word to the array
    capitalizedWords.push(capitalizedWord)
  }

  // Return the array of capitalized words
  return capitalizedWords
}

// Testing the function
const capitalizedWords = capitalizeWords(words)
console.log(capitalizedWords) // Output: ["Apple", "Banana", "Cherry"]
