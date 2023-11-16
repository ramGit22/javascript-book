// // Sample data: A URL query string
// const queryString = 'name=John&age=30&gender=Male'

// // Function to split the query string into an array of key-value pairs
// function splitQueryString(query) {
//   // Splitting the query string on '&'
//   return query.split('&')
// }

// // Splitting the query string into parameters
// const parameters = splitQueryString(queryString)
// console.log(parameters) // Expected Output: ["name=John", "age=30", "gender=Male"]

// Sample data: A URL query string
const queryString = 'name=John&age=30&gender=Male'
// Function to manually parse the query string into an array of key-value pairs
function splitQueryString(query) {
  let parameters = []
  let currentPair = ''

  // Loop through each character in the query string
  for (let i = 0; i < query.length; i++) {
    if (query[i] === '&' || i === query.length - 1) {
      // Append the last character if it's the end of the query string
      if (i === query.length - 1) {
        currentPair += query[i]
      }
      // Add the current pair to the parameters array
      parameters.push(currentPair)
      // Reset currentPair for the next key-value pair
      currentPair = ''
    } else {
      // Build the current key-value pair
      currentPair += query[i]
    }
  }

  return parameters
}

// Parsing the query string into parameters
const parameters = splitQueryString(queryString)
console.log(parameters) // Expected Output: ["name=John", "age=30", "gender=Male"]
