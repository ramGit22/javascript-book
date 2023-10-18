// Define an array of words to search for the first capitalized word
const words = ['apple', 'Banana', 'cherry', 'Date']

// Define a function to find the first capitalized word
function findFirstCapitalizedWord(words) {
  // Use the find() method to search for the first capitalized word
  const capitalizedWord = words.find((word) => {
    // Check if the first character of the word is uppercase
    return word[0] === word[0].toUpperCase()
  })

  // Return the first capitalized word found, or undefined if none is found
  return capitalizedWord
}

// Call the findFirstCapitalizedWord function with the words array
const capitalizedWord = findFirstCapitalizedWord(words)

// Output the result, which is the first capitalized word found
console.log(capitalizedWord)

// // Define an array of words to search for the first capitalized word
// const words = ['apple', 'Banana', 'cherry', 'Date']

// // Define a function to find the first capitalized word using double for loops
// function findFirstCapitalizedWord(words) {
//   // Iterate through each word in the array
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i]

//     // Iterate through each character in the word
//     for (let j = 0; j < word.length; j++) {
//       const char = word[j]

//       // Check if the character is uppercase
//       if (char === char.toUpperCase()) {
//         // Return the capitalized word and exit the loops
//         return word
//       }
//     }
//   }

//   // If no capitalized word is found, return undefined
//   return undefined
// }

// // Call the findFirstCapitalizedWord function with the words array
// const capitalizedWord = findFirstCapitalizedWord(words)

// // Output the result, which is the first capitalized word found
// console.log(capitalizedWord)
