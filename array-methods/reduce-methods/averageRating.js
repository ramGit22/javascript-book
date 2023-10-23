// // Sample data with products, their categories, and ratings
// const products = [
//   { name: 'Laptop', category: 'Electronics', rating: 4 },
//   { name: 'Smartphone', category: 'Electronics', rating: 5 },
//   { name: 'TV', category: 'Electronics', rating: 3 },
//   { name: 'Shirt', category: 'Apparel', rating: 5 },
//   { name: 'Pants', category: 'Apparel', rating: 4 },
//   { name: 'Hat', category: 'Apparel', rating: 3 },
// ]

// // Function to calculate the average rating for each category
// function averageRatingByCategory(products) {
//   // We use reduce() to build up an intermediate object that will help in calculating average
//   const intermediateResult = products.reduce((acc, product) => {
//     // If category is not yet a key in our accumulator, initialize it
//     if (!acc[product.category]) {
//       acc[product.category] = { totalRating: 0, count: 0 }
//     }

//     // Update total rating and count for the category
//     acc[product.category].totalRating += product.rating
//     acc[product.category].count += 1

//     return acc
//   }, {})

//   // Create a new object to store average ratings
//   const averageRatings = {}

//   // Calculate average for each category and assign to the new object
//   for (let category in intermediateResult) {
//     averageRatings[category] =
//       intermediateResult[category].totalRating /
//       intermediateResult[category].count
//   }

//   return averageRatings
// }

// // Test the function and print the results
// const averageRatings = averageRatingByCategory(products)
// console.log('Average Ratings by Category:', averageRatings) // Expected: { Electronics: 4, Apparel: 4 }

// Sample data with products, their categories, and ratings
const products = [
  { name: 'Laptop', category: 'Electronics', rating: 4 },
  { name: 'Smartphone', category: 'Electronics', rating: 5 },
  { name: 'TV', category: 'Electronics', rating: 3 },
  { name: 'Shirt', category: 'Apparel', rating: 5 },
  { name: 'Pants', category: 'Apparel', rating: 4 },
  { name: 'Hat', category: 'Apparel', rating: 3 },
]

// Function to calculate the average rating for each category using loops
function averageRatingByCategory(products) {
  // Initialize an object to store intermediate results: total ratings and count for each category
  const intermediateResult = {}

  // Iterate over each product in the products array
  for (let i = 0; i < products.length; i++) {
    const product = products[i]

    // If the category of the current product doesn't exist in intermediateResult, initialize it
    if (!intermediateResult[product.category]) {
      intermediateResult[product.category] = { totalRating: 0, count: 0 }
    }

    // Update the total rating and count for the product's category
    intermediateResult[product.category].totalRating += product.rating
    intermediateResult[product.category].count += 1
  }

  // Initialize an object to store the final average ratings for each category
  const averageRatings = {}

  // Iterate over each category in intermediateResult to calculate average ratings
  for (let category in intermediateResult) {
    averageRatings[category] =
      intermediateResult[category].totalRating /
      intermediateResult[category].count
  }

  return averageRatings
}

// Test the function and print the results
const averageRatings = averageRatingByCategory(products)
console.log('Average Ratings by Category:', averageRatings) // Expected: { Electronics: 4, Apparel: 4 }
