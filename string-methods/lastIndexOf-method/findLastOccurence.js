// // Sample data: A sentence
// const sentence = 'I ate an apple. Then I bought another apple.'

// // Function to find the last occurrence of "apple"
// function findLastOccurrence(sentence) {
//   // Using lastIndexOf() to find the last index of "apple"
//   return sentence.lastIndexOf('apple')
// }

// // Finding the last position of "apple"
// const lastPosition = findLastOccurrence(sentence)
// console.log(lastPosition) // Expected Output: 38

// Sample data: A sentence
const sentence = 'I ate an apple. Then I bought another apple.'

// Function to find the last occurrence of "apple" using a loop
function findLastOccurrence(sentence) {
  let lastPosition = -1

  // Loop through the sentence
  for (let i = 0; i <= sentence.length - 'apple'.length; i++) {
    // Extract the substring from the current position
    const substring = sentence.substring(i, i + 'apple'.length)

    // Check if the substring matches "apple"
    if (substring === 'apple') {
      // Update the last position of "apple"
      lastPosition = i
    }
  }

  return lastPosition
}

// Finding the last position of "apple"
const lastPosition = findLastOccurrence(sentence)
console.log(lastPosition) // Expected Output: 38
