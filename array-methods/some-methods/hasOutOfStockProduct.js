// // Sample data: Array of products
// const products = [
//   { name: 'Laptop', stockQuantity: 5 },
//   { name: 'Mouse', stockQuantity: 0 },
//   { name: 'Keyboard', stockQuantity: 7 },
// ]

// // Function to check if any product is out of stock
// function hasOutOfStockProduct(products) {
//   // Using some() to check if any product has a stock quantity of 0
//   return products.some((product) => product.stockQuantity === 0)
// }

// // Check if any product is out of stock
// const isOutOfStock = hasOutOfStockProduct(products)
// console.log(isOutOfStock) // Output: true
// Sample data: Array of products
const products = [
  { name: 'Laptop', stockQuantity: 5 },
  { name: 'Mouse', stockQuantity: 0 },
  { name: 'Keyboard', stockQuantity: 7 },
]

// Function to check if any product is out of stock using a loop
function hasOutOfStockProduct(products) {
  // Loop through each product in the products array
  for (let i = 0; i < products.length; i++) {
    // Check if the stock quantity of the product is 0
    if (products[i].stockQuantity === 0) {
      // Return true if an out-of-stock product is found
      return true
    }
  }
  // Return false if no out-of-stock products are found
  return false
}

// Check if any product is out of stock
const isOutOfStock = hasOutOfStockProduct(products)
console.log(isOutOfStock) // Output: true
