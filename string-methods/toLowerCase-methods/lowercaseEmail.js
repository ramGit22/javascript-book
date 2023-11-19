// // Sample data: An email address
// const email = 'John.Doe@Example.com'

// // Function to convert the email address to lowercase
// function lowercaseEmail(email) {
//   // Converting the email address to lowercase
//   return email.toLowerCase()
// }

// // Convert the email address to lowercase for standardization
// const standardizedEmail = lowercaseEmail(email)
// console.log(standardizedEmail) // Expected Output: john.doe@example.com

// Sample data: An email address
const email = 'John.Doe@Example.com'

// Function to convert the email address to lowercase manually
function lowercaseEmail(email) {
  let lowercasedEmail = ''

  // Loop through each character in the email
  for (let i = 0; i < email.length; i++) {
    // Get the ASCII code of the current character
    const charCode = email.charCodeAt(i)

    // Check if the character is an uppercase letter
    if (charCode >= 65 && charCode <= 90) {
      // Convert to lowercase by adding 32 to the ASCII code
      lowercasedEmail += String.fromCharCode(charCode + 32)
    } else {
      // If it's not an uppercase letter, add the character as is
      lowercasedEmail += email[i]
    }
  }

  return lowercasedEmail
}

// Convert the email address to lowercase using the alternative method
const standardizedEmail = lowercaseEmail(email)
console.log(standardizedEmail) // Expected Output: john.doe@example.com
