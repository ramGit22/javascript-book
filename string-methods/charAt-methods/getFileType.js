// // Sample data: A filename
// const filename = 'document.txt'

// // Function to extract the last character of the filename
// function getFileType(filename) {
//   // Use charAt() with length - 1 to get the last character
//   return filename.charAt(filename.length - 1)
// }

// // Get the file type
// const fileType = getFileType(filename)
// console.log(fileType) // Output: t
// Function to extract the last character of the filename using a loop

// Sample data: A filename
const filename = 'document.txt'
function getFileType(filename) {
  // Initialize a variable to store the last character
  let lastChar = ''

  // Loop through each character in the filename
  for (let i = 0; i < filename.length; i++) {
    // Assign the current character to lastChar
    lastChar = filename[i]
  }

  // Return the last character
  return lastChar
}

// Get the file type
const fileType = getFileType(filename)
console.log(fileType) // Output: t
