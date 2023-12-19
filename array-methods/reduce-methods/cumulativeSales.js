// Sample data: Array of sales records
const sales = [
  { month: 'January', revenue: 1000 },
  { month: 'February', revenue: 1500 },
  { month: 'March', revenue: 1200 },
]

// Function to calculate cumulative sales for each month
function calculateCumulativeSales(sales) {
  // The reduce method is used to iterate over each sales record,
  // accumulating a running total of revenue, and building up an
  // object that maps each month to its cumulative sales value.
  return sales.reduce((accumulator, current, index) => {
    // If we're on the first element, there is no previous total,
    // so we start with the current revenue.
    // Otherwise, we add the current revenue to the cumulative total so far.
    const total =
      index === 0
        ? current.revenue
        : accumulator[sales[index - 1].month] + current.revenue

    // We then add this total to the accumulator object under the current month's name.
    accumulator[current.month] = total
    return accumulator // The accumulator is then returned for the next iteration.
  }, {}) // We start with an empty object as our initial accumulator value.
}

// Testing the function
const cumulativeSales = calculateCumulativeSales(sales)
console.log('Cumulative Monthly Sales:', cumulativeSales)
// // Sample data: Array of sales records
// const sales = [
//   { month: 'January', revenue: 1000 },
//   { month: 'February', revenue: 1500 },
//   { month: 'March', revenue: 1200 },
// ]

// // Function to calculate cumulative sales for each month using a loop
// function calculateCumulativeSales(sales) {
//   // Initialize an object to store the cumulative sales
//   let cumulativeSales = {}

//   // Initialize a variable to keep track of the cumulative total
//   let cumulativeTotal = 0

//   // Loop through each sale record in the sales array
//   for (let i = 0; i < sales.length; i++) {
//     // Add the current month's revenue to the cumulative total
//     cumulativeTotal += sales[i].revenue

//     // Store the cumulative total in the corresponding month key of the cumulativeSales object
//     cumulativeSales[sales[i].month] = cumulativeTotal
//   }

//   // Return the object containing the cumulative sales
//   return cumulativeSales
// }
// // Testing the function
// const cumulativeSales = calculateCumulativeSales(sales)
// console.log('Cumulative Monthly Sales:', cumulativeSales) // Output: { January: 1000, February: 2500, March: 3700 }
