// // Function to extract the protocol from a given URL
// function getProtocol(url) {
//   // Find the index of '://'
//   // The indexOf method returns the position of the first occurrence of '://' in the URL string
//   const indexOfProtocol = url.indexOf('://')

//   // Use slice() to extract the protocol part of the URL
//   // The slice method is called with two arguments: the start index (0) and the end index (indexOfProtocol)
//   // It extracts a portion of the URL string from the start index up to, but not including, the end index
//   // In this case, it extracts the substring from the beginning of the URL up to '://'
//   return url.slice(0, indexOfProtocol)
// }

// // Sample URL
// const url = 'https://www.example.com'

// // Call the getProtocol function and pass the URL as an argument
// // The function returns the protocol part of the URL
// const protocol = getProtocol(url)

// // Output the extracted protocol to the console
// console.log(protocol) // Expected Output: 'https'

// Function to extract the protocol from a given URL
function getProtocol(url) {
  let protocol = ''

  // Iterate through each character in the URL string
  for (let i = 0; i < url.length; i++) {
    // If the current and next two characters form the '://' delimiter,
    // stop building the protocol string
    if (url.substring(i, i + 3) === '://') {
      break
    }

    // Append the current character to the protocol string
    protocol += url[i]
  }

  return protocol
}

// Sample URL
const url = 'https://www.example.com'

// Call the getProtocol function with the URL as an argument
// The function processes the URL and extracts the protocol
const protocol = getProtocol(url)

// Output the extracted protocol to the console
console.log(protocol) // Expected Output: 'https'
