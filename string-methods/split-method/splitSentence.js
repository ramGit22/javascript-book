// // Sample data: A sentence
// const sentence = 'JavaScript is fun'

// // Function to split the sentence into an array of words
// function splitSentence(sentence) {
//   // Splitting the sentence on spaces
//   return sentence.split(' ')
// }

// // Splitting the sentence into words
// const words = splitSentence(sentence)
// console.log(words) // Expected Output: ["JavaScript", "is", "fun"]
// Sample data: A sentence
const sentence = 'JavaScript is fun'

// Function to split the sentence into an array of words using a loop
function splitSentence(sentence) {
  let words = []
  let currentWord = ''

  // Loop through each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ' || i === sentence.length - 1) {
      // Add the last character to the current word if it's the end of the sentence
      if (i === sentence.length - 1) {
        currentWord += sentence[i]
      }
      // Add the current word to the words array and reset currentWord
      if (currentWord.length > 0) {
        words.push(currentWord)
        currentWord = ''
      }
    } else {
      // Build the current word
      currentWord += sentence[i]
    }
  }

  return words
}

// Splitting the sentence into words
const words = splitSentence(sentence)
console.log(words) // Expected Output: ["JavaScript", "is", "fun"]
