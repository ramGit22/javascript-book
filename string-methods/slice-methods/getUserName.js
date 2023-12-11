// Function to extract the username from an email address
function getUserName(email) {
  // Find the index of the '@' character in the email string
  // The indexOf method returns the position of the first occurrence of '@' in the email string
  const indexOfAt = email.indexOf('@')

  // Extract the username from the email using the slice method
  // The slice method is called with two arguments: the start index (0) and the end index (indexOfAt)
  // It extracts a portion of the email string from the start index up to, but not including, the end index
  // In this case, it extracts the substring from the beginning of the email up to the '@' character
  const userName = email.slice(0, indexOfAt)

  // Return the extracted username
  return userName
}

// Sample email address
const email = 'john.doe@example.com'

// Call the getUserName function and pass the email as an argument
// The function returns the username part of the email
const userName = getUserName(email)

// Output the extracted username to the console
console.log(userName) // Expected Output: 'john.doe'

// // Function to extract the username from an email address
// function getUserName(email) {
//   // Initialize an empty string to store the username
//   let userName = ''

//   // Iterate over each character in the email string
//   for (let i = 0; i < email.length; i++) {
//     // Check if the current character is '@'
//     if (email[i] === '@') {
//       // If '@' is found, stop the loop using 'break'
//       // This means the username part of the email is completely read
//       break
//     }

//     // Append the current character to the userName string
//     // This builds the username character by character
//     userName += email[i]
//   }

//   // Return the constructed username
//   // This is the part of the email before the '@' character
//   return userName
// }

// // Sample email address
// const email = 'john.doe@example.com'

// // Call the getUserName function with the email string as an argument
// // The function processes the email and extracts the username
// const userName = getUserName(email)

// // Output the extracted username to the console
// console.log(userName) // Expected Output: 'john.doe'
