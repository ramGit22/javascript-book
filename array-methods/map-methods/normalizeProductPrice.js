// // Sample data: Array of products with their names, categories, and prices
// const products = [
//   { name: 'Laptop', category: 'Electronics', prices: [900, 1000, 1100] },
//   { name: 'Smartphone', category: 'Electronics', prices: [400, 450, 500] },
//   { name: 'Shirt', category: 'Apparel', prices: [20, 25, 30] },
//   { name: 'Pants', category: 'Apparel', prices: [40, 50, 60] },
// ]

// // Function to normalize product prices
// function normalizeProductPrices(products) {
//   // Using map() to transform each product object in the array
//   return products.map((product) => {
//     // Find the minimum price for the product
//     const minPrice = Math.min(...product.prices)

//     // Calculate normalized prices relative to the minimum price
//     const normalizedPrices = product.prices.map((price) => price - minPrice)

//     // Returning the modified product object with the new normalizedPrices property
//     return { ...product, normalizedPrices }
//   })
// }

// // Testing the function
// const normalizedProducts = normalizeProductPrices(products)
// console.log(normalizedProducts)
// Sample data: Array of products with their names, categories, and prices
const products = [
  { name: 'Laptop', category: 'Electronics', prices: [900, 1000, 1100] },
  { name: 'Smartphone', category: 'Electronics', prices: [400, 450, 500] },
  { name: 'Shirt', category: 'Apparel', prices: [20, 25, 30] },
  { name: 'Pants', category: 'Apparel', prices: [40, 50, 60] },
]

// Function to normalize product prices using a loop
function normalizeProductPrices(products) {
  // Initialize an empty array to store the normalized products
  let normalizedProducts = []

  // Loop through each product in the products array
  for (let i = 0; i < products.length; i++) {
    // Access the current product
    const product = products[i]

    // Find the minimum price for the product
    let minPrice = Math.min(...product.prices)

    // Initialize an array to store the normalized prices
    let normalizedPrices = []

    // Loop through the product's prices to calculate normalized prices
    for (let j = 0; j < product.prices.length; j++) {
      normalizedPrices.push(product.prices[j] - minPrice)
    }

    // Add the normalizedPrices property to the product object
    // and push the updated object to the normalizedProducts array
    normalizedProducts.push({ ...product, normalizedPrices })
  }

  // Return the array of normalized products
  return normalizedProducts
}

// Testing the function
const normalizedProducts = normalizeProductPrices(products)
console.log(normalizedProducts)
