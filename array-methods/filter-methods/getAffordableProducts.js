// Define an array of products with their names and prices.
const products = [
  { name: 'Laptop', price: 150 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 50 },
]

// Define a function to filter products based on their price.
function getAffordableProducts(products) {
  // Use the filter() method on the products array to filter products.
  // The filter() method creates a new array with all elements that pass the test provided by the callback function.
  return products.filter((product) => {
    // Check if the product's price is less than or equal to 100.
    // If true, the product will be included in the resulting array.
    return product.price <= 100
  })
}

// Call the getAffordableProducts function and store the result in the affordableProducts variable.
const affordableProducts = getAffordableProducts(products)

// Log the filtered products to the console.
console.log(affordableProducts)

// // Define an array of products with their names and prices.
// const products = [
//   { name: 'Laptop', price: 150 },
//   { name: 'Mouse', price: 25 },
//   { name: 'Keyboard', price: 50 },
// ]

// // Define a function to filter products based on their price using a loop.
// function getAffordableProducts(products) {
//   // Initialize an empty array to store the affordable products.
//   let affordableProducts = []

//   // Use a for loop to iterate over each product in the products array.
//   for (let i = 0; i < products.length; i++) {
//     // Check if the current product's price is less than or equal to 100.
//     if (products[i].price <= 100) {
//       // If the condition is met, add the current product to the affordableProducts array.
//       affordableProducts.push(products[i])
//     }
//   }

//   // Return the filtered list of affordable products.
//   return affordableProducts
// }

// // Call the getAffordableProducts function and store the result in the affordableProducts variable.
// const affordableProductsList = getAffordableProducts(products)

// // Log the filtered products to the console.
// console.log(affordableProductsList)
