// // Sample data: An array of strings
// const strings = ['short', 'medium', 'very long string', 'longer']

// // Function to sort the strings by their length
// function sortByLength(strings) {
//   // Using sort() with a comparison function for length
//   return strings.sort((a, b) => a.length - b.length)
// }

// // Call the 'sortByLength' function with 'strings' as an argument and
// // store the result in a new constant named 'sortedStrings'
// const sortedStrings = sortByLength(strings)

// // Output the 'sortedStrings' to the console
// console.log(sortedStrings) // Expected Output: ["short", "medium", "longer", "very long string"]
// Sample data: An array of strings
const strings = ['short', 'medium', 'very long string', 'longer']

// Function to sort the strings by their length using bubble sort
function sortByLength(strings) {
  let n = strings.length
  let swapped

  do {
    swapped = false
    for (let i = 0; i < n - 1; i++) {
      // Compare adjacent elements by length and swap if necessary
      if (strings[i].length > strings[i + 1].length) {
        // Swap elements
        let temp = strings[i]
        strings[i] = strings[i + 1]
        strings[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)

  return strings
}

// Call the 'sortByLength' function with 'strings' as an argument and
// store the result in a new constant named 'sortedStrings'
const sortedStrings = sortByLength(strings)

// Output the 'sortedStrings' to the console
console.log(sortedStrings) // Expected Output: ["short", "medium", "longer", "very long string"]
