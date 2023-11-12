// // Sample data: Array of products
// const products = [
//   { name: 'Laptop', unitsInStock: 5, unitPrice: 1000 },
//   { name: 'Smartphone', unitsInStock: 10, unitPrice: 500 },
//   { name: 'TV', unitsInStock: 3, unitPrice: 1500 },
//   { name: 'Headphones', unitsInStock: 15, unitPrice: 100 },
// ]

// // Function to calculate the total inventory value
// function calculateTotalInventoryValue(products) {
//   // Using reduce() to accumulate the total inventory value
//   return products.reduce((total, product) => {
//     // Calculating the inventory value for each product and adding it to the total
//     return total + product.unitsInStock * product.unitPrice
//   }, 0) // Starting the accumulation from 0
// }

// // Testing the function
// const totalInventoryValue = calculateTotalInventoryValue(products)
// console.log(`Total Inventory Value: $${totalInventoryValue}`) // Output: Total Inventory Value: $16000
// Sample data: Array of products
const products = [
  { name: 'Laptop', unitsInStock: 5, unitPrice: 1000 },
  { name: 'Smartphone', unitsInStock: 10, unitPrice: 500 },
  { name: 'TV', unitsInStock: 3, unitPrice: 1500 },
  { name: 'Headphones', unitsInStock: 15, unitPrice: 100 },
]

// Function to calculate the total inventory value using a loop
function calculateTotalInventoryValue(products) {
  // Initialize a variable to store the total inventory value
  let totalInventoryValue = 0

  // Loop through each product in the products array
  for (let i = 0; i < products.length; i++) {
    // Calculate the inventory value for each product and add it to the total
    totalInventoryValue += products[i].unitsInStock * products[i].unitPrice
  }

  // Return the total inventory value
  return totalInventoryValue
}

// Testing the function
const totalInventoryValue = calculateTotalInventoryValue(products)
console.log(`Total Inventory Value: $${totalInventoryValue}`) // Output: Total Inventory Value: $16000
