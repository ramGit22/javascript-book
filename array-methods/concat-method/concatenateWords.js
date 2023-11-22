// // Sample data: Two arrays of words
// const fruits = ['apple', 'banana', 'cherry']
// const vegetables = ['carrot', 'pea', 'potato']

// // Function to concatenate two arrays of words
// function concatenateWords(arr1, arr2) {
//   // Use concat() to combine arr1 and arr2 into a new array
//   return arr1.concat(arr2)
// }

// // Call the 'concatenateWords' function with 'fruits' and 'vegetables' as arguments and
// // store the result in a new constant named 'foods'
// const foods = concatenateWords(fruits, vegetables)

// // Output the 'foods' to the console
// console.log(foods) // Expected Output: ["apple", "banana", "cherry", "carrot", "pea", "potato"]
// Sample data: Two arrays of words
const fruits = ['apple', 'banana', 'cherry']
const vegetables = ['carrot', 'pea', 'potato']

// Function to manually concatenate two arrays of words
function concatenateWords(arr1, arr2) {
  let combinedArray = []

  // Add all elements of arr1 to combinedArray
  for (let i = 0; i < arr1.length; i++) {
    combinedArray.push(arr1[i])
  }

  // Add all elements of arr2 to combinedArray
  for (let i = 0; i < arr2.length; i++) {
    combinedArray.push(arr2[i])
  }

  return combinedArray
}

// Call the 'concatenateWords' function with 'fruits' and 'vegetables' as arguments and
// store the result in a new constant named 'foods'
const foods = concatenateWords(fruits, vegetables)

// Output the 'foods' to the console
console.log(foods) // Expected Output: ["apple", "banana", "cherry", "carrot", "pea", "potato"]
