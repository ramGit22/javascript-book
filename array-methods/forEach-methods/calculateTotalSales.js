// // Sample data: Array of sales
// const sales = [
//   { productName: 'Laptop', quantity: 5 },
//   { productName: 'Mouse', quantity: 10 },
//   { productName: 'Keyboard', quantity: 7 },
// ]

// // Initialize total sales to 0
// let totalSales = 0

// // Function to calculate the total number of products sold
// function calculateTotalSales(sales) {
//   // Using forEach() to iterate over each sale
//   sales.forEach((sale) => {
//     // Add the quantity of each sale to the total sales
//     totalSales += sale.quantity
//   })
// }

// // Calculate the total sales
// calculateTotalSales(sales)
// console.log(totalSales) // Output: 22
// Sample data: Array of sales
const sales = [
  { productName: 'Laptop', quantity: 5 },
  { productName: 'Mouse', quantity: 10 },
  { productName: 'Keyboard', quantity: 7 },
]

// Initialize total sales to 0
let totalSales = 0

// Function to calculate the total number of products sold using a loop
function calculateTotalSales(sales) {
  // Loop through each sale in the sales array
  for (let i = 0; i < sales.length; i++) {
    // Add the quantity of each sale to the total sales
    totalSales += sales[i].quantity
  }
}

// Calculate the total sales
calculateTotalSales(sales)
console.log(totalSales) // Output: 22
