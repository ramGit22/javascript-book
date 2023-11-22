// // Sample data: An array of fruits
// const fruits = ['apple', 'banana', 'cherry']

// // Function to create a comma-separated list from an array of fruits
// function createList(fruits) {
//   // Use join() with a comma as the separator to create the list
//   return fruits.join(',')
// }

// // Call the 'createList' function with 'fruits' as an argument and
// // store the result in a new constant named 'fruitList'
// const fruitList = createList(fruits)

// // Output the 'fruitList' to the console
// console.log(fruitList) // Expected Output: apple,banana,cherry
// Sample data: An array of fruits
const fruits = ['apple', 'banana', 'cherry']

// Function to create a comma-separated list from an array of fruits
function createList(fruits) {
  let fruitList = ''

  // Iterate through the fruits array
  for (let i = 0; i < fruits.length; i++) {
    // Concatenate each fruit to the fruitList
    fruitList += fruits[i]

    // Add a comma after each fruit except the last one
    if (i < fruits.length - 1) {
      fruitList += ','
    }
  }

  return fruitList
}

// Call the 'createList' function with 'fruits' as an argument and
// store the result in a new constant named 'fruitList'
const fruitList = createList(fruits)

// Output the 'fruitList' to the console
console.log(fruitList) // Expected Output: "apple,banana,cherry"
