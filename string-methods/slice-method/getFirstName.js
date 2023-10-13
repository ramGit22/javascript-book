// // Define a string constant named 'fullName' with the value 'John Doe'
// const fullName = 'John Doe'

// // Define a function named 'getFirstName' that takes a parameter 'fullName'
// function getFirstName(fullName) {
//   // Use the 'indexOf' method to find the position of the first space character in 'fullName'
//   // and store it in a constant named 'indexOfSpace'
//   const indexOfSpace = fullName.indexOf(' ')

//   // Use the 'slice' method to extract a substring from 'fullName'
//   // that starts at index 0 and ends at 'indexOfSpace',
//   // and store it in a constant named 'firstName'
//   const firstName = fullName.slice(0, indexOfSpace)

//   // Return the 'firstName' string as the result of the function
//   return firstName
// }

// // Call the 'getFirstName' function with 'fullName' as an argument and
// // store the result in a new constant named 'firstName'
// const firstName = getFirstName(fullName)

// // Output the 'firstName' to the console
// console.log(firstName)

//Solution using 'For' loop
// Define a string constant named 'fullName' with the value 'John Doe'
const fullName = 'John Doe'

// Define a function named 'getFirstName' that takes a parameter 'fullName'
function getFirstName(fullName) {
  // Initialize an empty string variable 'firstName' to store the first name
  let firstName = ''

  // Use a 'for' loop to iterate through each character of the 'fullName' string
  for (let i = 0; i < fullName.length; i++) {
    // Check if the current character is a space (' ')
    if (fullName[i] === ' ') {
      // If it is, break out of the loop early,
      // because we've reached the end of the first name
      break
    }
    // If it's not a space, concatenate (add) the current character to 'firstName'
    firstName += fullName[i]
  }
  // Return the 'firstName' string as the result of the function
  return firstName
}

// Call the 'getFirstName' function with 'fullName' as an argument and
// store the result in a new constant named 'firstName'
const firstName = getFirstName(fullName)

// Output the 'firstName' to the console
console.log(firstName)
