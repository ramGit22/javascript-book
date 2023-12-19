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
//     // Find the maximum price for the product
//     const maxPrice = Math.max(...product.prices)

//     // Calculate normalized prices using the provided formula
//     // Normalized Price = ((Actual Price - Minimum Price) / (Maximum Price - Minimum Price)) * 100
//     const normalizedPrices = product.prices.map((price) => {
//       return ((price - minPrice) / (maxPrice - minPrice)) * 100
//     })

//     // Returning the modified product object with the new normalizedPrices property
//     // which now contains the calculated normalized prices for each seller
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
    // Find the minimum and maximum prices for the product
    const minPrice = Math.min(...product.prices)
    const maxPrice = Math.max(...product.prices)

    // Initialize an array to store the normalized prices
    let normalizedPrices = []

    // Loop through the product's prices to calculate normalized prices
    for (let price of product.prices) {
      // Apply the normalization formula for each price
      // Normalized Price = ((Actual Price - Minimum Price) / (Maximum Price - Minimum Price)) * 100
      const normalizedPrice = ((price - minPrice) / (maxPrice - minPrice)) * 100
      // Add the normalized price to the normalizedPrices array
      normalizedPrices.push(normalizedPrice)
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
