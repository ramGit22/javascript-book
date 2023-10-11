// function averageRatingByCategory(products) {
//   // Use reduce() to accumulate total ratings and count for each category
//   const accumulator = products.reduce((acc, product) => {
//     if (!acc[product.category]) {
//       acc[product.category] = { totalRating: 0, count: 0 }
//     }
//     acc[product.category].totalRating += product.rating
//     acc[product.category].count += 1
//     return acc
//   }, {})

//   // Calculate the average rating for each category
//   const averageRatings = {}
//   for (const category in accumulator) {
//     averageRatings[category] = Math.round(
//       accumulator[category].totalRating / accumulator[category].count
//     )
//   }

//   return averageRatings
// }
function averageRatingByCategory(products) {
  const categories = {}

  // Use forEach() to update the categories object
  products.forEach((product) => {
    if (!categories[product.category]) {
      categories[product.category] = { totalRating: 0, count: 0 }
    }
    categories[product.category].totalRating += product.rating
    categories[product.category].count += 1
  })

  // Calculate the average rating for each category directly
  const averageRatings = {}
  Object.keys(categories).forEach((category) => {
    averageRatings[category] = Math.round(
      categories[category].totalRating / categories[category].count
    )
  })

  return averageRatings
}

const products = [
  { name: 'Laptop', category: 'Electronics', rating: 4 },
  { name: 'Smartphone', category: 'Electronics', rating: 5 },
  { name: 'TV', category: 'Electronics', rating: 3 },
  { name: 'Shirt', category: 'Apparel', rating: 5 },
  { name: 'Pants', category: 'Apparel', rating: 4 },
  { name: 'Hat', category: 'Apparel', rating: 3 },
]
console.log(averageRatingByCategory(products))
