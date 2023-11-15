// // Sample data: Array of products
// const products = [
//   { name: 'Laptop', stockQuantity: 5 },
//   { name: 'Mouse', stockQuantity: 3 },
//   { name: 'Keyboard', stockQuantity: 7 },
// ]

// // Function to check if all products are in stock
// function areAllProductsInStock(products) {
//   // Using every() to check if every product's stockQuantity is greater than 0
//   return products.every((product) => product.stockQuantity > 0)
// }

// // Check if all products are in stock
// const allInStock = areAllProductsInStock(products)
// console.log(allInStock) // Output: true

// Sample data: Array of products (same as above)
const products = [
  { name: 'Laptop', stockQuantity: 5 },
  { name: 'Mouse', stockQuantity: 3 },
  { name: 'Keyboard', stockQuantity: 7 },
]

// Function to check if all products are in stock using a loop
function areAllProductsInStock(products) {
  // Loop through each product in the products array
  for (let i = 0; i < products.length; i++) {
    // Check if the stock quantity of the product is not greater than 0
    if (products[i].stockQuantity <= 0) {
      return false // A product is out of stock
    }
  }
  return true // All products are in stock
}

// Check if all products are in stock using a loop
const allInStock = areAllProductsInStock(products)
console.log(allInStock) // Output: true
