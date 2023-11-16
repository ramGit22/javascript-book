// // Sample data: A filename
// const filename = 'document.pdf'

// // Function to extract the file extension
// function getFileExtension(filename) {
//   // Find the last index of '.'
//   const index = filename.lastIndexOf('.')

//   // Extract the substring from after the '.' to the end
//   // If there is no '.', return an empty string
//   return index !== -1 ? filename.substring(index + 1) : ''
// }

// // Get the file extension
// const extension = getFileExtension(filename)
// console.log(extension) // Expected Output: pdf
// Function to extract the file extension using a loop

// Sample data: A filename
const filename = 'document.pdf'
function getFileExtension(filename) {
  let extension = ''
  let i = filename.length - 1

  // Loop backwards through the filename
  while (i >= 0 && filename[i] !== '.') {
    // Prepend the current character to the extension
    extension = filename[i] + extension
    i--
  }

  return extension
}

// Get the file extension
const extension = getFileExtension(filename)
console.log(extension) // Expected Output: pdf
