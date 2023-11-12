// // Sample data: Array of products with category and brand
// const products = [
//   { name: 'A', category: 'Electronics', brand: 'Sony' },
//   { name: 'B', category: 'Electronics', brand: 'Apple' },
//   { name: 'C', category: 'Apparel', brand: 'Nike' },
//   { name: 'D', category: 'Electronics', brand: 'Sony' },
// ]

// // Function to group products by both category and brand
// function groupByCategoryAndBrand(products) {
//   // Using reduce() to group products
//   return products.reduce((grouped, product) => {
//     // If the category doesn't exist yet, create it
//     if (!grouped[product.category]) {
//       grouped[product.category] = {}
//     }
//     // If the brand within the category doesn't exist, create it
//     if (!grouped[product.category][product.brand]) {
//       grouped[product.category][product.brand] = []
//     }
//     // Add the product name to the corresponding brand array
//     grouped[product.category][product.brand].push(product.name)
//     return grouped
//   }, {}) // Start with an empty object
// }

// // Testing the function
// const groupedProducts = groupByCategoryAndBrand(products)
// console.log('Products Grouped by Category and Brand:', groupedProducts)
// Sample data: Array of products with category and brand
const products = [
  { name: 'A', category: 'Electronics', brand: 'Sony' },
  { name: 'B', category: 'Electronics', brand: 'Apple' },
  { name: 'C', category: 'Apparel', brand: 'Nike' },
  { name: 'D', category: 'Electronics', brand: 'Sony' },
]

// Function to group products by both category and brand using loops
function groupByCategoryAndBrand(products) {
  // Initialize an object to store the grouped products
  let groupedProducts = {}

  // Loop through each product in the products array
  for (let i = 0; i < products.length; i++) {
    let product = products[i]
    let category = product.category
    let brand = product.brand

    // If the category doesn't exist yet, create it
    if (!groupedProducts[category]) {
      groupedProducts[category] = {}
    }
    // If the brand within the category doesn't exist, create it
    if (!groupedProducts[category][brand]) {
      groupedProducts[category][brand] = []
    }
    // Add the product name to the corresponding brand array
    groupedProducts[category][brand].push(product.name)
  }

  // Return the object containing the grouped products
  return groupedProducts
}

// Testing the function
const groupedProducts = groupByCategoryAndBrand(products)
console.log('Products Grouped by Category and Brand:', groupedProducts)
