// // Sample data: An array of numbers
// const numbers = [4, 6, 8, 11, 13]

// // Helper function to check if a number is prime
// function isPrime(num) {
//   if (num <= 1) return false // Check if the number is less than or equal to 1
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false // Check if the number has any divisors other than 1 and itself
//   }
//   return true // The number is prime
// }

// // Function to find the first prime number in an array
// function findFirstPrime(numbers) {
//   // Use find() with the isPrime function to find the first prime number
//   return numbers.find(isPrime)
// }

// // Call the 'findFirstPrime' function with 'numbers' as an argument and
// // store the result in a new constant named 'firstPrime'
// const firstPrime = findFirstPrime(numbers)

// // Output the 'firstPrime' to the console
// console.log(firstPrime) // Expected Output: 11

// Sample data: An array of numbers
const numbers = [4, 6, 8, 11, 13]

// Helper function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false // Check if the number is less than or equal to 1
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false // Check if the number has any divisors other than 1 and itself
  }
  return true // The number is prime
}

// Function to find the first prime number in an array using a loop
function findFirstPrime(numbers) {
  // Iterate through each number in the array
  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      return numbers[i] // Return the first prime number found
    }
  }
  return undefined // Return undefined if no prime number is found
}

// Call the 'findFirstPrime' function with 'numbers' as an argument and
// store the result in a new constant named 'firstPrime'
const firstPrime = findFirstPrime(numbers)

// Output the 'firstPrime' to the console
console.log(firstPrime) // Expected Output: 11
