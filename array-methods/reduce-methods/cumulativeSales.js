// // Sample data: Array of sales records
// const sales = [
//   { month: 'January', revenue: 1000 },
//   { month: 'February', revenue: 1500 },
//   { month: 'March', revenue: 1200 },
// ]

// // Function to calculate cumulative sales for each month
// function calculateCumulativeSales(sales) {
//   // Using reduce() to calculate cumulative sales
//   return sales.reduce((cumulative, record, index) => {
//     // Add the current month's revenue to the total
//     // If it's the first record, the total is just the current revenue
//     const total =
//       index === 0
//         ? record.revenue
//         : cumulative[sales[index - 1].month] + record.revenue

//     // Add the cumulative total for the current month to the result object
//     cumulative[record.month] = total
//     return cumulative
//   }, {}) // Start with an empty object
// }

// // Testing the function
// const cumulativeSales = calculateCumulativeSales(sales)
// console.log('Cumulative Monthly Sales:', cumulativeSales)
// Sample data: Array of sales records
const sales = [
  { month: 'January', revenue: 1000 },
  { month: 'February', revenue: 1500 },
  { month: 'March', revenue: 1200 },
]

// Function to calculate cumulative sales for each month using a loop
function calculateCumulativeSales(sales) {
  // Initialize an object to store the cumulative sales
  let cumulativeSales = {}
  let cumulativeTotal = 0

  // Loop through each sale record in the sales array
  for (let i = 0; i < sales.length; i++) {
    // Add the current month's revenue to the cumulative total
    cumulativeTotal += sales[i].revenue

    // Store the cumulative total in the corresponding month key
    cumulativeSales[sales[i].month] = cumulativeTotal
  }

  // Return the object containing the cumulative sales
  return cumulativeSales
}

// Testing the function
const cumulativeSales = calculateCumulativeSales(sales)
console.log('Cumulative Monthly Sales:', cumulativeSales) // Output: { January: 1000, February: 2500, March: 3700 }
