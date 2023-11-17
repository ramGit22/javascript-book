// // Sample data: A log level string
// const logLevel = 'info'

// // Function to log the level in uppercase
// function logUppercaseLevel(level) {
//   // Convert the level to uppercase
//   const upperCaseLevel = level.toUpperCase()

//   // Log the uppercase level
//   console.log(upperCaseLevel)
// }

// // Log the level in uppercase
// logUppercaseLevel(logLevel) // Expected Output: INFO

// Sample data: A log level string
const logLevel = 'info'

// Function to log the level in uppercase without using toUpperCase()
function logUppercaseLevel(level) {
  let upperCaseLevel = ''

  // Loop through each character in the level string
  for (let i = 0; i < level.length; i++) {
    // Get the ASCII code of the current character
    const charCode = level.charCodeAt(i)

    // Check if the character is a lowercase letter
    if (charCode >= 97 && charCode <= 122) {
      // Convert to uppercase by subtracting 32 from the ASCII code
      upperCaseLevel += String.fromCharCode(charCode - 32)
    } else {
      // If it's not a lowercase letter, add the character as is
      upperCaseLevel += level[i]
    }
  }

  // Log the uppercase level
  console.log(upperCaseLevel)
}

// Log the level in uppercase using the alternative method
logUppercaseLevel(logLevel) // Expected Output: INFO
