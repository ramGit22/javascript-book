// // Sample data: Text string
// const text = 'apple banana apple orange banana apple'

// // Function to find the frequency of each word in the text
// function findMostFrequentWords(text) {
//   // Split the text into words
//   const words = text.split(' ')

//   // Using reduce() to calculate the frequency of each word
//   return words.reduce((frequencies, word) => {
//     // If the word is already in the object, increment its count
//     // Otherwise, set its count to 1
//     frequencies[word] = (frequencies[word] || 0) + 1
//     return frequencies
//   }, {}) // Start with an empty object
// }

// // Testing the function
// const wordFrequencies = findMostFrequentWords(text)
// console.log('Word Frequencies:', wordFrequencies)
// Sample data: Text string
const text = 'apple banana apple orange banana apple'

// Function to find the frequency of each word in the text using a loop
function findMostFrequentWords(text) {
  // Split the text into words
  const words = text.split(' ')

  // Initialize an object to store the word frequencies
  let frequencies = {}

  // Loop through each word in the words array
  for (let i = 0; i < words.length; i++) {
    // If the word is already in the frequencies object, increment its count
    if (frequencies[words[i]]) {
      frequencies[words[i]] += 1
    } else {
      // Otherwise, set its count to 1
      frequencies[words[i]] = 1
    }
  }

  // Return the object containing the word frequencies
  return frequencies
}

// Testing the function
const wordFrequencies = findMostFrequentWords(text)
console.log('Word Frequencies:', wordFrequencies) // Output: { apple: 3, banana: 2, orange: 1 }
