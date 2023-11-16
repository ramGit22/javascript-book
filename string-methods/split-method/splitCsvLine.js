// // Sample data: A line from a CSV file
// const csvLine = 'John,Doe,30,Male,Engineer'

// // Function to split the CSV line into an array
// function splitCsvLine(line) {
//   // Splitting the line on commas
//   return line.split(',')
// }

// // Splitting the CSV line into values
// const values = splitCsvLine(csvLine)
// console.log(values) // Expected Output: ["John", "Doe", "30", "Male", "Engineer"]
// Sample data: A line from a CSV file
const csvLine = 'John,Doe,30,Male,Engineer'

// Function to manually parse the CSV line into an array
function splitCsvLine(line) {
  let values = []
  let currentElement = ''

  // Loop through each character in the line
  for (let i = 0; i < line.length; i++) {
    if (line[i] === ',' || i === line.length - 1) {
      // Append the last character if it's the end of the line
      if (i === line.length - 1) {
        currentElement += line[i]
      }
      // Add the current element to the values array
      values.push(currentElement)
      // Reset currentElement for the next element
      currentElement = ''
    } else {
      // Build the current element
      currentElement += line[i]
    }
  }

  return values
}

// Parsing the CSV line into values
const values = splitCsvLine(csvLine)
console.log(values) // Expected Output: ["John", "Doe", "30", "Male", "Engineer"]
