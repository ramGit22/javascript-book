// // Sample data: A template string and a name
// const template = 'Hello, {name}!'
// const name = 'John'

// // Function to replace the placeholder with the given name
// function replacePlaceholder(template, name) {
//   // Using replace() to substitute {name} with the actual name
//   return template.replace('{name}', name)
// }

// // Replacing the placeholder and creating the greeting
// const greeting = replacePlaceholder(template, name)
// console.log(greeting) // Expected Output: Hello, John!

// Sample data: A template string and a name
const template = 'Hello, {name}!'
const name = 'John'

// Function to manually replace the placeholder using a loop
function replacePlaceholder(template, name) {
  let result = '' // Initialize an empty string to build the result
  let isPlaceholder = false // Flag to track if we are within the placeholder

  // Loop through each character in the template string
  for (let i = 0; i < template.length; i++) {
    if (template[i] === '{') {
      // When we find an opening brace, set the flag to true
      isPlaceholder = true
      // Append the name to the result, replacing the placeholder
      result += name
    } else if (template[i] === '}') {
      // When we find a closing brace, set the flag to false
      isPlaceholder = false
      continue // Skip adding the closing brace to the result
    } else if (!isPlaceholder) {
      // If not currently in a placeholder, append the character to the result
      result += template[i]
    }
    // If we are inside a placeholder, we skip adding characters until we find the closing brace
  }

  return result // Return the final string with the placeholder replaced
}

// Creating the greeting by manually replacing the placeholder
const greeting = replacePlaceholder(template, name)
console.log(greeting) // Expected Output: Hello, John!
