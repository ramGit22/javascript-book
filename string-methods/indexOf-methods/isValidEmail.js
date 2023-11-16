// // Sample data: An email address
// const email = 'john.doe@example.com'

// // Function to check if the email contains the '@' symbol
// function isValidEmail(email) {
//   // Use indexOf() to find the index of '@' in the email
//   return email.indexOf('@') !== -1
// }

// // Check if the email is valid
// const isValid = isValidEmail(email)
// console.log(isValid) // Output: true

// Sample data: An email address
const email = 'john.doe@example.com'
// Function to check if the email contains the '@' symbol using a loop
function isValidEmail(email) {
  // Loop through each character in the email
  for (let i = 0; i < email.length; i++) {
    // Check if the current character is '@'
    if (email[i] === '@') {
      return true // '@' symbol is found
    }
  }
  return false // '@' symbol is not found
}

// Check if the email is valid
const isValid = isValidEmail(email)
console.log(isValid) // Output: true
