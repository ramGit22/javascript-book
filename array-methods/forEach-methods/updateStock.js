// // Sample data: Array of products
// const products = [
//   { name: 'Laptop', stockQuantity: 5 },
//   { name: 'Mouse', stockQuantity: 10 },
//   { name: 'Keyboard', stockQuantity: 7 },
// ]

// // Function to update the stock of each product
// function updateStock(products) {
//   // Using forEach() to decrement the stock quantity of each product by 1
//   products.forEach((product) => {
//     product.stockQuantity -= 1
//   })
// }

// // Updating the stock
// updateStock(products)
// console.log(products)
// Sample data: Array of products
const products = [
  { name: 'Laptop', stockQuantity: 5 },
  { name: 'Mouse', stockQuantity: 10 },
  { name: 'Keyboard', stockQuantity: 7 },
]

// Function to update the stock of each product using a loop
function updateStock(products) {
  // Loop through each product in the products array
  for (let i = 0; i < products.length; i++) {
    // Decrement the stock quantity of each product by 1
    products[i].stockQuantity -= 1
  }
}

// Updating the stock
updateStock(products)
console.log(products)
