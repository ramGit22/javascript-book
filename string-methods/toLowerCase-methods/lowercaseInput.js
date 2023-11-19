// // Sample data: A user input string
// const userInput = 'Yes'

// // Function to convert the user input to lowercase
// function lowercaseInput(input) {
//   // Converting the user input to lowercase
//   return input.toLowerCase()
// }

// // Convert the user input to lowercase for standardization
// const standardizedInput = lowercaseInput(userInput)
// console.log(standardizedInput) // Expected Output: yes

// Sample data: A user input string
const userInput = 'Yes'

// Function to convert the user input to lowercase manually
function lowercaseInput(input) {
  let lowercasedInput = ''

  // Loop through each character in the input string
  for (let i = 0; i < input.length; i++) {
    // Get the ASCII code of the current character
    const charCode = input.charCodeAt(i)

    // Check if the character is an uppercase letter
    if (charCode >= 65 && charCode <= 90) {
      // Convert to lowercase by adding 32 to the ASCII code
      lowercasedInput += String.fromCharCode(charCode + 32)
    } else {
      // If it's not an uppercase letter, add the character as is
      lowercasedInput += input[i]
    }
  }

  return lowercasedInput
}

// Convert the user input to lowercase using the alternative method
const standardizedInput = lowercaseInput(userInput)
console.log(standardizedInput) // Expected Output: yes
