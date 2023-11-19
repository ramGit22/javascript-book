// // Sample data: An object representing products and their prices
// const products = {
//   Apple: 1.25,
//   Milk: 0.99,
//   Bread: 2.5,
// }

// // Function to describe products and their prices
// function describeProducts(productObj) {
//   // Using Object.entries() to iterate over the product-price pairs
//   return Object.entries(productObj).map(([product, price]) => {
//     // For each [product, price] pair, return a descriptive string
//     return `Product: ${product}, Price: $${price}`
//   })
// }
// // Call the 'describeProducts' function with 'products' as an argument and
// // store the result in a new constant named 'productDescriptions'
// const productDescriptions = describeProducts(products)

// // Output the 'productDescriptions' to the console
// console.log(productDescriptions)

// Sample data: An object representing products and their prices
const products = {
  Apple: 1.25,
  Milk: 0.99,
  Bread: 2.5,
}

// Function to manually create descriptive strings for each product
function describeProducts(productObj) {
  let descriptions = [] // Initialize an array to hold the descriptions

  // Iterate over the object's properties using a for...in loop
  for (let product in productObj) {
    if (productObj.hasOwnProperty(product)) {
      // Construct a description string for each product and add it to the array
      descriptions.push(`Product: ${product}, Price: $${productObj[product]}`)
    }
  }

  return descriptions
}

// Call the 'describeProducts' function with 'products' as an argument and
// store the result in a new constant named 'productDescriptions'
const productDescriptions = describeProducts(products)

// Output the 'productDescriptions' to the console
console.log(productDescriptions)
