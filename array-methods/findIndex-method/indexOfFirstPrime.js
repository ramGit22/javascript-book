// // Sample data: An array of numbers
// const numbers = [4, 6, 8, 11, 13]

// // Helper function to check if a number is prime
// function isPrime(num) {
//   if (num <= 1) return false // Numbers less than or equal to 1 are not prime
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false // If divisible by any number other than 1 and itself, not prime
//   }
//   return true // Otherwise, the number is prime
// }

// // Function to find the index of the first prime number in an array
// function findIndexOfFirstPrime(numbers) {
//   // Use findIndex() with the isPrime helper function
//   return numbers.findIndex(isPrime)
// }

// // Call the 'findIndexOfFirstPrime' function with 'numbers' as an argument and
// // store the result in a new constant named 'indexOfFirstPrime'
// const indexOfFirstPrime = findIndexOfFirstPrime(numbers)

// // Output the 'indexOfFirstPrime' to the console
// console.log(indexOfFirstPrime) // Expected Output: 3
// Sample data: An array of numbers
const numbers = [4, 6, 8, 11, 13]

// Helper function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false // Numbers less than or equal to 1 are not prime
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false // If divisible by any number other than 1 and itself, not prime
  }
  return true // Otherwise, the number is prime
}

// Function to find the index of the first prime number in an array using a loop
function findIndexOfFirstPrime(numbers) {
  // Iterate through each number in the array
  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      return i // Return the index of the first prime number found
    }
  }
  return -1 // Return -1 if no prime number is found
}

// Call the 'findIndexOfFirstPrime' function with 'numbers' as an argument and
// store the result in a new constant named 'indexOfFirstPrime'
const indexOfFirstPrime = findIndexOfFirstPrime(numbers)

// Output the 'indexOfFirstPrime' to the console
console.log(indexOfFirstPrime) // Expected Output: 3
