// // Sample data: Array of products
// const products = [
//   { name: 'Milk', expiryDate: '2023-01-01' },
//   { name: 'Bread', expiryDate: '2022-12-01' },
//   { name: 'Butter', expiryDate: '2023-02-15' },
// ]

// // Function to check if any product has expired
// function hasExpiredProduct(products) {
//   // Get the current date
//   const currentDate = new Date()

//   // Using some() to check for any expired product
//   return products.some((product) => {
//     // Convert the expiry date string to a Date object
//     const expiryDate = new Date(product.expiryDate)
//     // Check if the expiry date is before the current date
//     return expiryDate < currentDate
//   })
// }

// // Check if any product has expired
// const hasExpired = hasExpiredProduct(products)
// console.log(hasExpired) // Output: true or false (depends on the current date)

// Sample data: Array of products
const products = [
  { name: 'Milk', expiryDate: '2023-01-01' },
  { name: 'Bread', expiryDate: '2022-12-01' },
  { name: 'Butter', expiryDate: '2023-02-15' },
]

// Function to check if any product has expired using a loop
function hasExpiredProduct(products) {
  const currentDate = new Date()

  for (let i = 0; i < products.length; i++) {
    const expiryDate = new Date(products[i].expiryDate)
    if (expiryDate < currentDate) {
      return true // An expired product is found
    }
  }
  return false // No expired products found
}

const hasExpired = hasExpiredProduct(products)
console.log(hasExpired) // Output: true or false (depends on the current date)
