// // Define a string constant named 'sentence' with the value 'JavaScript is fun'
// const sentence = 'JavaScript is fun'

// // Define a function named 'splitSentence' that takes a parameter 'sentence'
// function splitSentence(sentence) {
//   // Use the 'split' method to divide the 'sentence' string into an array of words,
//   // using a space character (' ') as the delimiter,
//   // and return the resulting array
//   return sentence.split(' ')
// }

// // Call the 'splitSentence' function with 'sentence' as an argument and
// // store the result in a new constant named 'words'
// const words = splitSentence(sentence)

// // Output the 'words' array to the console
// // Expected Output: ["JavaScript", "is", "fun"]
// console.log(words)

// Define a string constant named 'sentence' with the value 'JavaScript is fun'
const sentence = 'JavaScript is fun'

// Define a function named 'splitSentence' that takes a parameter 'sentence'
function splitSentence(sentence) {
  // Initialize an empty array named 'words' to store the words from the sentence
  const words = []
  // Initialize a variable named 'currentWord' with an empty string to store characters of the current word being processed
  let currentWord = ''

  // Use a 'for' loop to iterate through each character of the 'sentence' string
  for (let i = 0; i < sentence.length; i++) {
    // Check if the current character is not a space (' ')
    if (sentence[i] !== ' ') {
      // If it's not a space, concatenate (add) the current character to 'currentWord'
      currentWord += sentence[i]
    }
    // Check if the current character is a space or if it's the last character in the sentence
    if (sentence[i] === ' ' || i === sentence.length - 1) {
      // If it is, push (add) 'currentWord' to the 'words' array
      words.push(currentWord)
      // Reset 'currentWord' to an empty string to store the next word
      currentWord = ''
    }
  }
  // Return the 'words' array as the result of the function
  return words
}

// Call the 'splitSentence' function with 'sentence' as an argument and
// store the result in a new constant named 'words'
const words = splitSentence(sentence)

// Output the 'words' array to the console
// Expected Output: ["JavaScript", "is", "fun"]
console.log(words)
