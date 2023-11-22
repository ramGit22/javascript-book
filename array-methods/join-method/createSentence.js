// // Sample data: An array of words
// const words = [
//   'The',
//   'quick',
//   'brown',
//   'fox',
//   'jumps',
//   'over',
//   'the',
//   'lazy',
//   'dog',
// ]

// // Function to create a sentence from an array of words
// function createSentence(words) {
//   // Use join() with a space as the separator to create a sentence
//   return words.join(' ')
// }

// // Call the 'createSentence' function with 'words' as an argument and
// // store the result in a new constant named 'sentence'
// const sentence = createSentence(words)

// // Output the 'sentence' to the console
// console.log(sentence) // Expected Output: "The quick brown fox jumps over the lazy dog"
// Sample data: An array of words
const words = [
  'The',
  'quick',
  'brown',
  'fox',
  'jumps',
  'over',
  'the',
  'lazy',
  'dog',
]

// Function to create a sentence from an array of words
function createSentence(words) {
  let sentence = ''

  // Iterate through the words array
  for (let i = 0; i < words.length; i++) {
    // Concatenate each word to the sentence
    sentence += words[i]

    // Add a space after each word except the last one
    if (i < words.length - 1) {
      sentence += ' '
    }
  }

  return sentence
}

// Call the 'createSentence' function with 'words' as an argument and
// store the result in a new constant named 'sentence'
const sentence = createSentence(words)

// Output the 'sentence' to the console
console.log(sentence) // Expected Output: "The quick brown fox jumps over the lazy dog"
