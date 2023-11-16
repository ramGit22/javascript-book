// // Sample data: A URL
// const url = 'https://www.example.com'

// // Function to check if the URL uses "https" protocol
// function usesHttps(url) {
//   // Check if the URL starts with "https"
//   return url.indexOf('https://') === 0
// }

// // Check if the URL is https
// const isHttps = usesHttps(url)
// console.log(isHttps) // Output: true

// Sample data: A URL (same as above)
const url = 'https://www.example.com'

// Function to check if the URL uses "https" protocol using a loop
function usesHttps(url) {
  const protocol = 'https://'
  for (let i = 0; i < protocol.length; i++) {
    if (url[i] !== protocol[i]) {
      return false // The URL does not start with "https"
    }
  }
  return true // The URL starts with "https"
}

// Check if the URL is https using a loop
const isHttps = usesHttps(url)
console.log(isHttps) // Output: true
