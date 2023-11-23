// Sample data: A value
const value = 123.45

// Function to check if a value is an integer
function isInteger(value) {
  // Use Number.isInteger() to check if the value is an integer
  return Number.isInteger(value)
}

// Check if the value is an integer and store the result in 'check'
const check = isInteger(value)

// Output the result to the console
console.log(check) // Expected Output: false
