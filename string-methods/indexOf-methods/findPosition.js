// // Sample data: A sentence
// const sentence = 'I love programming in JavaScript!'

// // Function to find the position of "JavaScript" in the sentence
// function findPosition(sentence) {
//   // Use indexOf() to find the index of "JavaScript"
//   return sentence.indexOf('JavaScript')
// }

// // Find the position of "JavaScript"
// const position = findPosition(sentence)
// console.log(position) // Output: 22

// Sample data: A sentence
const sentence = 'I love programming in JavaScript!'
// Function to find the position of "JavaScript" in the sentence using a loop
function findPosition(sentence) {
  // The word to find
  const word = 'JavaScript'

  // Loop through each character in the sentence
  for (let i = 0; i <= sentence.length - word.length; i++) {
    // Check if the substring from the current position matches "JavaScript"
    if (sentence.substring(i, i + word.length) === word) {
      return i // Position of "JavaScript" found
    }
  }
  return -1 // "JavaScript" not found
}

// Find the position of "JavaScript"
const position = findPosition(sentence)
console.log(position) // Output: 22
