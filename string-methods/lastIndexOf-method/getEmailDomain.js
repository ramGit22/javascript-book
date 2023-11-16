// // Sample data: An email address
// const email = 'john.doe@example.com'

// // Function to extract the domain from the email
// function getEmailDomain(email) {
//   // Find the last index of '@'
//   const index = email.lastIndexOf('@')

//   // Extract the substring from after the '@' to the end
//   return index !== -1 ? email.substring(index + 1) : ''
// }

// // Get the email domain
// const domain = getEmailDomain(email)
// console.log(domain) // Expected Output: example.com
// Function to extract the domain from the email using a loop

// Sample data: An email address
const email = 'john.doe@example.com'

// Function to extract the domain from the email
function getEmailDomain(email) {
  let domain = ''
  let i = email.length - 1

  // Loop backwards through the email
  while (i >= 0) {
    if (email[i] === '@') {
      // Once '@' is found, break the loop
      break
    }
    // Prepend the current character to the domain
    domain = email[i] + domain
    i--
  }

  return domain
}

// Get the email domain
const domain = getEmailDomain(email)
console.log(domain) // Expected Output: example.com
