// Sample data: Minimum and maximum range for the random number
const min = 10
const max = 50

// Function to generate a random number within a given range
function generateRandomNumber(min, max) {
  // Math.random() returns a random number between 0 and 1.
  // Multiply by (max - min + 1) to scale it to the desired range length,
  // and add min to shift the range to start from min.
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Generate a random number within the range
const randomNumber = generateRandomNumber(min, max)

// Output the random number to the console
console.log(randomNumber) // Output will vary as it's random
