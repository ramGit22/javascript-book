// // Sample data: An email address
// const email = 'john.doe@example.com'

// // Function to extract the domain from an email address
// function getDomain(email) {
//   // Find the position of the '@' character
//   let atIndex = email.indexOf('@')

//   // Use slice() to extract the domain, starting from the character after '@'
//   return email.slice(atIndex + 1)
// }

// // Call the 'getDomain' function with 'email' as an argument and
// // store the result in a new constant named 'domain'
// const domain = getDomain(email)

// // Output the 'domain' to the console
// console.log(domain) // Expected Output: example.com
// Sample data: An email address
const email = 'john.doe@example.com'

// Function to manually extract the domain from an email address
function getDomain(email) {
  let domain = ''
  let atFound = false // Flag to indicate if '@' has been found

  // Iterate through each character in the email string
  for (let i = 0; i < email.length; i++) {
    // Once '@' is found, start building the domain string
    if (atFound) {
      domain += email[i]
    }
    // Check if current character is '@' and set the flag
    if (email[i] === '@') {
      atFound = true
    }
  }

  return domain // Return the domain string
}

// Call the 'getDomain' function with 'email' as an argument and
// store the result in a new constant named 'domain'
const domain = getDomain(email)

// Output the 'domain' to the console
console.log(domain) // Expected Output: example.com
