// // Sample data: An email address and a new domain
// const email = 'john.doe@example.com'
// const newDomain = 'newdomain.com'

// // Function to replace the domain of an email address
// function replaceDomain(email, newDomain) {
//   // Extract the local part of the email (before the '@')
//   const localPart = email.split('@')[0]

//   // Use replace() to substitute the entire domain part with the new domain
//   // Here, replace() is used to replace the original email's domain (after '@') with the newDomain
//   return localPart + '@' + newDomain
// }

// // Replace the domain in the email
// const newEmail = replaceDomain(email, newDomain)
// console.log(newEmail) // Expected Output: john.doe@newdomain.com

// Sample data: An email address and a new domain
const email = 'john.doe@example.com'
const newDomain = 'newdomain.com'

// Function to manually replace the domain of an email address
function replaceDomain(email, newDomain) {
  let atIndex = -1 // Variable to store the index of '@' in the email

  // Loop to find the index of '@' in the email
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      atIndex = i
      break // Break the loop once '@' is found
    }
  }

  // If '@' is not found, return the original email
  if (atIndex === -1) return email

  // Extract the local part (before '@') and concatenate with the new domain
  const localPart = email.substring(0, atIndex)
  return localPart + '@' + newDomain
}

// Replace the domain in the email
const newEmail = replaceDomain(email, newDomain)
console.log(newEmail) // Expected Output: john.doe@newdomain.com
