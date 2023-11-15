// // Sample data: A username
// const username = 'Admin123'

// // Function to check if the first letter of the username is uppercase
// function isFirstLetterUppercase(username) {
//   // Get the first character of the username
//   const firstChar = username.charAt(0)

//   // Check if the first character is the same as its uppercase version
//   return firstChar === firstChar.toUpperCase()
// }

// // Check if the first letter is uppercase
// const isUppercase = isFirstLetterUppercase(username)
// console.log(isUppercase) // Output: true
// Sample data: A username
const username = 'Admin123'

// Function to check if the first letter of the username is uppercase using a loop
function isFirstLetterUppercase(username) {
  // Loop through the first character of the username
  for (let i = 0; i < 1; i++) {
    // Check if the first character is the same as its uppercase version
    return username[i] === username[i].toUpperCase()
  }
}

// Check if the first letter is uppercase
const isUppercase = isFirstLetterUppercase(username)
console.log(isUppercase) // Output: true
